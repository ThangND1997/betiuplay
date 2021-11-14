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
        path: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/qDJqdC2z-Qk?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        subPath: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/O6E_45lsxBE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        path: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/pBSv1ZJWSAY?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        subPath: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/l8vTMxuvz6Y?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    // {
    //     path: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/3mR_pRuEVQo?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //     subPath: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/jluSu8Rw6YE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    // },
    // {
    //     path: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/zX9CB1m99Gc?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //     subPath: '<iframe width="100%" height="100%" src="" data-src="https://www.youtube.com/embed/jluSu8Rw6YE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    // },
];

const btnFilm = document.querySelector('.js-btn-film-play')
const btnTrailer = document.querySelector('.js-btn-trailer-play')
const filmApp = document.querySelector('.film-app')
const filmModal = document.querySelector('.modal-film')
const trailer = document.querySelector('.trailer')
const filmPlay = document.querySelector('.film')
const video = document.querySelector('video')
btnFilm.onclick = function () {
    // video.src = source;
    // video.play();
    // filmApp.classList.add('on-film')
    // video.style.display = 'block';
    // trailer.style.display = 'none';
    filmPlay.innerHTML = film[indexSlideCurrent].path;
    let iframe = document.querySelector('iframe')
    iframe.setAttribute('src', iframe.getAttribute('data-src'))
    filmApp.classList.add('on-film')
    trailer.style.display = 'none';
    filmPlay.style.display = 'block';
}
filmModal.onclick = function () {
    filmApp.classList.remove('on-film')
    // video.pause();
    trailer.innerHTML = '';
    filmPlay.innerHTML = '';
    filmPlay.style.display = 'none';
    trailer.style.display = 'none';
}
btnTrailer.onclick = function () {
    trailer.innerHTML = film[indexSlideCurrent].subPath;
    let iframe = document.querySelector('iframe')
    iframe.setAttribute('src', iframe.getAttribute('data-src'))
    filmApp.classList.add('on-film')
    trailer.style.display = 'block';
    filmPlay.style.display = 'none';
}




const appItemsFilm = [
    {
        id: 1,
        src: './assets/trailer/(Official Trailer) NGÔI NHÀ MA ÁM.mp4',
        path: 'https://assets.glxplay.io/images/w400/title/dont-look-back-2021_web_posterLandscape_8e9f994b33e6f58f9ba26f6f11ceb941.jpg',
        name: 'Những kẻ vô cảm',
        category: 'Kinh dị',
        duration: '85 phút',
        age: '19+',
        premidum: 'Cao cấp',
    },
    {
        id: 2,
        src: './assets/trailer/Thor- Ragnarok Teaser Trailer [HD].mp4',
        path: './assets/img/poster-film/hala-thor1.jpg',
        name: 'Thor Tận Thế Ragnarok',
        category: 'Viễn tưởng',
        duration: '142 phút',
        age: '18+',
        premidum: 'Đặc biệt',
    },
    {
        id: 3,
        path: 'https://assets.glxplay.io/images/w400/title/death-by-zero_web_posterLandscape_aa9462fbddee226ccf0f060bb8371c01.jpg',
        name: 'Sát thủ',
        category: 'Hành động',
        duration: '30 Tập',
        age: '18+',
        premidum: 'Cao cấp',
    },
    {
        id: 4,
        path: 'https://assets.glxplay.io/images/w400/title/life-of-pi_web_posterLandscape_4454549f9219a2457f9514c61c26d785.jpg',
        name: 'Cuộc Đời Của Pi',
        category: 'Tâm lý',
        duration: '120 phut',
        age: '7+',
        premidum: 'Cao Cấp',
    },
    {
        id: 5,
        path: 'https://assets.glxplay.io/images/w400/title/childs-play_web_posterLandscape_d13c22059d5c04dfa4e19eb2ae0ca0df.jpg',
        name: 'Búp Bê Sát Nhân',
        category: 'Kinh dị',
        duration: '90 phút',
        age: '13+',
        premidum: 'Cao cấp',
    },
    {
        id: 6,
        path: 'https://assets.glxplay.io/images/w400/title/zootopia_web_posterLandscape_3faccca8bbd905cc91f657f11bf86ae7.jpg',
        name: 'Phi Vụ Động Trời',
        category: 'Gia Đình',
        duration: '120 phut',
        age: '7+',
        premidum: 'Cao cấp',
    },
    {
        id: 7,
        path: 'https://assets.glxplay.io/images/w400/title/john-wick-chapter-3-parabellum_web_posterLandscape_8720a29a126ba538f88b8869101d516a.jpg',
        name: 'Sát Thủ John Wick 3',
        category: 'Hành Động',
        duration: '132 phút',
        age: '18+',
        premidum: 'Cao cấp',
    },
    {
        id: 8,
        path: 'https://assets.glxplay.io/images/w400/title/doraemon-stand-by-me_web_posterLandscape_370b8686dbb61311f09a718f43c6e9d2.jpg',
        name: 'Đô Rê Mon: Đôi Bạn Thân',
        category: 'Gia Đình',
        duration: '95 phút',
        age: 'Mọi lứa tuổi',
        premidum: 'Đặc biệt',
    },
    {
        id: 1,
        path: 'https://assets.glxplay.io/images/w400/title/dont-look-back-2021_web_posterLandscape_8e9f994b33e6f58f9ba26f6f11ceb941.jpg',
        name: 'Những kẻ vô cảm',
        category: 'Kinh dị',
        duration: '85 phút',
        age: '19+',
        premidum: 'Cao cấp',
    },
    {
        id: 2,
        path: 'https://assets.glxplay.io/images/w400/title/the-amityville-horror_web_posterLandscape_33b44c16ed48b15697779d6400c05379.jpg',
        name: 'Ngôi Nhà Rùng Rợn',
        category: 'Kinh dị',
        duration: '120 phut',
        age: '21+',
        premidum: 'Đặc biệt',
    },
    {
        id: 3,
        path: 'https://assets.glxplay.io/images/w400/title/death-by-zero_web_posterLandscape_aa9462fbddee226ccf0f060bb8371c01.jpg',
        name: 'Sát thủ',
        category: 'Hành động',
        duration: '30 Tập',
        age: '18+',
        premidum: 'Cao cấp',
    },
    {
        id: 4,
        path: 'https://assets.glxplay.io/images/w400/title/life-of-pi_web_posterLandscape_4454549f9219a2457f9514c61c26d785.jpg',
        name: 'Cuộc Đời Của Pi',
        category: 'Tâm lý',
        duration: '120 phut',
        age: '7+',
        premidum: 'Cao Cấp',
    },
    {
        id: 5,
        path: 'https://assets.glxplay.io/images/w400/title/childs-play_web_posterLandscape_d13c22059d5c04dfa4e19eb2ae0ca0df.jpg',
        name: 'Búp Bê Sát Nhân',
        category: 'Kinh dị',
        duration: '90 phút',
        age: '13+',
        premidum: 'Cao cấp',
    },
    {
        id: 6,
        path: 'https://assets.glxplay.io/images/w400/title/zootopia_web_posterLandscape_3faccca8bbd905cc91f657f11bf86ae7.jpg',
        name: 'Phi Vụ Động Trời',
        category: 'Gia Đình',
        duration: '120 phut',
        age: '7+',
        premidum: 'Cao cấp',
    },
    {
        id: 7,
        path: 'https://assets.glxplay.io/images/w400/title/john-wick-chapter-3-parabellum_web_posterLandscape_8720a29a126ba538f88b8869101d516a.jpg',
        name: 'Sát Thủ John Wick 3',
        category: 'Hành Động',
        duration: '132 phút',
        age: '18+',
        premidum: 'Cao cấp',
    },
    {
        id: 8,
        path: 'https://assets.glxplay.io/images/w400/title/doraemon-stand-by-me_web_posterLandscape_370b8686dbb61311f09a718f43c6e9d2.jpg',
        name: 'Đô Rê Mon: Đôi Bạn Thân',
        category: 'Gia Đình',
        duration: '95 phút',
        age: 'Mọi lứa tuổi',
        premidum: 'Đặc biệt',
    },
    {
        id: 5,
        path: 'https://assets.glxplay.io/images/w400/title/childs-play_web_posterLandscape_d13c22059d5c04dfa4e19eb2ae0ca0df.jpg',
        name: 'Búp Bê Sát Nhân',
        category: 'Kinh dị',
        duration: '90 phút',
        age: '13+',
        premidum: 'Cao cấp',
    },
    {
        id: 6,
        path: 'https://assets.glxplay.io/images/w400/title/zootopia_web_posterLandscape_3faccca8bbd905cc91f657f11bf86ae7.jpg',
        name: 'Phi Vụ Động Trời',
        category: 'Gia Đình',
        duration: '120 phut',
        age: '7+',
        premidum: 'Cao cấp',
    },
    {
        id: 7,
        path: 'https://assets.glxplay.io/images/w400/title/john-wick-chapter-3-parabellum_web_posterLandscape_8720a29a126ba538f88b8869101d516a.jpg',
        name: 'Sát Thủ John Wick 3',
        category: 'Hành Động',
        duration: '132 phút',
        age: '18+',
        premidum: 'Cao cấp',
    },
    {
        id: 8,
        path: 'https://assets.glxplay.io/images/w400/title/doraemon-stand-by-me_web_posterLandscape_370b8686dbb61311f09a718f43c6e9d2.jpg',
        name: 'Đô Rê Mon: Đôi Bạn Thân',
        category: 'Gia Đình',
        duration: '95 phút',
        age: 'Mọi lứa tuổi',
        premidum: 'Đặc biệt',
    },
];

const storContainer = document.querySelector('.storage-items');
function renderFilm () {
    var htmls = appItemsFilm.map(function (item, index) {
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
renderFilm();
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
        video.src = appItemsFilm[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm[currentFilm].name;
        modalPlayFilm.style.display = 'flex'
        video.play();
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
const btnNextFilm = document.querySelector('.storage-items-next');
const iconNext = document.querySelector('.storage-items-next i');
const btnPrevFilm = document.querySelector('.storage-items-prev');
const iconPrev = document.querySelector('.storage-items-prev i');
const stoContainer = document.querySelector('.storage-items_container');
    var index = 0;
    var offset = stoImg.offsetWidth + 14;
    btnPrevFilm.onmouseover = function() {
        iconPrev.style.fontSize = '3rem'
    }
    btnPrevFilm.onmouseout = function() {
        iconPrev.style.fontSize = '2rem'
    }
    btnNextFilm.onmouseover = function() {
        iconNext.style.fontSize = '3rem'
    }
    btnNextFilm.onmouseout = function() {
        iconNext.style.fontSize = '2rem'
    }
    btnNextFilm.onclick = function () {
        if(index < (3.94)) {
            index++;
            if(index == 4) {
                index = 3.94
                btnNextFilm.style.display = 'none';
            }
            storContainer.style.transform = `translateX(-${offset * 4 * index}px)`;
            btnPrevFilm.style.display = 'block';
    }}

    btnPrevFilm.onclick = function () {
        if(index > (0)) {
            if(index === 3.94) {
                index = 4
            }
            index--;
            if(index == 0) {
                btnPrevFilm.style.display = 'none';
            }
            storContainer.style.transform = `translateX(-${offset * 4 * index}px)`;
            btnNextFilm.style.display = 'block';
    }}