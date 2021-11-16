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




const appItemsFilm = {
    newFilm: [
        {
            id: 1,
            src: './assets/trailer/(Official Trailer) NGÔI NHÀ MA ÁM.mp4',
            path: 'https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Ghost-House-movie.jpg?ssl=1',
            name: 'Ngôi Nhà Ma Ám',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 2,
            src: './assets/trailer//VENOM 2 Official Trailer (2021).mp4',
            path: 'https://photo-baomoi.zadn.vn/w700_r1/2021_05_11_329_38800919/2440c180dfc2369c6fd3.jpg',
            name: 'Venom 2 Đối Mặt Tử Thù',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 3,
            src: './assets/trailer/Thor- The Dark World Official Trailer HD.mp4',
            path: 'https://wallpaperaccess.com/full/645154.jpg',
            name: 'Thor Thế Giới Bóng Tối',
            category: 'Viễn tưởng',
            duration: '148 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 9,
            src: './assets/trailer/NHỮNG KẺ VÔ CẢM - TRAILER CHÍNH THỨC - KHỞI CHIẾU 06.11.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/dont-look-back-2021_web_posterLandscape_8e9f994b33e6f58f9ba26f6f11ceb941.jpg',
            name: 'Những kẻ vô cảm',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 5,
            src: './assets/trailer/BÚP BÊ SÁT NHÂN (Child’s Play 2019) - Official Trailer - KC- 26.07.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/childs-play_web_posterLandscape_d13c22059d5c04dfa4e19eb2ae0ca0df.jpg',
            name: 'Búp Bê Sát Nhân',
            category: 'Kinh dị',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 6,
            src: './assets/trailer/ZOOTOPIA- PHI VỤ ĐỘNG TRỜI - Trailer D -Chú Lười-.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/zootopia_web_posterLandscape_3faccca8bbd905cc91f657f11bf86ae7.jpg',
            name: 'Phi Vụ Động Trời',
            category: 'Gia Đình',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 7,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer – Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/john-wick-chapter-3-parabellum_web_posterLandscape_8720a29a126ba538f88b8869101d516a.jpg',
            name: 'Sát Thủ John Wick 3',
            category: 'Hành Động',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 9,
            src: './assets/trailer/Thor- Ragnarok Teaser Trailer [HD].mp4',
            path: './assets/img/poster-film/hala-thor1.jpg',
            name: 'Thor Tận Thế Ragnarok',
            category: 'Viễn tưởng',
            duration: '142 phút',
            age: '18+',
            premidum: 'Đặc biệt',
        },
        {
            id: 8,
            src: './assets/trailer/DORAEMON ĐÔI BẠN THÂN [STAND BY ME] (TRAILER) - ĐÔRÊMON THÁI NGUYÊN.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/doraemon-stand-by-me_web_posterLandscape_370b8686dbb61311f09a718f43c6e9d2.jpg',
            name: 'Đô Rê Mon: Đôi Bạn Thân',
            category: 'Gia Đình',
            duration: '95 phút',
            age: 'Mọi lứa tuổi',
            premidum: 'Đặc biệt',
        },
        {
            id: 10,
            src: './assets/trailer/TRỤC QUỶ TRAILER _ DKKC_ 04.12.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-amityville-horror_web_posterLandscape_33b44c16ed48b15697779d6400c05379.jpg',
            name: 'Ngôi Nhà Rùng Rợn',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 11,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer – Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/death-by-zero_web_posterLandscape_aa9462fbddee226ccf0f060bb8371c01.jpg',
            name: 'Sát thủ',
            category: 'Hành động',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 12,
            src: './assets/trailer/Life Of Pi - Trailer - MegaStar Cineplex.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/life-of-pi_web_posterLandscape_4454549f9219a2457f9514c61c26d785.jpg',
            name: 'Cuộc Đời Của Pi',
            category: 'Tâm lý',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 13,
            src: './assets/trailer/BÚP BÊ SÁT NHÂN (Child’s Play 2019) - Official Trailer - KC- 26.07.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/childs-play_web_posterLandscape_d13c22059d5c04dfa4e19eb2ae0ca0df.jpg',
            name: 'Búp Bê Sát Nhân',
            category: 'Kinh dị',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 14,
            src: './assets/trailer/ZOOTOPIA- PHI VỤ ĐỘNG TRỜI - Trailer D -Chú Lười-.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/zootopia_web_posterLandscape_3faccca8bbd905cc91f657f11bf86ae7.jpg',
            name: 'Phi Vụ Động Trời',
            category: 'Gia Đình',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 15,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer – Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/john-wick-chapter-3-parabellum_web_posterLandscape_8720a29a126ba538f88b8869101d516a.jpg',
            name: 'Sát Thủ John Wick 3',
            category: 'Hành Động',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 16,
            src: './assets/trailer/DORAEMON ĐÔI BẠN THÂN [STAND BY ME] (TRAILER) - ĐÔRÊMON THÁI NGUYÊN.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/doraemon-stand-by-me_web_posterLandscape_370b8686dbb61311f09a718f43c6e9d2.jpg',
            name: 'Đô Rê Mon: Đôi Bạn Thân',
            category: 'Gia Đình',
            duration: '95 phút',
            age: 'Mọi lứa tuổi',
            premidum: 'Đặc biệt',
        },
        {
            id: 17,
            src: './assets/trailer/NHỮNG KẺ VÔ CẢM - TRAILER CHÍNH THỨC - KHỞI CHIẾU 06.11.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/dont-look-back-2021_web_posterLandscape_8e9f994b33e6f58f9ba26f6f11ceb941.jpg',
            name: 'Những kẻ vô cảm',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 18,
            src: './assets/trailer/TRỤC QUỶ TRAILER _ DKKC_ 04.12.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-amityville-horror_web_posterLandscape_33b44c16ed48b15697779d6400c05379.jpg',
            name: 'Ngôi Nhà Rùng Rợn',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 19,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer – Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/death-by-zero_web_posterLandscape_aa9462fbddee226ccf0f060bb8371c01.jpg',
            name: 'Sát thủ',
            category: 'Hành động',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 20,
            src: './assets/trailer/Life Of Pi - Trailer - MegaStar Cineplex.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/life-of-pi_web_posterLandscape_4454549f9219a2457f9514c61c26d785.jpg',
            name: 'Cuộc Đời Của Pi',
            category: 'Tâm lý',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        }
    ],

    horrorFilm: [
        {
            id: 1,
            src: './assets/trailer/IT - Official Teaser Trailer.mp4',
            path: './assets/img/poster-film/It.jpg',
            name: 'Gã Hề Ma Quái',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 2,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-wretched_web_posterLandscape_c4baa321437aa653d1a685be2db816fd.jpg',
            name: 'Mẹ Quỷ',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 3,
            src: './assets/trailer/MUSE- NÀNG THƠ CỦA QUỶ- KHỞI CHIẾU MÙNG 8 TẾT (23.02.2018) OFFICIAL TRAILER.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/muse_web_posterLandscape_1e0fb439dc1b1a74e9818482e835f5e7.jpg',
            name: 'Nàng Thơ Của Quỷ',
            category: 'Kinh dị',
            duration: '148 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 9,
            src: './assets/trailer/Annabelle- Tạo Vật Quỷ Dữ - Official Trailer.mp4',
            path: './assets/img/poster-film/Anabel.jpg',
            name: 'Annabelle Tạo Vật Quỷ Dữ',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 5,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/howl_web_posterLandscape_b1d8ef39542f9c28c0dd64db7de04f8e.jpg',
            name: 'Ma Sói 2016',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 6,
            src: './assets/trailer/NGÀY ĐẪM MÁU- XÁC SỐNG TRỖI DẬY - Trailer chính thức.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/day-of-the-dead-bloodline_web_posterLandscape_1a61b8fc8ae83a7e24aa20a58346f168.jpg',
            name: 'Ngày Đẫm Máu: Xác Sống',
            category: 'Kinh dị',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 7,
            src: './assets/trailer/Phim kinh dị -LUẬT QUỶ- Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/seeda-the-spirit-of-ramayana_web_posterLandscape_134d4ac0e895f3bcddf9b94efff8b745.jpg',
            name: 'Seeda: Oan Hồn Nhà Hát',
            category: 'Kinh dị',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 9,
            src: './assets/trailer/Phim kinh dị -LUẬT QUỶ- Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-lodgers_web_posterLandscape_ab3d118aab273fd4b45d652aac0b3c38.jpg',
            name: 'Luật Quỷ',
            category: 'Kinh dị',
            duration: '142 phút',
            age: '18+',
            premidum: 'Đặc biệt',
        },
        {
            id: 8,
            src: './assets/trailer/(Official Trailer)  SONG SINH (ROPES) - KC- 08.01.2021.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/ropes_web_posterLandscape_fdbd938d0a0ddd2193c31cc60d1d3f5c.jpg',
            name: 'Song Sinh',
            category: 'Kinh dị',
            duration: '95 phút',
            age: 'Mọi lứa tuổi',
            premidum: 'Đặc biệt',
        },
        {
            id: 10,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- THÍ NGHIỆM XÁC SỐNG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-cabin-in-the-woods_web_posterLandscape_6b65750fdff89359291d0f0266d0b946.jpg',
            name: 'Căn Nhà Gỗ Trong Rừng',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 11,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/bram-stokers-dracula_web_posterLandscape_382cd1cbbd719486f741299e3df7026f.jpg',
            name: 'Bá Tước Ma Cà Rồng',
            category: 'Kinh dị',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 12,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- THÍ NGHIỆM XÁC SỐNG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-crazies_web_posterLandscape_6cb01fb1b00330ea24b9caa307f61af0.jpg',
            name: 'Căn Bệnh Khát Máu',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 13,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/scary-stories-to-tell-in-the-dark_web_posterLandscape_c81a500c53be119d0af4c195e18d5f59.jpg',
            name: 'Chuyện Kinh Dị Lúc Nửa Đêm',
            category: 'Kinh dị',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 14,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-possession_web_posterLandscape_ce7eb55ba37b0604795a5fe1b766db33.jpg',
            name: 'Đánh Cắp Linh Hồn',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 15,
            src: './assets/trailer/LAKE PLACID- LEGACY Official Trailer (2018) Horror Movie.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/lake-placid-legacy_web_posterLandscape_e4163aaf5b8f7eb9b46e0510953b0b3c.jpg',
            name: 'Đầm Lầy Chết',
            category: 'Kinh dị',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 16,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/mary_web_posterLandscape_861f8a0ea4e6a34ef3153a1e7d28a97a.jpg',
            name: 'Lời Nguyền Trên Biển',
            category: 'Kinh dị',
            duration: '95 phút',
            age: 'Mọi lứa tuổi',
            premidum: 'Đặc biệt',
        },
        {
            id: 17,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/gretel-and-hansel_web_posterLandscape_6da248b1af617cd859bc1d7a75a3d3b7.jpg',
            name: 'Gretel Và Hansel: Truyện Cổ Kỳ Dị',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 18,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-promise_web_posterLandscape_157ff307ea585879809f1904cd61daa5.jpg',
            name: 'Giao Ước Chết',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 19,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/friend-request_web_posterLandscape_13ce91e833d8a9ddd85045db6f916146.jpg',
            name: 'Kết Bạn Với Ma',
            category: 'Kinh dị',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 20,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/prince-of-darkness_web_posterLandscape_840598fb6fcdd811680120d64a9471b4.jpg',
            name: 'Hoàng Tử Bóng Đêm',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        }
    ],
};

const storContainer = document.querySelector('.storage-items');
const storContainer1 = document.querySelector('.storage-items-1');
function renderFilm () {
    var htmls = appItemsFilm.newFilm.map(function (item, index) {
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
    storContainer.innerHTML = htmls.join('');
}
function renderFilm1 () {
    var htmls = appItemsFilm.horrorFilm.map(function (item, index) {
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
    storContainer1.innerHTML = htmls.join('');
}
renderFilm();
renderFilm1();
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
storContainer.onclick = function (e) {
    const filmNode = e.target.closest('.storage-item');
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    if(filmNode) {
        currentFilm = Number(filmNode.dataset.index);
        video.src = appItemsFilm.newFilm[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm.newFilm[currentFilm].name;
        modalPlayFilm.style.display = 'flex'
        video.play();
        btnModalTrailer.onclick();
    }
}
storContainer1.onclick = function (e) {
    const filmNode = e.target.closest('.storage-item');
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    if(filmNode) {
        currentFilm = Number(filmNode.dataset.index);
        video.src = appItemsFilm.horrorFilm[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm.horrorFilm[currentFilm].name;
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
    // newFilm  click prev next
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
    // horrorFilm click prev next
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

// handle click btn film modal
const btnModalTrailer = document.querySelector('.btn-trailer')
const btnModalFilm = document.querySelector('.btn-film-play')
const notiFilm = document.querySelector('.notiFilm')
btnModalTrailer.onclick = () => {
        if(btnModalFilm.closest('.btn-film-play.active-play')) {
        console.log(123)
        video.load();
        video.play();
        video.style.display = 'block';
        notiFilm.style.display = 'none';
        btnModalTrailer.classList.add('active-play');
        btnModalFilm.classList.remove('active-play');
    }
}
btnModalFilm.onclick = () => {
        if(btnModalTrailer.closest('.btn-trailer.active-play')) {
        video.pause();
        video.style.display = 'none';
        notiFilm.style.display = 'flex';
        btnModalTrailer.classList.remove('active-play');
        btnModalFilm.classList.add('active-play');
    }
}

