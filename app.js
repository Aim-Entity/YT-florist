function main() {
  btn();
  fade();
  slider();
  cards();
}

function btn() {
  let btn = document.querySelector(".btn");

  btn.addEventListener("mouseenter", () => {
    btn.style.background = "white";
    btn.style.color = "#ffc1b4";
  })

  btn.addEventListener("mouseleave", () => {
    btn.style.background = "#ffc1b4";
    btn.style.color = "black";
  })
}

function fade() {
  let group = document.querySelector(".s1-text");

  window.addEventListener("DOMContentLoaded", () => {
    group.style.opacity = "1";
    group.style.top = "0px";
  })
}

function slider() {
  const location = document.querySelector(".location");
  const leftImg = document.querySelector(".left-img");
  const rightImg = document.querySelector(".right-img");

  location.addEventListener("mouseenter", e => {
    leftImg.style.bottom = "0px";
    rightImg.style.top = "0px";
    leftImg.style.left = "2.5px";
    rightImg.style.right = "2.5px";
  })

  location.addEventListener("mouseleave", e => {
    leftImg.style.bottom = "60px";
    rightImg.style.top = "60px";
    leftImg.style.left = "0px";
    rightImg.style.right = "0px";
  })
}

function cards() {
  let cards = document.querySelectorAll(".card");
  let state = 0;

  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", e => {
      let object = e.target;

      object.style.bottom = "15px";
      object.style.transform = "rotate(-2deg)";
    })

    cards[i].addEventListener("mouseleave", e => {
      let object = e.target;
      console.log(object);

      object.style.bottom = "0px";
      object.style.transform = "rotate(0deg)";
    })
  }
}

main();