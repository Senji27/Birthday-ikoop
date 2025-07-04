document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".fade-in");
  
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("visible");
      }, index * 500); // ปรากฏทีละรูปห่างกัน 0.5 วินาที
    });
  });
  
  function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  
  setInterval(createFloatingHeart, 500);
  