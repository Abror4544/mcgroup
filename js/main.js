$(function () {
  var swiper = new Swiper(".certSwiper", {
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".cert-next",
      prevEl: ".cert-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviewSwiper", {
    slidesPerGroup: 1,
    spaceBetween: 88,
    loop: true,
    navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });

  $(".to_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
