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
const film = [
    {
        img: "url('./assets/img/slide/slide4.jpg')",
        path: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/oA-BhGNK7qw?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        subPath: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jluSu8Rw6YE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        img: "url('./assets/img/slide-film/film2.jpg')",
        path: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/pBSv1ZJWSAY?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        subPath: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l8vTMxuvz6Y?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        img: "url('./assets/img/slide-film/film3.jpg')",
        path: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3mR_pRuEVQo?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        subPath: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jluSu8Rw6YE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        img: "url('./assets/img/slide-film/film4.jpg')",
        path: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zX9CB1m99Gc?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        subPath: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jluSu8Rw6YE?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
];
// handle when onclick dot slide
slideNodes[0].onclick = () => {
    //Reset interval with indexSlideCurrent
    indexSlideCurrent = 0;
    // Add and remove class node, slide, content    
    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[0].classList.add('active')
    slide.style.backgroundImage = film[indexSlideCurrent].img
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
    slide.style.backgroundImage = film[indexSlideCurrent].img
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
    slide.style.backgroundImage = film[indexSlideCurrent].img
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
    slide.style.backgroundImage = film[indexSlideCurrent].img
    slideNodes[3].classList.add('active')
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


const btnFilm = document.querySelector('.js-btn-film-play')
const btnTrailer = document.querySelector('.js-btn-trailer-play')
const filmApp = document.querySelector('.film-app')
const filmModal = document.querySelector('.modal-film')
const trailer = document.querySelector('.trailer')
const filmPlay = document.querySelector('.film')
const video = document.querySelector('video')
btnFilm.onclick = function () {
    filmPlay.innerHTML = film[indexSlideCurrent].path;
    // video.src = source;
    // video.play();
    // filmApp.classList.add('on-film')
    // video.style.display = 'block';
    // trailer.style.display = 'none';
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
    filmApp.classList.add('on-film')
    trailer.style.display = 'block';
    filmPlay.style.display = 'none';
}
