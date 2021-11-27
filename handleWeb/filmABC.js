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

const appItemsFilm = {
    filmContent: [
        {
            src: 'https://vdownload-7.sb-cd.com/9/2/9251064-720p.mp4?secure=gUNzV1_NoBezQy-xWbNpOg,1638021281&m=7&d=6&_tid=9251064',
            path: 'https://japornasia.com/wp-content/uploads/2020/05/nagai_maria_20200106a10.jpg',
            name: 'Một ngày mệt mỏi cùng em'
        },
        {
            src: 'https://vdownload-25.sb-cd.com/8/4/8413377-720p.mp4?secure=1NzF56Xo4HBfnhDmkjgIBA,1638023256&m=25&d=3&_tid=8413377',
            path: 'https://thabet66.com/melody-marks.html/melody-mark-1',
            name: 'Địt em phục vụ Melody hãm tiền'
            
        }
        ,
        {
            src: 'https://vdownload-6.sb-cd.com/9/1/9139221-720p.mp4?secure=uBF9CQjPGleqzVbFFVgRUw,1638023716&m=6&d=6&_tid=9139221',
            path: 'https://iv1.lisimg.com/image/21280028/640full-melody-marks.jpg',
            name: 'Tình cờ gặp Idol trên phố'
            
        }
        ,
        {
            src: 'https://vdownload-1.sb-cd.com/9/6/9643361-720p.mp4?secure=mka6n7GuIPRXxa1JiGooIA,1638024093&m=1&d=4&_tid=9643361',
            path: 'https://www.tubetubetube.com/dmm/chitose-saegusa/avop00174/hd-chitose-saegusa-0.jpg',
            name: 'Bị Bắt Làm Nô lệ Cho em Chito-se'
            
        }
        ,
        {
            src: 'https://vdownload-11.sb-cd.com/7/7/7779562-720p.mp4?secure=fEpMXlh0AZoQXo4LPJXg4A,1638025686&m=11&d=6&_tid=7779562',
            path: 'https://i.pinimg.com/474x/66/33/0f/66330fbc27131fad74ac76f95d0c1d5f.jpg',
            name: 'Chiến em shion Ngọt nước non tơ'
            
        }
        // ,
        // {
        //     src: './assets/trailer/Demon Slayer - Kimetsu no Yaiba - The Movie- Mugen Train Official Trailer.mp4',
        //     path: './assets/img/poster-film/end5.jpg',
        //     name: 'Kimetsu no Yaiba - The Movie'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/Phim hoạt hình -RICHARD THE STORK _ VẸT CÒ PHIÊU LƯU KÝ- trailer.mp4',
        //     path: './assets/img/poster-film/end6.jpg',
        //     name: 'Vẹt Cò phiêu lưu ký'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/Annabelle- Tạo Vật Quỷ Dữ - Official Trailer.mp4',
        //     path: './assets/img/poster-film/end7.jpg',
        //     name: 'Annabelle- Tạo Vật Quỷ Dữ'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/Duck Duck Goose - Ngỗng Vịt Phiêu Lưu Ký - Trailer.mp4',
        //     path: './assets/img/poster-film/end8.jpg',
        //     name: 'Ngỗng Vịt Phiêu Lưu Ký'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/Phim -Cậu Vàng- Teaser Trailer - KC 08.01.2021.mp4',
        //     path: './assets/img/poster-film/end9.jpg',
        //     name: 'Cậu Vàng'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/Chú Khủng Long Tốt Bụng - Trailer Chính Thức.mp4',
        //     path: './assets/img/poster-film/end10.jpg',
        //     name: 'Chú Khủng Long Tốt Bụng'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/A DOG NAMED PALMA ★ Russian movie trailer 2021.mp4',
        //     path: './assets/img/poster-film/end11.jpg',
        //     name: 'Chú Chó PalMa'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/The Call Of The Wild- Tiếng Gọi Nơi Hoang Dã - Legend.mp4',
        //     path: './assets/img/poster-film/end15.jpg',
        //     name: 'Tiếng Gọi Nơi Hoang Dã'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/The Call Of The Wild- Tiếng Gọi Nơi Hoang Dã - Legend.mp4',
        //     path: './assets/img/poster-film/end13.jpg',
        //     name: 'Tiếng Gọi Nơi Hoang Dã'
            
        // }
        // ,
        // {
        //     src: './assets/trailer/Walking With Dinosaurs - Dạo Bước Cùng Khủng Long - Trailer E.mp4',
        //     path: './assets/img/poster-film/end14.jpg',
        //     name: 'Dạo Bước Khủng Long'
            
        // }
        ,
        {
            src: 'https://vdownload-19.sb-cd.com/9/9/9918795-720p.mp4?secure=Ti4E6g1fKXE5t1J3OA_A7Q,1638032664&m=19&d=6&_tid=9918795',
            path: 'https://javcl.com/wp-content/uploads/2020/06/patsupatsu-clothing-big-breasts-we-are-reverse-sex.jpg',
            name: 'Phịch em đồng nghiệp Ai-saayama'
            
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
const stoItems = document.querySelectorAll('.storage-item');
const stoImg = document.querySelector('.storage-item > img');
const stoOverlay = document.querySelectorAll('.storage-item-overlay');
// handle click on poster film
var currentFilm;
const modalPlayFilm = document.querySelector('.storage-body-modal');
zeroEnd.onclick = function (e) {
    const filmNode = e.target.closest('.storage-content');
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    if(filmNode) {
        currentFilm = Number(filmNode.dataset.index);
        video.src = appItemsFilm.filmContent[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm.filmContent[currentFilm].name;
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

// handle click btn film modal

function toastAram () {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast', 'toastAram')
        toast.innerHTML = `
            <i class="ti-settings aram"></i>
            <p class="toast-text">Chức năng đang được cập nhật</p>
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
