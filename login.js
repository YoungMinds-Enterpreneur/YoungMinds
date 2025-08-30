import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://olrfkzswyaanwmxomynr.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scmZrenN3eWFhbndteG9teW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NTkzNzksImV4cCI6MjA3MTUzNTM3OX0.5nqRbdybZ8qguJbK60GBi1FtWyvuiIbaVxc3t0AQO4Q"; // replace with your anon key (client-side ok)
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function showPopup(message) {
  let popup = document.getElementById("login-popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "login-popup";
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.background = "#333";
    popup.style.color = "#fff";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "8px";
    popup.style.zIndex = 10000;
    popup.style.transition = "0.3s all ease";
    document.body.appendChild(popup);
  }
  popup.textContent = message;
  popup.style.opacity = 1;
  setTimeout(() => (popup.style.opacity = 0), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  // IMPORTANT: **NO** auto-redirect on page load — we removed that behavior on purpose.

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      showPopup("⚠️ Login failed: " + error.message);
      return;
    }

    // Sign-in succeeded. Supabase client persists the session automatically.
    showPopup("✅ Login successful!");

    // Redirect to details page (session will be available there).
    // Small optional wait to let the client persist session if needed:
    setTimeout(() => (window.location.href = "details.html"), 400);
  });
});
