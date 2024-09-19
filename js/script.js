let tabs = document.querySelectorAll(".seller_tab .tabs .tab");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

var swiper = new Swiper(".bestSellerTab", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    340: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    840: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".products-tab", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: "",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".seller_tab .products-tab .swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    840: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1300: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
});


