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

const rating = document.getElementsByClassName("rating")[0];
const block = document.getElementsByClassName("block");

for (var i = 1; i < 100; i++) {
  rating.innerHTML += "<div class='block'></div>";
  block[i].style.transform = "rotate(" + 3.6 * i + "deg)";
  block[i].style.animationDelay = `${i / 40}s`;
}

//360 /100 = 3.6 deg

const counter = document.querySelector(".counter");
counter.innerText = 0;

const target = +counter.getAttribute("data-target");

const NumberCounter = () => {
  const value = +counter.innerText;
  if (value < target) {
    counter.innerText = Math.ceil(value + 1);
    setTimeout(() => {
      NumberCounter();
    }, 25);
  }
};

NumberCounter();
