let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

// Nút next/prev
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";  
  dots[n].className += " active";
}

// Tự động chuyển ảnh
setInterval(() => {
  plusSlides(1);
}, 5000);

// Bấm vào dot
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => currentSlide(i));
}

// Điều khiển nhạc
let music = document.getElementById("bg-music");
let musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "🔊 Tắt nhạc";
  } else {
    music.pause();
    musicToggle.textContent = "🔈 Bật nhạc";
  }
});
