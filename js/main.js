document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll effect for navigation
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Floating animation enhancer (subtle movement control)
  const floatingImages = document.querySelectorAll(".float");

  floatingImages.forEach((img, index) => {
    img.style.animationDuration = (5 + index) + "s";
  });

});
