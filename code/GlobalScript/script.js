// Show responsive menu on click 
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".responsive-menu");
const headroom = document.querySelector(".headroom")

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    setTimeout(function showMenu() {
        menu.classList.toggle("show-hide");
        headroom.classList.toggle("res-menu-fixed");
    }, 500)
});

//Opacity of header on first-time-page-render
gsap.fromTo(".logo", {opacity: 0}, {opacity: 1, duration: 2});
gsap.fromTo(".hamburger", {opacity: 0}, {opacity: 1, duration: 2});
gsap.fromTo(".web-menu", {opacity: 0}, {opacity: 1, duration: 2});

//AOS Library Configuration

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset:170, // offset (in px) from the original trigger point
    delay: 250, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
  });
