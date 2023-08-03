function smoothScroll(target) {
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 80; // Adjust the offset according to your navbar height

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

const navbarLinks = document.querySelectorAll('.navbar-nav a');
navbarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

const swiper = new Swiper('.swiper', {
   
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          }
  });

// // In your script.js file

// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.home-slider', {
//         loop: true,
//         slidesPerView: 1,
//         spaceBetween: 30,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         autoplay: {
//             delay: 00, // Adjust the delay time (in milliseconds) between each autoswipe
//         },
//         breakpoints: {
//             768: {
//                 slidesPerView: 2,
//             },
//             1024: {
//                 slidesPerView: 3,
//             },
//         },
//     });
// });
