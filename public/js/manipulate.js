let url_string = window.location.href;
let url = new URL(url_string);
let j = url.searchParams.get("j");
console.log(j)

let mySwiperHero = document.querySelector('.mySwiperHero .swiper-slide');
let imagesGallery = document.querySelectorAll('.mySwiperGallery img');
let inDescription = document.querySelector('.inDescription .infogame');
let arr = games;

arr.forEach(el => {

    if (el.name === j) {
        console.log('Olá')
        for (let i = 0; i < imagesGallery.length; i++) {
            imagesGallery[i].src = el.miniimg1[i];
        }

        mySwiperHero.innerHTML = el.bannerDescSmall;
        inDescription.innerHTML = el.description;
    }

})