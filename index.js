// Typing text animation for description
const typedText = document.getElementById("typedText");
const phrases = [
  "Share, learn, and inspire with YoungMinds.",
  "Where creativity meets collaboration.",
  "Build ideas that shape the future."
];

let phraseIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  let current = phrases[phraseIndex];
  if (!deleting) {
    typedText.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typedText.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();
