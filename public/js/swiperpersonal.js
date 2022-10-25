(function () {
    let swiper = new Swiper(".mySwiperHero", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})();


(function () {
    let swiper1 = new Swiper(".sw1", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let swiper2 = new Swiper(".sw2", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let swiper3 = new Swiper(".swp", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

})();


(function () {
    var swiper = new Swiper(".mySwiperMobo", {
        slidesPerView: "auto",
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
})();


(function () {
    let swiper = new Swiper(".mySwiperOptions", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
})();