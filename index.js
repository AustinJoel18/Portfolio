const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const scrollAmount = 270;

/* Arrow navigation */
leftBtn.addEventListener("click", () => {
  slider.scrollLeft -= scrollAmount;
});

rightBtn.addEventListener("click", () => {
  slider.scrollLeft += scrollAmount;
});

/* Swipe / drag support */
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

/* Touch support */
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});


