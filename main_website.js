const scrollSpeed = 0.5; // Pixels per interval
document.addEventListener("click", () => {
    const interval = setInterval(() => {
        window.scrollBy(0, scrollSpeed);
        // Stop when reaching the bottom
    }, 16);
},{ once: true });

document.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");

  overlay.classList.add("fade-out");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);
    
}, { once: true });

window.addEventListener("scroll", () => {
  const bg = document.querySelector(".parallax-bg");
  const offset = -window.scrollY;

  bg.style.transform = `translateY(${offset * 0.1}px)`;
});

