const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const video = document.querySelector('.background_video');
  const volumeSlider = document.querySelector('#volume-slider');

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });

  volumeSlider.addEventListener('input', function() {
  video.volume = this.value;
  if (video.muted){
    video.muted = false;
  }
});

};

navSlide();
