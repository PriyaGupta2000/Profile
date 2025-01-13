// Dynamic Year in Footer
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

// Dynamic Typing Effect
const dynamicText = document.getElementById("dynamic-text");
const roles = ["Web Developer", "Graphic Designer", "UI/UX Designer"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    dynamicText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 2000);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();
