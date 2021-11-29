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
            src: './assets/filmABBC/p1.mp4',
            path: 'https://japornasia.com/wp-content/uploads/2020/05/nagai_maria_20200106a10.jpg',
            name: 'Một ngày mệt mỏi cùng em'
        },
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_117343074087362_8851286757269677216_n.mp4?_nc_cat=108&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjI3NDIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=Hen7fcu_FOMAX-MjIeo&rl=2742&vabr=1828&_nc_ht=scontent-frt3-1.xx&oh=efc839d5753db5f352afc6171ab11b35&oe=61A7ECD2',
            path: 'https://thabet66.com/melody-marks.html/melody-mark-1',
            name: 'Địt em phục vụ Melody hãm tiền'
            
        }
        ,
        {
            src: './assets/filmABBC/p2.mp4',
            path: 'https://iv1.lisimg.com/image/21280028/640full-melody-marks.jpg',
            name: 'Tình cờ gặp Idol trên phố'
            
        }
        ,
        {
            src: 'https://fvs.io/redirector?token=QjRLcEt4Q21IQ2JDMHJKcVpHb1ppZFQxR0o0VkUyRm13WGVDc3lnNHVFbjBRM09UWXA5NzhZbmJhb2swYXBPcTFjSG9yOTM2d2dRUk81ZXl1Uk9pMGt1RWhBZUEwRzNYV2t1UnNjb2hMWW1kd3M1MWd4cTBiVzVDQ2trV3c1dU56MlZ0QklkVjZpc2dEWnhHeEVGY1JFSzFxbnE0R1l0eGNaVT06R05Hdk9GS0FSMTdPczZZWFA5ODlrQT0979YK',
            path: 'https://www.tubetubetube.com/dmm/chitose-saegusa/avop00174/hd-chitose-saegusa-0.jpg',
            name: 'Bị Bắt Làm Nô lệ Cho em Chito-se'
            
        }
        ,
        {
            src: 'https://video.fhph1-2.fna.fbcdn.net/v/t66.36240-6/10000000_618455705957951_125417533242997657_n.mp4?_nc_cat=101&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE2MzYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=U1vahTzXiS0AX8uHSgw&rl=1636&vabr=1091&_nc_ht=scontent-bru2-1.xx&oh=88d255042cbcd683fd18c5a98d6f1e74&oe=61A8E266',
            path: 'https://i.pinimg.com/474x/66/33/0f/66330fbc27131fad74ac76f95d0c1d5f.jpg',
            name: 'Chiến em shion Ngọt nước non tơ'
            
        }
        ,
        {
            src: 'https://r5---sn-npoeened.googlevideo.com/videoplayback?expire=1638161629&ei=fQikYffxM9P6gQOQxoaYBA&ip=2401:c440::f816:3eff:fe30:3d4c&id=o-AC0nvbnLlMQfElXd4EQrzkiNwvtIBFnkZArMAuYGkgbN&itag=22&source=youtube&requiressl=yes&mh=Ut&mm=32&mn=sn-npoeened&ms=su&mv=m&mvi=5&pl=48&sc=yes&initcwndbps=62500&vprv=1&prv=1&mime=video/mp4&cnr=14&ratebypass=yes&dur=9302.401&lmt=1630966402518245&mt=1638139704&fexp=24001373,24007246&txp=6211224&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,prv,mime,cnr,ratebypass,dur,lmt&sig=AOq0QJ8wRAIgeMRVQvi2igBTCAiOAWV-X8F1epT0jp0NP4KM3qaHsqMCIB3vnaPg2rlcznLamXWsLJNpKPNaidS79cyARTt3VnwG&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc,initcwndbps&lsig=AG3C_xAwRQIgXGwMjiHFUCIf66HJxCNpJtJKSKs24sjfCFiGjX05rkUCIQCo6_wtPzpfA5IMHqg3-qzIqbVqLHfWCNXQt6psTQAQMg==',
            path: 'https://lh3.googleusercontent.com/proxy/f0CFxbpwM_5bJm6OIj5ZoH0Ki5uYl4tlpTuqF6fYiwaqcAzqQTZrV6VTtKvQdxwia82WOpTGhlkpDY2JNwKoHTXLURAMQGtXctPstpN0EbIqLubVaIN4ujUWuK_VS0j1v3yGs9ZtIOD6ZKC9c-UzeRBGMqPoOe8Uk4eZIxk',
            name: 'Me ke dam dang marina shiraishi '
            
        }
        ,
        {
            src: 'https://r3---sn-npoeenee.googlevideo.com/videoplayback?expire=1638168947&ei=EyWkYZrNHdKsigbBoLa4BA&ip=2401:c440::f816:3eff:fe30:3d4c&id=o-APLytAsR9bnx7-f0fu1JvuvxUagEijtmnkD-ZIiV-wad&itag=22&source=youtube&requiressl=yes&mh=RL&mm=32&mn=sn-npoeenee&ms=su&mv=m&mvi=3&pl=48&sc=yes&pcm2=yes&initcwndbps=132500&vprv=1&prv=1&mime=video/mp4&cnr=14&ratebypass=yes&dur=7711.811&lmt=1635360181816218&mt=1638146903&fexp=24001373,24007246&txp=6211224&sparams=expire,ei,ip,id,itag,source,requiressl,pcm2,vprv,prv,mime,cnr,ratebypass,dur,lmt&sig=AOq0QJ8wRgIhANmKwI8cpxsj9EVmBFp3hNwOrR6s-ARZgsPbz8SP7EVOAiEAvjvOTddNBo-Tr1Cup9muL1sn7tAtuv1bTE022J_1KoM=&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc,initcwndbps&lsig=AG3C_xAwRQIhAO5PYKNDTDWP2-8UD9Xx9lHNJVUO-cOd48_DceggE15lAiAJ4CFR0fncMGf-_c9opxZzSmBRnBqO1Dgo6xb_K8KpyQ==',
            path: 'https://static.sextb.net/poster/adn-018.jpg',
            name: 'Thác loạn với cậu em hư hỏng ai sayama'
            
        }
        ,
        {
            src: 'https://r2---sn-npoe7ne6.googlevideo.com/videoplayback?expire=1638166433&ei=QRukYe2yG-rQ2roPpOmawA4&ip=2401:c440::f816:3eff:fe30:3d4c&id=o-AEwmr2kbWAHDyYwQMlLnUMRKCVvXSifB1acHa8U6Yx7J&itag=22&source=youtube&requiressl=yes&mh=Q9&mm=32&mn=sn-npoe7ne6&ms=su&mv=m&mvi=2&pl=48&sc=yes&initcwndbps=3463750&vprv=1&prv=1&mime=video/mp4&ratebypass=yes&dur=7795.449&lmt=1631824392784503&mt=1638144503&fexp=24001373,24007246&txp=6216222&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,prv,mime,ratebypass,dur,lmt&sig=AOq0QJ8wRAIgMhMBQvXOeehtja6gCkzdB4Qnm5Rj9BfXGe9c5hfsSx8CIH97-UdNoio7V4b6Sn7ZXHi8lMhLVzDbn3ya4jEeLh6W&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc,initcwndbps&lsig=AG3C_xAwRgIhAMbnQ17azR-hC0OvFpf_tqztWFQRH3mVquJWNMAYatzHAiEAp42RrWjEnApEJbgjJ4COhx4L9i0mj31UWjzeJDBT75s=',
            path: 'https://r18.video/pics/ai-sayama/waaa00112/ai-sayama-0-300.jpg',
            name: 'Đit em ở bênh viện'
            
        }
        ,
        {
            src: 'https://r2---sn-npoeenly.googlevideo.com/videoplayback?expire=1638170719&ei=_yukYaO8CtPrrQS4kYTADQ&ip=2401:c440::f816:3eff:fe30:3d4c&id=o-AI52-l73r1NBY03WvCoQKPycYTU8zpZLzI8Hn6981W1q&itag=22&source=youtube&requiressl=yes&mh=1c&mm=32&mn=sn-npoeenly&ms=su&mv=m&mvi=2&pl=48&sc=yes&initcwndbps=3463750&vprv=1&prv=1&mime=video/mp4&cnr=14&ratebypass=yes&dur=7051.807&lmt=1637281118977819&mt=1638148825&fexp=24001373,24007246&txp=6211224&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,prv,mime,cnr,ratebypass,dur,lmt&sig=AOq0QJ8wRQIgK_h97BSURn1w4LZsIfB1i7UjfPdbW1quOEiZTIC0X4ECIQCmF5XvEp62Wu73JbtMOI_J__JRzO-VNFNc1iyn6_1CRg==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc,initcwndbps&lsig=AG3C_xAwRgIhANY9Z0oBKWNm91W67cCsESeozgmVRFJ8zWg8FqmvZY-UAiEAg_gTP5u0pzAa6CUmlOsPTbLDcxw5ARn6m5zc4DTeuH4=',
            path: 'https://xjapanese.com/pornpics/aka-asuka/oae00212/aka-asuka-0-300.jpg',
            name: 'Em đồng nghiệp Aka Asuka'
            
        }
        ,
        {
            src: 'https://r4---sn-npoeenlk.googlevideo.com/videoplayback?expire=1638165199&ei=bxakYerwB7bHs8IPlK2GsAg&ip=2401:c440::f816:3eff:fe30:3d4c&id=o-AIfytNJbOQbJvr71rpVarYpur9Ik1ZyZ2x9sd9ScQPKP&itag=22&source=youtube&requiressl=yes&mh=jx&mm=32&mn=sn-npoeenlk&ms=su&mv=m&mvi=4&pl=48&sc=yes&initcwndbps=3463750&vprv=1&prv=1&mime=video/mp4&cnr=14&ratebypass=yes&dur=7106.908&lmt=1631677900531378&mt=1638143303&fexp=24001373,24007246&txp=6211224&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,prv,mime,cnr,ratebypass,dur,lmt&sig=AOq0QJ8wRQIhAIoHlFXKkUAq_FF_NW4C7oi889sTsMEt4iRclhB56o7DAiBgk8MSGqYydzJeW2wTHhpeAYhlXLOe3hZasU4yCBiwiA==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc,initcwndbps&lsig=AG3C_xAwRAIgaChcF4sFa2lFr1iuLQyd4bsX8NiIyHgGAwrR8VXScVgCIBTeLpcSEHVwbAuBzDg_ffiKLXGsr3fOEARWztvpowW3',
            path: 'https://i2.wp.com/xopenload.pw/wp-content/uploads/2021/03/VEMA-097.jpg?fit=375%2C541&ssl=1',
            name: 'Em giúp việc xinh đẹp'
            
        }
        ,
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
        // ,
        {
            src: 'https://video.fhph1-2.fna.fbcdn.net/v/t42.1790-2/10000000_441664610959594_7756618797033247110_n.mp4?_nc_cat=109&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM2NSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=Ai9-cvGlkaQAX_nW7JD&rl=365&vabr=203&_nc_ht=video-bru2-1.xx&oh=bbe45e4ab06738fe5430affb843a7b8a&oe=61A494CD',
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

// film ABC
const navFilmABC = $$('.js-nav-filmABC')
const navPass = $('#pass')
const navPassInput = $('.pass-input input')
const btnPasss = $('.btn-pass')
const passsOverlay = $('.pass-overlay')
btnPasss.onclick = function () {
    if(navPassInput.value === 'thangdeptrai' || navPassInput.value === '0') {
        $('.pass-input').style.transform = 'translateY(60%)';
        setTimeout(function(){
            navPass.style.transform = 'translateY(-100%)';
        }, 1000)
    }else {
        setTimeout(function(){
            alert('Sai rồi! Hãy thử lại')
            navPassInput.value = '';
        }, 500)
    }
}
window.onkeyup = function (e) {
    if(e.which === 13) {
        btnPasss.onclick();
    }
}