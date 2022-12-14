const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slideNodes = $$('.slides-dot_item')
const slides = $('.slides:not(.slides-manual)')
const slide = $('.slide')
const slideContent = $('.slide-content')
const slideContentApp = $('.slide-content-app')
const slidesPrev = $('.slides-prev');
const slidesNext = $('.slides-next');
const slideContentTextAll = $$('.slide-content-text');
// handle when onclick dot slide
slideNodes[0].onclick = () => {
    //Reset interval with indexSlideCurrent
    indexSlideCurrent = 0;
    // Add and remove class node, slide, content    
    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[0].classList.add('active')
    slide.classList.add('active-1')
    slide.classList.remove('active-2')
    slide.classList.remove('active-3')
    slide.classList.remove('active-4')
    slideContent.classList.add('active-5')
    slideContent.classList.remove('active-6')
    slideContent.classList.remove('active-7')
    slideContent.classList.remove('active-8')
    document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
    slideContentTextAll[0].classList.add('visi-slide-film')
}
slideNodes[1].onclick = () => {
    indexSlideCurrent = 1;
    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[1].classList.add('active')
    slide.classList.add('active-2')
    slide.classList.remove('active-1')
    slide.classList.remove('active-3')
    slide.classList.remove('active-4')
    slideContent.classList.add('active-6')
    slideContent.classList.remove('active-5')
    slideContent.classList.remove('active-7')
    slideContent.classList.remove('active-8')
    
    document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
    slideContentTextAll[1].classList.add('visi-slide-film')
}
slideNodes[2].onclick = () => {
    indexSlideCurrent = 2;
    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[2].classList.add('active')
    slide.classList.add('active-3')
    slide.classList.remove('active-1')
    slide.classList.remove('active-2')
    slide.classList.remove('active-4')
    slideContent.classList.add('active-7')
    slideContent.classList.remove('active-5')
    slideContent.classList.remove('active-6')
    slideContent.classList.remove('active-8')
    document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
    slideContentTextAll[2].classList.add('visi-slide-film')
}
slideNodes[3].onclick = () => {
    indexSlideCurrent = 3;
    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[3].classList.add('active')
    slide.classList.add('active-4')
    slide.classList.remove('active-1')
    slide.classList.remove('active-3')
    slide.classList.remove('active-2')
    slideContent.classList.add('active-8')
    slideContent.classList.remove('active-5')
    slideContent.classList.remove('active-6')
    slideContent.classList.remove('active-7')
    document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
    slideContentTextAll[3].classList.add('visi-slide-film')
}

// Set Interval for slides
// var loopSlider = setInterval(loopSlide, 6000);
var indexSlideCurrent = 0;
// function loopSlide() {
    //     indexSlideCurrent > 2 ? indexSlideCurrent = 0 : indexSlideCurrent ++;
    //     autoSlide(indexSlideCurrent);
    // }
    
    // function autoSlide(indexSlideCurrent) {
        //     slideNodes[indexSlideCurrent].onclick();
        // }
        
        // Handle prev/next slide changes
        // slide previous slide
        slidesPrev.onclick = function() {
            indexSlideCurrent --;
            if(indexSlideCurrent < 0) {
                indexSlideCurrent = slideNodes.length - 1;
            }
            slideNodes[indexSlideCurrent].onclick()
        }
        //slide next slide
        slidesNext.onclick = function() {
            indexSlideCurrent ++;
            if(indexSlideCurrent >= slideNodes.length) {
                indexSlideCurrent = 0;
            }
            slideNodes[indexSlideCurrent].onclick()
        }
        // mouse move event
        var startClient;
        var endClient;
        slides.onmousedown = function(e) {
            startClient = e.clientX;
        }
        slides.onmouseup = function(e) {
            endClient = e.clientX;
            if(startClient - endClient > 50) {
                slidesNext.onclick();
            }
            else if(startClient - endClient <= -50) {
                slidesPrev.onclick();
            }
        }
        
        // touch mobile move event
        slides.ontouchstart = function(e) {
            startClient = e.touches[0].clientX;
        }
        slides.ontouchend = function(e) {
            endClient = e.changedTouches[0].clientX;
            const aboutClient = startClient - endClient;
            if(aboutClient > 50) {
                slidesNext.onclick();
            }
            else if(aboutClient < -50) {
                slidesPrev.onclick();
            }
        }
        
        
        // Handle scroll window scroll event on visibility
        const header = $('header')
const scrollFirstPage = $('.arrow-mobile-first-page')
window.addEventListener('scroll', changeStatus)
function changeStatus() {
    var scrollBrowser = window.scrollY;
    if(scrollBrowser >= 15) {
        header.classList.add('change-header')
    }else {
        header.classList.remove('change-header')
    }
    if(scrollBrowser >= 6700) {
        scrollFirstPage.style.visibility = 'visible'
    }else {
        scrollFirstPage.style.visibility = 'hidden'
    }
}

// Handle Menu mobile
const menuMobile = $('.mobile-menu')
const btnMenu = $('.menu-mobile_icon')
const itemMenu = $('.mobile-menu-item_link')
const arrowBtn = $('.mobile-arrow')
const subnavMobile = $$('.mobile-menu-subnav-item')
btnMenu.onclick = () => {
    menuMobile.classList.toggle('visi-menu');
    btnMenu.classList.toggle('ti-back-left')
    btnMenu.classList.toggle('ti-menu')
    var testBtnMenu = btnMenu.closest('.ti-menu')
    var testArrowBtn = arrowBtn.closest('.ti-minus')
    if(testBtnMenu && testArrowBtn) {
        subnavMobile.forEach(function (subnavMobile) {
            subnavMobile.classList.remove('change-height')
        })
        arrowBtn.classList.toggle('ti-plus')
        arrowBtn.classList.toggle('ti-minus')
    }
};
itemMenu.onclick = () => {
    menuMobile.classList.remove('visi-menu');
    btnMenu.classList.remove('ti-back-left');
    btnMenu.classList.add('ti-menu');
};
arrowBtn.onclick = () => {
    subnavMobile.forEach(function (subnavMobile) {
        subnavMobile.classList.toggle('change-height')
    })
    arrowBtn.classList.toggle('ti-plus')
    arrowBtn.classList.toggle('ti-minus')
}

// handle button play film

const film = [
    {
        subPath: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/M7XM597XO94?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        subPath: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/O6E_45lsxBE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
];

const btnFilm = document.querySelector('.js-btn-film-play')
const btnTrailer = document.querySelectorAll('.js-btn-trailer-play')
const filmApp = document.querySelector('.film-app')
const filmModal = document.querySelector('.modal-film')
const trailer = document.querySelector('.trailer')
const filmPlay = document.querySelector('.film')
const video = document.querySelector('video')
filmModal.onclick = function () {
    filmApp.classList.remove('on-film')
    // video.pause();
    trailer.innerHTML = '';
    filmPlay.innerHTML = '';
    filmPlay.style.display = 'none';
    trailer.style.display = 'none';
}
btnTrailer.forEach(function (btnTrailer) {
    btnTrailer.onclick = function () {
        trailer.innerHTML = film[indexSlideCurrent].subPath;
        let iframe = document.querySelector('iframe')
        iframe.setAttribute('src', iframe.getAttribute('data-src'))
        filmApp.classList.add('on-film')
        trailer.style.display = 'block';
        filmPlay.style.display = 'none';
    }
})
btnFilm.onclick = () => {
    toastAram()
}



const appItemsFilm = {
    newFilm: [
        {
            id: 2,
            src: './assets/trailer//VENOM 2 Official Trailer (2021).mp4',
            path: 'https://photo-baomoi.zadn.vn/w700_r1/2021_05_11_329_38800919/2440c180dfc2369c6fd3.jpg',
            name: 'Venom 2 ?????i M???t T??? Th??',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 3,
            src: './assets/trailer/Thor- The Dark World Official Trailer HD.mp4',
            path: 'https://wallpaperaccess.com/full/645154.jpg',
            name: 'Thor Th??? Gi???i B??ng T???i',
            category: 'Vi???n t?????ng',
            duration: '148 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 9,
            src: './assets/trailer/NH???NG K??? V?? C???M - TRAILER CH??NH TH???C - KH???I CHI???U 06.11.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/dont-look-back-2021_web_posterLandscape_8e9f994b33e6f58f9ba26f6f11ceb941.jpg',
            name: 'Nh???ng k??? v?? c???m',
            category: 'Kinh d???',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 5,
            src: './assets/trailer/B??P B?? S??T NH??N (Child???s Play 2019) - Official Trailer - KC- 26.07.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/childs-play_web_posterLandscape_d13c22059d5c04dfa4e19eb2ae0ca0df.jpg',
            name: 'B??p B?? S??t Nh??n',
            category: 'Kinh d???',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 6,
            src: './assets/trailer/ZOOTOPIA- PHI V??? ?????NG TR???I - Trailer D -Ch?? L?????i-.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/zootopia_web_posterLandscape_3faccca8bbd905cc91f657f11bf86ae7.jpg',
            name: 'Phi V??? ?????ng Tr???i',
            category: 'Gia ????nh',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 7,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer ??? Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/john-wick-chapter-3-parabellum_web_posterLandscape_8720a29a126ba538f88b8869101d516a.jpg',
            name: 'S??t Th??? John Wick 3',
            category: 'H??nh ?????ng',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 9,
            src: './assets/trailer/Thor- Ragnarok Teaser Trailer [HD].mp4',
            path: './assets/img/poster-film/hala-thor1.jpg',
            name: 'Thor T???n Th??? Ragnarok',
            category: 'Vi???n t?????ng',
            duration: '142 ph??t',
            age: '18+',
            premidum: '?????c bi???t',
        },
        {
            id: 8,
            src: './assets/trailer/DORAEMON ????I B???N TH??N [STAND BY ME] (TRAILER) - ????R??MON TH??I NGUY??N.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/doraemon-stand-by-me_web_posterLandscape_370b8686dbb61311f09a718f43c6e9d2.jpg',
            name: '???? R?? Mon: ????i B???n Th??n',
            category: 'Gia ????nh',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 10,
            src: './assets/trailer/TR???C QU??? TRAILER _ DKKC_ 04.12.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-amityville-horror_web_posterLandscape_33b44c16ed48b15697779d6400c05379.jpg',
            name: 'Ng??i Nh?? R??ng R???n',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 11,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer ??? Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/death-by-zero_web_posterLandscape_aa9462fbddee226ccf0f060bb8371c01.jpg',
            name: 'S??t th???',
            category: 'H??nh ?????ng',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 12,
            src: './assets/trailer/Life Of Pi - Trailer - MegaStar Cineplex.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/life-of-pi_web_posterLandscape_4454549f9219a2457f9514c61c26d785.jpg',
            name: 'Cu???c ?????i C???a Pi',
            category: 'T??m l??',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 1,
            src: './assets/trailer/(Official Trailer) NG??I NH?? MA ??M.mp4',
            path: 'https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Ghost-House-movie.jpg?ssl=1',
            name: 'Ng??i Nh?? Ma ??m',
            category: 'Kinh d???',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 13,
            src: './assets/trailer/B??P B?? S??T NH??N (Child???s Play 2019) - Official Trailer - KC- 26.07.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/10-minutes-gone_web_posterLandscape_cab03e38e008e1d2e8fc107abf04f457.jpg',
            name: '10 Ph??t S???ng C??n',
            category: 'Kinh d???',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 14,
            src: './assets/trailer/ZOOTOPIA- PHI V??? ?????NG TR???I - Trailer D -Ch?? L?????i-.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/monster-hunter_web_posterLandscape_f220b5bf0eb4fa8030e8d5d4160ca4a9.jpg',
            name: 'Th??? S??n Qu??i V???t',
            category: 'Gia ????nh',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 15,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer ??? Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/moana_web_posterLandscape_c540d02b72f9e5ac2bf6bb6108b70c4a.jpg',
            name: 'H??nh Tr??nh C???a Moana',
            category: 'H??nh ?????ng',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 16,
            src: './assets/trailer/DORAEMON ????I B???N TH??N [STAND BY ME] (TRAILER) - ????R??MON TH??I NGUY??N.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/50-first-dates_web_posterLandscape_c6fe039db02d12360d5e894c57bfdd10.jpg',
            name: '50 L???n H???n ?????u Ti??n',
            category: 'Gia ????nh',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 17,
            src: './assets/trailer/NH???NG K??? V?? C???M - TRAILER CH??NH TH???C - KH???I CHI???U 06.11.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/black-swan_web_posterLandscape_e271cae64ac421a1f327f596cef44b89.jpg',
            name: 'Thi??n Nga ??en',
            category: 'Kinh d???',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 18,
            src: './assets/trailer/TR???C QU??? TRAILER _ DKKC_ 04.12.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/vacacy-2-the-first-cut_web_posterLandscape_474c9e3e2ad22cc1baeeea04835ea17d.jpg',
            name: 'Nh?? Tr??? Kinh Ho??ng 2',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 19,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer ??? Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/shining-girl_web_posterLandscape_055f6c4b541f5305a37af37851e30e8b.jpg',
            name: 'C?? N??ng L???p L??nh',
            category: 'H??nh ?????ng',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 20,
            src: './assets/trailer/Life Of Pi - Trailer - MegaStar Cineplex.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/bo-gia_web_posterLandscape_67433b6efe0a2565ec972063216134dc.jpg',
            name: 'B??? Gi??',
            category: 'T??m l??',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        }
    ],
    horrorFilm: [
        {
            id: 1,
            src: './assets/trailer/IT - Official Teaser Trailer.mp4',
            path: './assets/img/poster-film/It.jpg',
            name: 'G?? H??? Ma Qu??i',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 2,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-wretched_web_posterLandscape_c4baa321437aa653d1a685be2db816fd.jpg',
            name: 'M??? Qu???',
            category: 'Kinh d???',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 3,
            src: './assets/trailer/MUSE- N??NG TH?? C???A QU???- KH???I CHI???U M??NG 8 T???T (23.02.2018) OFFICIAL TRAILER.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/muse_web_posterLandscape_1e0fb439dc1b1a74e9818482e835f5e7.jpg',
            name: 'N??ng Th?? C???a Qu???',
            category: 'Kinh d???',
            duration: '148 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 9,
            src: './assets/trailer/Annabelle- T???o V???t Qu??? D??? - Official Trailer.mp4',
            path: './assets/img/poster-film/Anabel.jpg',
            name: 'Annabelle T???o V???t Qu??? D???',
            category: 'Kinh d???',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 5,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/howl_web_posterLandscape_b1d8ef39542f9c28c0dd64db7de04f8e.jpg',
            name: 'Ma S??i 2016',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 6,
            src: './assets/trailer/NG??Y ?????M M??U- X??C S???NG TR???I D???Y - Trailer ch??nh th???c.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/day-of-the-dead-bloodline_web_posterLandscape_1a61b8fc8ae83a7e24aa20a58346f168.jpg',
            name: 'Ng??y ?????m M??u: X??c S???ng',
            category: 'Kinh d???',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 7,
            src: './assets/trailer/Phim kinh d??? -LU???T QU???- Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/seeda-the-spirit-of-ramayana_web_posterLandscape_134d4ac0e895f3bcddf9b94efff8b745.jpg',
            name: 'Seeda: Oan H???n Nh?? H??t',
            category: 'Kinh d???',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 9,
            src: './assets/trailer/Phim kinh d??? -LU???T QU???- Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-lodgers_web_posterLandscape_ab3d118aab273fd4b45d652aac0b3c38.jpg',
            name: 'Lu???t Qu???',
            category: 'Kinh d???',
            duration: '142 ph??t',
            age: '18+',
            premidum: '?????c bi???t',
        },
        {
            id: 8,
            src: './assets/trailer/(Official Trailer)  SONG SINH (ROPES) - KC- 08.01.2021.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/ropes_web_posterLandscape_fdbd938d0a0ddd2193c31cc60d1d3f5c.jpg',
            name: 'Song Sinh',
            category: 'Kinh d???',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 10,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- TH?? NGHI???M X??C S???NG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-cabin-in-the-woods_web_posterLandscape_6b65750fdff89359291d0f0266d0b946.jpg',
            name: 'C??n Nh?? G??? Trong R???ng',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 11,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/bram-stokers-dracula_web_posterLandscape_382cd1cbbd719486f741299e3df7026f.jpg',
            name: 'B?? T?????c Ma C?? R???ng',
            category: 'Kinh d???',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 12,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- TH?? NGHI???M X??C S???NG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-crazies_web_posterLandscape_6cb01fb1b00330ea24b9caa307f61af0.jpg',
            name: 'C??n B???nh Kh??t M??u',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 13,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/scary-stories-to-tell-in-the-dark_web_posterLandscape_c81a500c53be119d0af4c195e18d5f59.jpg',
            name: 'Chuy???n Kinh D??? L??c N???a ????m',
            category: 'Kinh d???',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 14,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-possession_web_posterLandscape_ce7eb55ba37b0604795a5fe1b766db33.jpg',
            name: '????nh C???p Linh H???n',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 15,
            src: './assets/trailer/LAKE PLACID- LEGACY Official Trailer (2018) Horror Movie.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/lake-placid-legacy_web_posterLandscape_e4163aaf5b8f7eb9b46e0510953b0b3c.jpg',
            name: '?????m L???y Ch???t',
            category: 'Kinh d???',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 16,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/mary_web_posterLandscape_861f8a0ea4e6a34ef3153a1e7d28a97a.jpg',
            name: 'L???i Nguy???n Tr??n Bi???n',
            category: 'Kinh d???',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 17,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/gretel-and-hansel_web_posterLandscape_6da248b1af617cd859bc1d7a75a3d3b7.jpg',
            name: 'Gretel V?? Hansel: Truy???n C??? K??? D???',
            category: 'Kinh d???',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 18,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-promise_web_posterLandscape_157ff307ea585879809f1904cd61daa5.jpg',
            name: 'Giao ?????c Ch???t',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 19,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/friend-request_web_posterLandscape_13ce91e833d8a9ddd85045db6f916146.jpg',
            name: 'K???t B???n V???i Ma',
            category: 'Kinh d???',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 20,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/prince-of-darkness_web_posterLandscape_840598fb6fcdd811680120d64a9471b4.jpg',
            name: 'Ho??ng T??? B??ng ????m',
            category: 'Kinh d???',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        }
    ],
    blockbusterFilm: [
        {
            id: 1,
            src: "./assets/trailer/Marvel Studios' Avengers- Infinity War - Official Trailer.mp4",
            path: './assets/img/poster-film/endgame.jpg',
            name: 'Avengers: Endgame',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 2,
            src: './assets/trailer/Transformers- The Last Knight Official Trailer 1 (2017) - Michael Bay Movie.mp4',
            path: './assets/img/poster-film/The-Last-Knight-New-Banner-03 (1).jpg',
            name: 'Transformers 3',
            category: 'Vi???n T?????ng',
            duration: '95 ph??t',
            age: '18+',
            premidum: '?????c bi???t',
        },
        {
            id: 3,
            src: './assets/trailer/SPIDER-MAN- FAR FROM HOME - Official Teaser Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/spider-man-homecoming_web_posterLandscape_89e703b5ff9ed401a44cc32747c5b72c.jpg',
            name: 'Ng?????i Nh???n: Tr??? V??? Nh??',
            category: 'Vi???n T?????ng',
            duration: '148 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 4,
            src: './assets/trailer/Transformers- The Last Knight Official Trailer 1 (2017) - Michael Bay Movie.mp4',
            path: './assets/img/poster-film/tranformer5.jpg',
            name: 'Transformers 5: K??? s?? cu???i c??ng',
            category: 'Vi???n T?????ng',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 5,
            src: './assets/trailer/Annabelle- T???o V???t Qu??? D??? - Official Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-last-witch-hunter_web_posterLandscape_646ca2643cfaaed1aaefd1d4500d6111.jpg',
            name: 'Chi???n Binh S??n Ph?? Th???y',
            category: 'Vi???n T?????ng',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 6,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/doctor-strange-2016_web_banner_31c2a78f1a132f8be1cbd7540dd14e67.jpg',
            name: 'Ph?? Th???y T???i Th?????ng',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 7,
            src: './assets/trailer/NG??Y ?????M M??U- X??C S???NG TR???I D???Y - Trailer ch??nh th???c.mp4',
            path: './assets/img/poster-film/wonderWoman.jpg',
            name: 'WonderWoman 2017',
            category: 'Vi???n T?????ng',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 8,
            src: './assets/trailer/Phim kinh d??? -LU???T QU???- Trailer.mp4',
            path: './assets/img/poster-film/loki.jpg',
            name: 'Loki: v??? th???n l???a l???c',
            category: 'Vi???n T?????ng',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 9,
            src: './assets/trailer/Phim kinh d??? -LU???T QU???- Trailer.mp4',
            path: './assets/img/poster-film/nguoidepVaquaiVat.jpg',
            name: 'Ng?????i ?????p V?? Qu??i V???t',
            category: 'Vi???n T?????ng',
            duration: '142 ph??t',
            age: '18+',
            premidum: '?????c bi???t',
        },
        {
            id: 10,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- TH?? NGHI???M X??C S???NG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/hellboy_web_posterLandscape_79ad6e42eb2e6d15f16546f0f0150df0.jpg',
            name: 'C???u B?? ?????a Ng???c',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 11,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/faster_web_posterLandscape_ef34fabb5489349106dd66b6208dfb34.jpg',
            name: 'Th???n T???c',
            category: 'Vi???n T?????ng',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 12,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- TH?? NGHI???M X??C S???NG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/x-men-first-class_web_posterLandscape_7a90038a7a8451b8a03caad281162b13.jpg',
            name: 'X-Men: Th??? H??? ?????u',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 13,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/power-rangers_web_posterLandscape_c4fb3604e7c14e84bf0cd54c219de145.jpg',
            name: 'N??m Anh Em Si??u Nh??n',
            category: 'Vi???n T?????ng',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 14,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/a-x-l_web_posterLandscape_ecbd5d6c9035d119bb15f30c0e320f07.jpg',
            name: 'A-X-L Ch?? Ch?? Robot',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 15,
            src: './assets/trailer/Deadpool Official Trailer #2 (2016) - Ryan Reynolds Movie HD.mp4',
            path: 'https://cdna.artstation.com/p/assets/images/images/000/344/552/large/enrique-martin-funez-deadpool-mi-dibujo.jpg?1418083572',
            name: 'Deadpool 1',
            category: 'Vi???n T?????ng',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 16,
            src: './assets/trailer/Deadpool Official Trailer #2 (2016) - Ryan Reynolds Movie HD.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/deadpool_web_posterLandscape_fbcc52e4e89e3626f4575a1fa8e3c91d.jpg',
            name: 'Deadpool 2',
            category: 'Vi???n T?????ng',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 17,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/sin-city_web_posterLandscape_9f09fd1bbdebf4032af49e6baadf9585.jpg',
            name: 'Th??nh Ph??? T???i L???i',
            category: 'Vi???n T?????ng',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 18,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/next_web_posterLandscape_d0dce882be10b4b6b0a17cbae03b984b.jpg',
            name: 'Ng?????i Nh??n Th???y T????ng Lai',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 19,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/ghost-rider_web_posterLandscape_8b0b0fda30cc2c7638cedf802626d272.jpg',
            name: 'Ma T???c ?????',
            category: 'Vi???n T?????ng',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 20,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/maleficent_web_posterLandscape_c5397aadc5ac2f8086b6eaa7d407f243.jpg',
            name: 'Ti??n H???c ??m',
            category: 'Vi???n T?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        }
    ],
    actFilm: [
        {
            id: 1,
            src: './assets/trailer/TR??M, C???M V?? ??C QU??? - MAIN TRAILER - Kh???i chi???u to??n qu???c ng??y 31.05.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-gangster-the-cop-the-devil_web_posterLandscape_1bcfbf2c8b5d766ef64ea4b122fed640.jpg',
            name: 'Tr??m, C???m V?? ??c Qu???',
            category: 'H??nh ?????ng',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 2,
            src: './assets/trailer/V??? C?????P TRONG T??M B??O - OFFICIAL TRAILER - 30.03.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-hurricane-heist_web_posterLandscape_99b464e8ead5a445a5fd73a4934222bb.jpg',
            name: 'V??? C?????p Trong T??m B??o',
            category: 'H??nh ?????ng',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 3,
            src: './assets/trailer/TH???N CH???T - OFFICIAL TRAILER - 04.05.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/death-wish_web_posterLandscape_582c343edc2d494d76d80deacb26d915.jpg',
            name: 'Th???n Ch???t',
            category: 'H??nh ?????ng',
            duration: '148 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 9,
            src: './assets/trailer/Phim H??nh ?????ng -PHI V??? TI???N GI???- Trailer 02.11.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/project-gutenberg_web_posterLandscape_43ffcfb86ca0328e30bd76e18e57ad6a.jpg',
            name: 'Phi V??? Ti???n Gi???',
            category: 'H??nh ?????ng',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 5,
            src: './assets/trailer/TH???N CH???T - OFFICIAL TRAILER - 04.05.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/destruction-los-angeles_web_posterLandscape_f854e692be4276ff41ecc4a3a108cce2.jpg',
            name: 'T??n Ph?? Los Angeles',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 6,
            src: './assets/trailer/Phim h??nh ?????ng - Atomic Blonde _ ??i???p Vi??n B??o Th??- Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-hitmans-bodyguard_web_posterLandscape_8f16b3c8ff210f3a797419a0fdf9e59a.jpg',
            name: 'V??? S?? S??t Th???',
            category: 'H??nh ?????ng',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 7,
            src: './assets/trailer/G??NG T?? T??I XU???T - Main Trailer - Kh???i chi???u- 28.12.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/unstoppable-2019_web_posterLandscape_9c4a89f01956904688de85c8c4d94288.jpg',
            name: 'G??ng T?? T??i Xu???t',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 9,
            src: './assets/trailer/Deepwater Horizon- Th???m H???a Gi??n Khoan - Trailer 1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/deepwater-horizon_web_posterLandscape_c995c067cf0cc6998b763222ad2d17fa.jpg',
            name: 'Th???m H???a Gi??n Khoan',
            category: 'H??nh ?????ng',
            duration: '142 ph??t',
            age: '18+',
            premidum: '?????c bi???t',
        },
        {
            id: 8,
            src: './assets/trailer/Phim H??nh ?????ng H??i -Oceans 8-  Trailer 22.06.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/brothers-in-arms_web_posterLandscape_1f729196e943844b2a09563ccfcac120.jpg',
            name: 'B??ng C?????p Say X???n',
            category: 'H??nh ?????ng',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 10,
            src: './assets/trailer/Deepwater Horizon- Th???m H???a Gi??n Khoan - Trailer 1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-real-fast-and-furious_web_posterLandscape_ad628c4015c329a06de12bc81bf12f7d.jpg',
            name: 'Qu?? Nhanh Qu?? Nguy Hi???m',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 11,
            src: './assets/trailer/Phim H??nh ?????ng -PHI V??? TI???N GI???- Trailer 02.11.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/shock-wave_web_posterLandscape_5e74acab50ca05a8587c7ac8555bc878.jpg',
            name: 'S??ng D???',
            category: 'H??nh ?????ng',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 12,
            src: './assets/trailer/V??? C?????P TRONG T??M B??O - OFFICIAL TRAILER - 30.03.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/stranger_web_posterLandscape_cc625a40d6f94e306a9f1338b2d740fb.jpg',
            name: 'Khu R???ng B?? M???t',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        },
        {
            id: 13,
            src: './assets/trailer/Phim h??nh ?????ng hay- The Transporter -Ng?????i v???n chuy???n  Trailer #1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-transporter-refueled_web_posterLandscape_d15fc498eda289ce12f600021c84fe41.jpg',
            name: 'Ng?????i V???n Chuy???n 4',
            category: 'H??nh ?????ng',
            duration: '90 ph??t',
            age: '13+',
            premidum: 'Cao c???p',
        },
        {
            id: 14,
            src: './assets/trailer/Phim h??nh ?????ng hay- The Transporter -Ng?????i v???n chuy???n  Trailer #1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/fury_web_posterLandscape_d1f586f4b0d3326b8013474363ed341a.jpg',
            name: 'Cu???ng N???',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao c???p',
        },
        {
            id: 15,
            src: './assets/trailer/LAKE PLACID- LEGACY Official Trailer (2018) Horror Movie.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/30-minutes-or-less_web_posterLandscape_bf89b20ab91a00870294fd244ea3cd98.jpg',
            name: '30 Ph??t Ho???c ??t H??n',
            category: 'H??nh ?????ng',
            duration: '132 ph??t',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 16,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/hanna_web_posterLandscape_6ff6067c92293d6f16af6d0836a6f878.jpg',
            name: 'Hanna B?? ???n',
            category: 'H??nh ?????ng',
            duration: '95 ph??t',
            age: '16+',
            premidum: '?????c bi???t',
        },
        {
            id: 17,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-tower_web_posterLandscape_f8476ca7b079e3b807d781f3cea7d71f.jpg',
            name: 'Th??p L???a',
            category: 'H??nh ?????ng',
            duration: '85 ph??t',
            age: '19+',
            premidum: 'Cao c???p',
        },
        {
            id: 18,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/three-musketeers_web_posterLandscape_7b5ec00662827ce858e12f11e6e2d619.jpg',
            name: 'Ba Ch??ng L??nh Ng??? L??m',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '21+',
            premidum: '?????c bi???t',
        },
        {
            id: 19,
            src: './assets/trailer/(Official Trailer) M??? QU??? - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-punisher-war-zone_web_posterLandscape_def9b3d35bf054eca51ca1b22174beec.jpg',
            name: 'K??? Tr???ng Ph???t 2: V??ng Chi???n S???',
            category: 'H??nh ?????ng',
            duration: '30 T???p',
            age: '18+',
            premidum: 'Cao c???p',
        },
        {
            id: 20,
            src: './assets/trailer/(Official Trailer) CHUY???N KINH D??? L??C N???A ????M - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/elite-squad-2008_web_posterLandscape_4d4b142a7b1fd40d115867e00f5c2075.jpg',
            name: 'C???nh S??t Tinh Nhu???',
            category: 'H??nh ?????ng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao C???p',
        }
    ],

    filmContent: [
        {
            src: './assets/trailer/?????NG C???P TH?? C??NG 2 - TRAILER L???NG TI???NG - KC- 07.06.2019.mp4',
            path: './assets/img/poster-film/end.jpg',
            name: '?????ng C???p Th?? C??ng 2'
        },
        {
            src: './assets/trailer/Scream - Official Trailer (2022 Movie).mp4',
            path: './assets/img/poster-film/end1.jpg',
            name: 'Scream II'
            
        }
        ,
        {
            src: './assets/trailer/Kha??ch Sa??n Huye????n Bi?? - Official Trailer - DKKC t???i CGV-  27.08.2021.mp4',
            path: './assets/img/poster-film/end2.jpg',
            name: 'Kh??ch s???n huy???n b??'
            
        }
        ,
        {
            src: './assets/trailer/LARVA - SEASON 4 TRAILER - NEW LARVA - LARVA Official.mp4',
            path: './assets/img/poster-film/end3.jpg',
            name: 'Lavar ?????o Hoang'
            
        }
        ,
        {
            src: './assets/trailer/DORAEMON ????I B???N TH??N [STAND BY ME] (TRAILER) - ????R??MON TH??I NGUY??N.mp4',
            path: './assets/img/poster-film/end4.jpg',
            name: 'DORAEMON ????I B???N TH??N'
            
        }
        ,
        {
            src: './assets/trailer/Demon Slayer - Kimetsu no Yaiba - The Movie- Mugen Train Official Trailer.mp4',
            path: './assets/img/poster-film/end5.jpg',
            name: 'Kimetsu no Yaiba - The Movie'
            
        }
        ,
        {
            src: './assets/trailer/Phim ho???t h??nh -RICHARD THE STORK _ V???T C?? PHI??U L??U K??- trailer.mp4',
            path: './assets/img/poster-film/end6.jpg',
            name: 'V???t C?? phi??u l??u k??'
            
        }
        ,
        {
            src: './assets/trailer/Annabelle- T???o V???t Qu??? D??? - Official Trailer.mp4',
            path: './assets/img/poster-film/end7.jpg',
            name: 'Annabelle- T???o V???t Qu??? D???'
            
        }
        ,
        {
            src: './assets/trailer/Duck Duck Goose - Ng???ng V???t Phi??u L??u K?? - Trailer.mp4',
            path: './assets/img/poster-film/end8.jpg',
            name: 'Ng???ng V???t Phi??u L??u K??'
            
        }
        ,
        {
            src: './assets/trailer/Phim -C???u V??ng- Teaser Trailer - KC 08.01.2021.mp4',
            path: './assets/img/poster-film/end9.jpg',
            name: 'C???u V??ng'
            
        }
        ,
        {
            src: './assets/trailer/Ch?? Kh???ng Long T???t B???ng - Trailer Ch??nh Th???c.mp4',
            path: './assets/img/poster-film/end10.jpg',
            name: 'Ch?? Kh???ng Long T???t B???ng'
            
        }
        ,
        {
            src: './assets/trailer/A DOG NAMED PALMA ??? Russian movie trailer 2021.mp4',
            path: './assets/img/poster-film/end11.jpg',
            name: 'Ch?? Ch?? PalMa'
            
        }
        ,
        {
            src: './assets/trailer/The Call Of The Wild- Ti???ng G???i N??i Hoang D?? - Legend.mp4',
            path: './assets/img/poster-film/end15.jpg',
            name: 'Ti???ng G???i N??i Hoang D??'
            
        }
        ,
        {
            src: './assets/trailer/The Call Of The Wild- Ti???ng G???i N??i Hoang D?? - Legend.mp4',
            path: './assets/img/poster-film/end13.jpg',
            name: 'Ti???ng G???i N??i Hoang D??'
            
        }
        ,
        {
            src: './assets/trailer/Walking With Dinosaurs - D???o B?????c C??ng Kh???ng Long - Trailer E.mp4',
            path: './assets/img/poster-film/end14.jpg',
            name: 'D???o B?????c Kh???ng Long'
            
        }
        ,
        {
            src: './assets/trailer/The Lion King Official Trailer.mp4',
            path: './assets/img/poster-film/end16.jpg',
            name: 'Lion King'
            
        }
    ]

};
const zeroEnd = document.querySelector('.zero-end');
function renderContentFilmEnd() {
    var htmls = appItemsFilm.filmContent.map(function(filmContent, index) {
        return `<div class="col l-2-4 m-3 c-6 storage-content" data-index="${index}">
        <img src="${filmContent.path}" alt="">
        </div>`;
    })
    zeroEnd.innerHTML = htmls.join('');
}
renderContentFilmEnd();


const storContainer = document.querySelector('.storage-items');
const storContainer1 = document.querySelector('.storage-items-1');
const storContainer2 = document.querySelector('.storage-items-2');
const storContainer3 = document.querySelector('.storage-items-3');
const loading = document.querySelector('#loading')
loading.style.display = "flex"
setTimeout(() => {
    toastSuccess("??ang t???i m???t s??? c???u h??nh. Vui l??ng ?????i gi??y l??t.")
}, 2000)
function renderFilm () {
    loading.style.display = "flex"
    fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=phim-le&subCategoryId=khoa-hoc&country&year`)
        .then(res => res.json())
        .then((result) => {
            var htmls = result.pageProps.data.items.map(function (item, index) {
                return `<div class="storage-item" data-index="${index}" onclick=zeroClick("${item.slug}")>
                <img lazy data-src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                <div class="storage-item-overlay hidden-on-mobile-tablet-film">
                <div class="storage-item-icon">
                <i class="far fa-play-circle"></i>
                </div>
                <div class="storage-item-description">
                <h3 class="storage-item-description_header">${item.name}</h3>
                <div class="storage-item-description_body">
                <span>${item.origin_name}</span>
                <i class="fas fa-circle"></i>
                <span>${item.time}</span>
                <i class="fas fa-circle"></i>
                <span>${item.lang}</span>
                <i class="fas fa-circle"></i>
                <span>${item.year}</span>
                </div>
                </div>
                </div>
                </div>`;
            })
            storContainer.innerHTML = htmls.join('');
            const stoItems = document.querySelectorAll('.storage-item');
            const stoOverlay = document.querySelectorAll('.storage-item-overlay');

            stoItems.forEach(function(stoItems, index) {
                stoItems.onmouseover = function () {
                    stoItems.classList.add('storage-item-change')
                    stoOverlay[index].classList.add('onOverlayFilm')
                }
                stoItems.onmouseout = function () {
                    stoItems.classList.remove('storage-item-change')
                    stoOverlay[index].classList.remove('onOverlayFilm')
                }
            })
            lazyLoadImgs()
    loading.style.display = "none"

    })
}
function renderFilm1 () {
    loading.style.display = "flex"
    fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=phim-le&subCategoryId=hanh-dong&country&year`)
        .then(res => res.json())
        .then((result) => {
            var htmls = result.pageProps.data.items.map(function (item, index) {
                return `<div class="storage-item" data-index="${index}" onclick=zeroClick("${item.slug}")>
                <img lazy data-src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                <div class="storage-item-overlay hidden-on-mobile-tablet-film">
                <div class="storage-item-icon">
                <i class="far fa-play-circle"></i>
                </div>
                <div class="storage-item-description">
                <h3 class="storage-item-description_header">${item.name}</h3>
                <div class="storage-item-description_body">
                <span>${item.origin_name}</span>
                <i class="fas fa-circle"></i>
                <span>${item.time}</span>
                <i class="fas fa-circle"></i>
                <span>${item.lang}</span>
                <i class="fas fa-circle"></i>
                <span>${item.year}</span>
                </div>
                </div>
                </div>
                </div>`;
            })
            storContainer1.innerHTML = htmls.join('');
            const stoItems = document.querySelectorAll('.storage-item');
            const stoOverlay = document.querySelectorAll('.storage-item-overlay');

            stoItems.forEach(function(stoItems, index) {
                stoItems.onmouseover = function () {
                    stoItems.classList.add('storage-item-change')
                    stoOverlay[index].classList.add('onOverlayFilm')
                }
                stoItems.onmouseout = function () {
                    stoItems.classList.remove('storage-item-change')
                    stoOverlay[index].classList.remove('onOverlayFilm')
                }
        })
        lazyLoadImgs()
    loading.style.display = "none"
    })
}

// handle click on poster film
var currentFilm;
var listNumFilm = document.querySelector('.list-film-num');

function renderNumFilm(items) {
    console.log(items);
    const htmls = items.map((item, index) => {
        let indexNumb = index + 1;
        if (items.length == 1) {
            indexNumb = 'full'
        }
        if (index == 0) {
            return `
            <button class="nummb numberClickList-${index} active" onclick=numbClick("${item.slug}")>${indexNumb}</button>
        `
        }
        return `
            <button class="nummb numberClickList-${index}" onclick=numbClick("${item.slug}")>${indexNumb}</button>
        `;
    })
    listNumFilm.innerHTML = htmls.join("");
}

function numbClick(index) {
    const numb = document.querySelector(`.numberClickList-${index - 1}`);
    const allBtnNumb = document.querySelectorAll(`.nummb`);
    allBtnNumb.forEach(a => a.classList.remove('active'));
    numb.classList.add('active');
    modalPlayFilm.style.display = 'flex'
    if (index === 'full') {
        index = 0;
    }
    const hls1 = new Hls();
    if (Hls.isSupported()) {
        hls1.loadSource(dataResource.episodes[0].server_data[index].link_m3u8);
        hls1.attachMedia(video);
        hls1.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            video.play();
        });
    } else {
        video.src = dataResource.episodes[0].server_data[index].link_m3u8;
        video.play();
    }
    // videoTitle.muted = true;
}

var dataResource;
function zeroClick(slug) {
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    console.log('click');
        fetch(`https://service-betiu.onrender.com/api/v1/search-film?name=${slug}`)
        .then(res => res.json())
        .then(result => {
            dataResource = result;
            console.log(result);
            renderNumFilm(result.episodes[0].server_data);
            storageDesHearder.textContent = result.movie.name;
            modalPlayFilm.style.display = 'flex'
            const hls1 = new Hls();
    if (Hls.isSupported()) {
        hls1.loadSource(dataResource.episodes[0].server_data[0].link_m3u8);
        hls1.attachMedia(video);
        hls1.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            video.play();
        });
    } else {
        video.src = dataResource.episodes[0].server_data[0].link_m3u8;
        video.play();
    }
        })
    // if(filmNode) {
    //     currentFilm = Number(filmNode.dataset.index);
    //     video.src = appItemsFilm.filmContent[currentFilm].src;
    //     storageDesHearder.textContent = appItemsFilm.filmContent[currentFilm].name;
    //     modalPlayFilm.style.display = 'flex'
    //     audio.pause();
    //     videoTitle.pause();
    // }
}

function renderFilm2 () {
    loading.style.display = "flex"
    fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=phim-le&subCategoryId=vien-tuong&country&year`)
        .then(res => res.json())
        .then((result) => {
            var htmls = result.pageProps.data.items.map(function (item, index) {
                return `<div class="storage-item" data-index="${index}" onclick=zeroClick("${item.slug}")>
                <img lazy data-src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                <div class="storage-item-overlay hidden-on-mobile-tablet-film">
                <div class="storage-item-icon">
                <i class="far fa-play-circle"></i>
                </div>
                <div class="storage-item-description">
                <h3 class="storage-item-description_header">${item.name}</h3>
                <div class="storage-item-description_body">
                <span>${item.origin_name}</span>
                <i class="fas fa-circle"></i>
                <span>${item.time}</span>
                <i class="fas fa-circle"></i>
                <span>${item.lang}</span>
                <i class="fas fa-circle"></i>
                <span>${item.year}</span>
                </div>
                </div>
                </div>
                </div>`;
            })
            storContainer2.innerHTML = htmls.join('');
            const stoItems = document.querySelectorAll('.storage-item');
            const stoOverlay = document.querySelectorAll('.storage-item-overlay');

            stoItems.forEach(function(stoItems, index) {
                stoItems.onmouseover = function () {
                    stoItems.classList.add('storage-item-change')
                    stoOverlay[index].classList.add('onOverlayFilm')
                }
                stoItems.onmouseout = function () {
                    stoItems.classList.remove('storage-item-change')
                    stoOverlay[index].classList.remove('onOverlayFilm')
                }
        })
        lazyLoadImgs()
        loading.style.display = "none"
    })
}
function renderFilm3 () {
    var htmls = appItemsFilm.actFilm.map(function (item, index) {
        return `<div class="storage-item" data-index="${index}">
        <img src="${item.path}" alt="">
                <div class="storage-item-overlay hidden-on-mobile-tablet-film">
                <div class="storage-item-icon">
                <i class="far fa-play-circle"></i>
                </div>
                <div class="storage-item-description">
                <h3 class="storage-item-description_header">${item.name}</h3>
                <div class="storage-item-description_body">
        <span>${item.category}</span>
                <i class="fas fa-circle"></i>
        <span>${item.duration}</span>
                <i class="fas fa-circle"></i>
        <span>${item.age}</span>
                <i class="fas fa-circle"></i>
        <span>${item.premidum}</span>
                </div>
                </div>
                </div>
                </div>`;
            })
            storContainer3.innerHTML = htmls.join('');
}
renderFilm();
renderFilm1();
renderFilm2();
renderFilm3();
const stoItems = document.querySelectorAll('.storage-item');
const stoImg = document.querySelector('.storage-item > img');
const stoOverlay = document.querySelectorAll('.storage-item-overlay');
// handle items poster film
stoItems.forEach(function(stoItems, index) {
    stoItems.onmouseover = function () {
        stoItems.classList.add('storage-item-change')
        stoOverlay[index].classList.add('onOverlayFilm')
    }
    stoItems.onmouseout = function () {
        stoItems.classList.remove('storage-item-change')
        stoOverlay[index].classList.remove('onOverlayFilm')
    }
})
// handle click on poster film
var currentFilm;
const modalPlayFilm = document.querySelector('.storage-body-modal');
// storContainer.onclick = function (e) {
//     const filmNode = e.target.closest('.storage-item');
//     const storageDesHearder = document.querySelector('.storage-desciption_header');
//     if(filmNode) {
//         currentFilm = Number(filmNode.dataset.index);
//         video.src = appItemsFilm.newFilm[currentFilm].src;
//         storageDesHearder.textContent = appItemsFilm.newFilm[currentFilm].name;
//         modalPlayFilm.style.display = 'flex'
//         video.play();
//         btnModalTrailer.onclick();
//     }
// }
// storContainer1.onclick = function (e) {
//     const filmNode = e.target.closest('.storage-item');
//     const storageDesHearder = document.querySelector('.storage-desciption_header');
//     if(filmNode) {
//         currentFilm = Number(filmNode.dataset.index);
//         video.src = appItemsFilm.horrorFilm[currentFilm].src;
//         storageDesHearder.textContent = appItemsFilm.horrorFilm[currentFilm].name;
//         modalPlayFilm.style.display = 'flex'
//         video.play();
//         btnModalTrailer.onclick();
//     }
// }
// storContainer2.onclick = function (e) {
//     const filmNode = e.target.closest('.storage-item');
//     const storageDesHearder = document.querySelector('.storage-desciption_header');
//     if(filmNode) {
//         currentFilm = Number(filmNode.dataset.index);
//         video.src = appItemsFilm.blockbusterFilm[currentFilm].src;
//         storageDesHearder.textContent = appItemsFilm.blockbusterFilm[currentFilm].name;
//         modalPlayFilm.style.display = 'flex'
//         video.play();
//         btnModalTrailer.onclick();
//     }
// }
storContainer3.onclick = function (e) {
    const filmNode = e.target.closest('.storage-item');
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    if(filmNode) {
        currentFilm = Number(filmNode.dataset.index);
        video.src = appItemsFilm.actFilm[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm.actFilm[currentFilm].name;
        modalPlayFilm.style.display = 'flex'
        video.play();
        btnModalTrailer.onclick();
    }
}
zeroEnd.onclick = function (e) {
    const filmNode = e.target.closest('.storage-content');
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    if(filmNode) {
        currentFilm = Number(filmNode.dataset.index);
        video.src = appItemsFilm.filmContent[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm.filmContent[currentFilm].name;
        modalPlayFilm.style.display = 'flex'
        video.play();
        btnModalTrailer.onclick();
    }
}
// handle click close modal film
const btnloseModalFilm = document.querySelector('.storage-body-modal_overlay i');
const overlayModalFilm = document.querySelector('.storage-body-modal_overlay');
btnloseModalFilm.onclick = function () {
    video.pause();
    modalPlayFilm.style.display = 'none'
}
overlayModalFilm.onclick = function () {
    video.pause();
    modalPlayFilm.style.display = 'none'
}
window.onkeyup = function (e) {
    if(e.which == 27) {
        video.pause();
        modalPlayFilm.style.display = 'none'
    }
}

// const offset = stoImg.offsetWidth * 3.7;
// storContainer.style.transform = `translateX(-${offset}px)`
const btnNextFilm = document.querySelectorAll('.storage-items-next');
const iconNext = document.querySelectorAll('.storage-items-next i');
const btnPrevFilm = document.querySelectorAll('.storage-items-prev');
const iconPrev = document.querySelectorAll('.storage-items-prev i');
    var index = 0;
    var index1 = 0;
    var index2 = 0;
    var index3 = 0;
    var offset = stoImg.offsetWidth + 14;
    // css for node move slide film
    // newFilm
    btnPrevFilm[0].onmouseover = function() {
        iconPrev[0].style.fontSize = '3rem'
    }
    btnPrevFilm[0].onmouseout = function() {
        iconPrev[0].style.fontSize = '2rem'
    }
    btnNextFilm[0].onmouseover = function() {
        iconNext[0].style.fontSize = '3rem'
    }
    btnNextFilm[0].onmouseout = function() {
        iconNext[0].style.fontSize = '2rem'
    }
    // horrorFilm
    btnPrevFilm[1].onmouseover = function() {
        iconPrev[1].style.fontSize = '3rem'
    }
    btnPrevFilm[1].onmouseout = function() {
        iconPrev[1].style.fontSize = '2rem'
    }
    btnNextFilm[1].onmouseover = function() {
        iconNext[1].style.fontSize = '3rem'
    }
    btnNextFilm[1].onmouseout = function() {
        iconNext[1].style.fontSize = '2rem'
    }
    // blockBusketFilm
    btnPrevFilm[2].onmouseover = function() {
        iconPrev[2].style.fontSize = '3rem'
    }
    btnPrevFilm[2].onmouseout = function() {
        iconPrev[2].style.fontSize = '2rem'
    }
    btnNextFilm[2].onmouseover = function() {
        iconNext[2].style.fontSize = '3rem'
    }
    btnNextFilm[2].onmouseout = function() {
        iconNext[2].style.fontSize = '2rem'
    }
    // actFilm
    btnPrevFilm[3].onmouseover = function() {
        iconPrev[3].style.fontSize = '3rem'
    }
    btnPrevFilm[3].onmouseout = function() {
        iconPrev[3].style.fontSize = '2rem'
    }
    btnNextFilm[3].onmouseover = function() {
        iconNext[3].style.fontSize = '3rem'
    }
    btnNextFilm[3].onmouseout = function() {
        iconNext[3].style.fontSize = '2rem'
    }
    // newFilm  click prev-next
    btnNextFilm[0].onclick = function () {
        if(index < (3.94)) {
            index++;
            if(index == 4) {
                index = 3.94
                btnNextFilm[0].style.display = 'none';
            }
            storContainer.style.transform = `translateX(-${offset * 4 * index}px)`;
            btnPrevFilm[0].style.display = 'block';
    }}

    btnPrevFilm[0].onclick = function () {
        if(index > (0)) {
            if(index === 3.94) {
                index = 4
            }
            index--;
            if(index == 0) {
                btnPrevFilm[0].style.display = 'none';
            }
            storContainer.style.transform = `translateX(-${offset * 4 * index}px)`;
            btnNextFilm[0].style.display = 'block';
    }}
    // horrorFilm click prev-next
    btnNextFilm[1].onclick = function () {
        if(index1 < (3.94)) {
            index1++;
            if(index1 == 4) {
                index1 = 3.94
                btnNextFilm[1].style.display = 'none';
            }
            storContainer1.style.transform = `translateX(-${offset * 4 * index1}px)`;
            btnPrevFilm[1].style.display = 'block';
    }}

    btnPrevFilm[1].onclick = function () {
        if(index1 > (0)) {
            if(index1 === 3.94) {
                index1 = 4
            }
            index1--;
            if(index1 == 0) {
                btnPrevFilm[1].style.display = 'none';
            }
            storContainer1.style.transform = `translateX(-${offset * 4 * index1}px)`;
            btnNextFilm[1].style.display = 'block';
    }}
    // blockbusterFilm click prev-next
    btnNextFilm[2].onclick = function () {
        if(index2 < (3.94)) {
            index2++;
            if(index2 == 4) {
                index2 = 3.94
                btnNextFilm[2].style.display = 'none';
            }
            storContainer2.style.transform = `translateX(-${offset * 4 * index2}px)`;
            btnPrevFilm[2].style.display = 'block';
    }}

    btnPrevFilm[2].onclick = function () {
        if(index2 > (0)) {
            if(index2 === 3.94) {
                index2 = 4
            }
            index2--;
            if(index2 == 0) {
                btnPrevFilm[2].style.display = 'none';
            }
            storContainer2.style.transform = `translateX(-${offset * 4 * index2}px)`;
            btnNextFilm[2].style.display = 'block';
    }}
    // actFilm click prev-next
    btnNextFilm[3].onclick = function () {
        if(index3 < (3.94)) {
            index3++;
            if(index3 == 4) {
                index3 = 3.94
                btnNextFilm[3].style.display = 'none';
            }
            storContainer3.style.transform = `translateX(-${offset * 4 * index3}px)`;
            btnPrevFilm[3].style.display = 'block';
    }}

    btnPrevFilm[3].onclick = function () {
        if(index3 > (0)) {
            if(index3 === 3.94) {
                index3 = 4
            }
            index3--;
            if(index3 == 0) {
                btnPrevFilm[3].style.display = 'none';
            }
            storContainer3.style.transform = `translateX(-${offset * 4 * index3}px)`;
            btnNextFilm[3].style.display = 'block';
    }}

// handle click btn film modal
// const btnModalTrailer = document.querySelector('.btn-trailer')
// const btnModalFilm = document.querySelector('.btn-film-play')
// const notiFilm = document.querySelector('.notiFilm')
// btnModalTrailer.onclick = () => {
//         if(btnModalFilm.closest('.btn-film-play.active-play')) {
//         console.log(123)
//         video.load();
//         video.play();
//         video.style.display = 'block';
//         notiFilm.style.display = 'none';
//         btnModalTrailer.classList.add('active-play');
//         btnModalFilm.classList.remove('active-play');
//     }
// }
// btnModalFilm.onclick = () => {
//         if(btnModalTrailer.closest('.btn-trailer.active-play')) {
//         video.pause();
//         video.style.display = 'none';
//         notiFilm.style.display = 'flex';
//         btnModalTrailer.classList.remove('active-play');
//         btnModalFilm.classList.add('active-play');
//     }
// }

function toastAram () {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast', 'toastAram')
        toast.innerHTML = `
            <i class="ti-settings aram"></i>
            <p class="toast-text">Ch???c n??ng ??ang ???????c c???p nh???t</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },4000)
    }
}

const filmSelect = document.querySelectorAll('.film-select');
const updateBefore = document.querySelectorAll('.js-update-before');
filmSelect.forEach((filmSelect)=>{
    filmSelect.onclick = function(){
        toastAram();
    }
})
updateBefore.forEach((updateBefore)=>{
    updateBefore.onclick = function(){
        toastAram();
    }
})

function lazyLoadImgs () {
// duy???t t???t c??? t???m ???nh c???n lazy-load
const lazyImages = document.querySelectorAll('[lazy]');

// ch??? c??c t???m ???nh n??y xu???t hi???n tr??n m??n h??nh
const lazyImageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // t???m ???nh n??y ???? xu???t hi???n tr??n m??n h??nh
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      const src = lazyImage.dataset.src;

      lazyImage.tagName.toLowerCase() === 'img'
      // <img>: copy data-src sang src
        ? lazyImage.src = src

      // <div>: copy data-src sang background-image
      : lazyImage.style.backgroundImage = "url(\'" + src + "\')";

      // copy xong r???i th?? b??? attribute lazy ??i
      lazyImage.removeAttribute('lazy');

      // job done, kh??ng c???n observe n?? n???a
      observer.unobserve(lazyImage);
    }
  });
});

// Observe t???ng t???m ???nh v?? ch??? n?? xu???t hi???n tr??n m??n h??nh
lazyImages.forEach((lazyImage) => {
  lazyImageObserver.observe(lazyImage);
});
}

function checkOverMouse() {
    const stoItems = document.querySelectorAll('.storage-item');
    const stoOverlay = document.querySelectorAll('.storage-item-overlay');

    stoItems.forEach(function (stoItems, index) {
        stoItems.onmouseover = function () {
            stoItems.classList.add('storage-item-change')
            stoOverlay[index].classList.add('onOverlayFilm')
        }
        stoItems.onmouseout = function () {
            stoItems.classList.remove('storage-item-change')
            stoOverlay[index].classList.remove('onOverlayFilm')
        }
    })
}

function toastSuccess(e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast', 'toastSuccess')
        toast.innerHTML = `
            <i class="ti-check"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 8000)
    }
}

const player = new Plyr(video);
