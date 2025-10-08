function toggleMenu(icon) {
  const dropdown = document.querySelector(".dropdown");
  const isOpen = dropdown.classList.toggle("open");

  icon.classList.toggle("fa-bars", !isOpen);
  icon.classList.toggle("fa-xmark", isOpen);
}

const hamburg = document.querySelector(".hamburg");
const dropdownLinks = document.querySelectorAll(".dropdown .links a");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.remove("open");
    hamburg.classList.remove("fa-xmark");
    hamburg.classList.add("fa-bars");
  });
});

// ===== Progress Circle (Play on Scroll) =====
const skillCards = document.querySelectorAll(".skill-card");

const animateCircle = (card) => {
  const circle = card.querySelector(".progress-ring__circle");
  const counter = card.querySelector(".counter");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const target = +card.getAttribute("data-target");
  let current = 0;

  const animate = () => {
    if (current <= target) {
      counter.innerText = current + "%";
      const offset = circumference - (current / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      current++;
      requestAnimationFrame(animate);
    }
  };

  animate();
};

// 👁️‍🗨️ اینجا با IntersectionObserver فقط وقتی کاربر به اون بخش برسه اجرا می‌کنیم
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCircle(entry.target);
        observer.unobserve(entry.target); // فقط یه بار اجرا بشه
      }
    });
  },
  {
    threshold: 0.4, // یعنی وقتی ۴۰٪ از المان دیده شد
  }
);

skillCards.forEach((card) => observer.observe(card));

// ===== Typewriter =====
const text = ["DEVELOPER", "RESEARCHER", "DESIGNER", "BOXER"];
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0,
  charIndex = 0;

function typeWriter() {
  if (charIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
