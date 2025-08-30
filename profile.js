// Avatar Preview Handler
document.getElementById("avatarUpload").addEventListener("change", function(event) {
  const preview = document.getElementById("avatarPreview");
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "No Image";
  }
});

// Save Form (Toast Notification)
document.getElementById("detailsForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // ✅ Toast
  const toast = document.createElement("div");
  toast.innerText = "Details saved successfully!";
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.padding = "14px 22px";
  toast.style.borderRadius = "14px";
  toast.style.background = "rgba(255,255,255,0.15)";
  toast.style.backdropFilter = "blur(8px)";
  toast.style.color = "#fff";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "0 0 12px rgba(255,255,255,0.6)";
  toast.style.zIndex = "9999";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.5s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 2000);
});
