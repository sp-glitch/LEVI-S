$(function () {
  feather.replace();

  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("on");

    $(this).find(".hamburger").toggleClass("is-active");
  });

  var firstSwiper = new Swiper(".main_slide .main_slide_inner", {
    spaceBetween: 30,
    effect: "fade",

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },

    autoplay: {
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  $(".tab_menu>ul>li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index();
    $(".tab_cont>div").eq(idx).addClass("on").siblings().removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });

  var secondSwiper = new Swiper(".main_tab .second-swiper", {
    slidesPerView: 1.5,
    spaceBetween: 28,
    loop: true,

    pagination: {
      el: ".second-swiper .swiper-pagination",
      clickable: "true",
      type: "bullets",
    },
    navigation: {
      prevEl: ".swiper-button-nn",
      nextEl: ".swiper-button-pp",
    },
    slideActiveClass: "on",

    breakpoints: {
      1200: {
        slidesPerView: 4.5,
      },

      768: {
        slidesPerView: 1.5,
      },

      600: {
        slidesPerView: 1.5,
      },

      500: {
        slidesPerView: 2.5,
      },
    },
  });

  $(".main_history .left_con").slick({
    arrows: false,
    fade: true,
    asNavFor: ".main_history .right_con",
  });
  $(".main_history .right_con").slick({
    arrows: false,
    slidesToShow: 2,
    asNavFor: ".main_history .left_con",

    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".main_history .slide_btn_l").on("click", function () {
    $(".main_history .left_con").slick("slickPrev");
  });

  $(".main_history .slide_btn_r").on("click", function () {
    $(".main_history .right_con").slick("slickNext");
  });
});
