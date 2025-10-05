function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)"; //نمایان میشه
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)"; //قایم میشه
}

const text = ["DEVELOPER", "RESEARCHER", "DESIGNER", "BOXER"];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textindex = 0;
let charcterindex = 0;

function typeWriter() {
  if (charcterindex < text[textindex].length) {
    textElements.innerHTML += text[textindex].charAt(charcterindex);
    charcterindex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textindex = (textindex + 1) % text.length;
    charcterindex = 0;
    setTimeout(typeWriter, 500);
  }
}
window.onload = typeWriter;

const ratings = document.getElementsByClassName("rating");

for (let r = 0; r < ratings.length; r++) {
  const rating = ratings[r];

  // ساخت 100 بلاک
  rating.innerHTML += "<div class='block'></div>".repeat(99);
  const blocks = rating.getElementsByClassName("block");

  // زاویه و animation
  const counter = rating.querySelector(".counter");
  const target = +counter.getAttribute("data-target");
  counter.innerText = 0;

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.transform = "rotate(" + 3.6 * i + "deg)";
    blocks[i].style.animationDelay = `${i / 40}s`;

    // فقط تا درصد target رنگی شود
    if (i < target) {
      blocks[i].style.backgroundColor = "red";
      blocks[i].style.boxShadow = "0 0 15px red, 0 0 30px red";
    }
  }

  // شمارنده عددی
  const NumberCounter = () => {
    const value = +counter.innerText;
    if (value < target) {
      counter.innerText = value + 1;
      setTimeout(NumberCounter, 25);
    }
  };
  NumberCounter();
}
