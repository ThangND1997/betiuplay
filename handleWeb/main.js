
//  Part: Slides Website 
// Handle Slides
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slideNodes = $$('.slides-dot_item')
const slide = $('.slide')
const slideContent = $('.slide-content')
const slideContentApp = $('.slide-content-app')
const slidesPrev = $('.slides-prev');
const slidesNext = $('.slides-next');

// handle when onclick dot slide
slideNodes[0].onclick = () => {
    //Reset interval with indexSlideCurrent
    clearInterval(loopSlider)
    indexSlideCurrent = 0;
    loopSlider = setInterval(loopSlide, 6000)
    // Add and remove class node, slide, content
    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[0].classList.add('active')
    slide.classList.add('active-1')
    slide.classList.remove('active-2')
    slide.classList.remove('active-3')
    slide.classList.remove('active-4')
    slideContent.classList.add('active-5')
    slideContentApp.style.animation =  'fadeSlideSub ease 1.8s'
    slideContent.style.animation =  'fadeSlide ease 0.8s'
    setTimeout(function() {
        slideContent.style.animation = 'none'
        slideContentApp.style.animation = 'none'
    }, 2000)
    slideContent.classList.remove('active-6')
    slideContent.classList.remove('active-7')
    slideContent.classList.remove('active-8')
}
slideNodes[1].onclick = () => {
    clearInterval(loopSlider)
    indexSlideCurrent = 1;
    loopSlider = setInterval(loopSlide, 6000)

    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[1].classList.add('active')
    slide.classList.add('active-2')
    slide.classList.remove('active-1')
    slide.classList.remove('active-3')
    slide.classList.remove('active-4')

    slideContent.classList.add('active-6')
    slideContentApp.style.animation =  'fadeSlideSub ease 1.8s'
    slideContent.style.animation =  'fadeSlide ease 0.8s'
    setTimeout(function() {
        slideContent.style.animation = 'none'
        slideContentApp.style.animation = 'none'
    }, 2000)
    slideContent.classList.remove('active-5')
    slideContent.classList.remove('active-7')
    slideContent.classList.remove('active-8')
}
slideNodes[2].onclick = () => {
    clearInterval(loopSlider)
    indexSlideCurrent = 2;
    loopSlider = setInterval(loopSlide, 6000)

    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[2].classList.add('active')
    slide.classList.add('active-3')
    slide.classList.remove('active-2')
    slide.classList.remove('active-1')
    slide.classList.remove('active-4')

    slideContent.classList.add('active-7')
    slideContentApp.style.animation =  'fadeSlideSub ease 1.8s'
    slideContent.style.animation =  'fadeSlide ease 0.8s'
    setTimeout(function() {
        slideContent.style.animation = 'none'
        slideContentApp.style.animation = 'none'
    }, 2000)
    slideContent.classList.remove('active-5')
    slideContent.classList.remove('active-6')
    slideContent.classList.remove('active-8')
}
slideNodes[3].onclick = () => {
    clearInterval(loopSlider)
    indexSlideCurrent = 3;
    loopSlider = setInterval(loopSlide, 6000)

    $('.slides-dot_item.active').classList.remove('active')
    slideNodes[3].classList.add('active')
    slide.classList.add('active-4')
    slide.classList.remove('active-2')
    slide.classList.remove('active-1')
    slide.classList.remove('active-1')

    slideContent.classList.add('active-8')
    slideContentApp.style.animation =  'fadeSlideSub ease 1.8s'
    slideContent.style.animation =  'fadeSlide ease 0.8s'
    setTimeout(function() {
        slideContent.style.animation = 'none'
        slideContentApp.style.animation = 'none'
    }, 2000)
    slideContent.classList.remove('active-5')
    slideContent.classList.remove('active-6')
    slideContent.classList.remove('active-7')
}

// Set Interval for slides
var loopSlider = setInterval(loopSlide, 6000);
var indexSlideCurrent = 0;
function loopSlide() {
    indexSlideCurrent > 2 ? indexSlideCurrent = 0 : indexSlideCurrent ++;
    autoSlide(indexSlideCurrent);
}

function autoSlide(indexSlideCurrent) {
    slideNodes[indexSlideCurrent].onclick();
}

// Handle prev/next slide changes
// slide previous slide
slidesPrev.onclick = function() {
    clearInterval(loopSlider);
    loopSlider = setInterval(loopSlide, 6000);
    indexSlideCurrent --;
    if(indexSlideCurrent < 0) {
        indexSlideCurrent = slideNodes.length - 1;
    }
        slideNodes[indexSlideCurrent].onclick()
}
//slide next slide
slidesNext.onclick = function() {
    clearInterval(loopSlider);
    loopSlider = setInterval(loopSlide, 6000);
    indexSlideCurrent ++;
    if(indexSlideCurrent >= slideNodes.length) {
        indexSlideCurrent = 0;
    }
    slideNodes[indexSlideCurrent].onclick()
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