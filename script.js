let slideIndex = 0;
showSlides();

// Slideshow tự chạy
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // đổi ảnh mỗi 4 giây
}

// Nhạc nền
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const overlay = document.getElementById("start-overlay");
const startBtn = document.getElementById("start-btn");

// Khi click "Chạm để bắt đầu"
startBtn.addEventListener("click", () => {
  overlay.style.display = "none"; // Ẩn overlay
  music.play().then(() => {
    musicToggle.textContent = "🔊 Tắt nhạc";
    musicToggle.setAttribute("aria-pressed", "true");
  }).catch(err => {
    console.log("Không phát được nhạc:", err);
  });
});

// Nút bật/tắt nhạc
musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "🔊 Tắt nhạc";
    musicToggle.setAttribute("aria-pressed", "true");
  } else {
    music.pause();
    musicToggle.textContent = "🔈 Bật nhạc";
    musicToggle.setAttribute("aria-pressed", "false");
  }
});
