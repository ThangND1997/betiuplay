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
            src: 'https://fvs.io/redirector?token=bHVSM2piYkdVOFF3aE5PMzdmVE4vcm1SZUNaN0duY0MyYk85SGpOaVBPV2RoWVB3SHZZOWNtenFZd3ZEaENWWnZheG5haTZoalZyZGZrZjhkOHdvam96d0t1SFNzSnkycUJ2a29ENWRaQUpvV090a005aWNoZTJodXJzMVZmSFBaa3llam16d3hKK0paNHM4WEVzTWViS2RyN2xzd25xaVZDaz06RjB1M2dETGI3YVRLM21kS0svd2RnUT092PyK',
            path: 'https://www.tubetubetube.com/dmm/chitose-saegusa/avop00174/hd-chitose-saegusa-0.jpg',
            name: 'Bị Bắt Làm Nô lệ Cho em Chito-se JAV68'
            
        }
        ,
        {
            src: 'https://video.fhph1-2.fna.fbcdn.net/v/t66.36240-6/10000000_618455705957951_125417533242997657_n.mp4?_nc_cat=101&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE2MzYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=U1vahTzXiS0AX8uHSgw&rl=1636&vabr=1091&_nc_ht=scontent-bru2-1.xx&oh=88d255042cbcd683fd18c5a98d6f1e74&oe=61A8E266',
            path: 'https://i.pinimg.com/474x/66/33/0f/66330fbc27131fad74ac76f95d0c1d5f.jpg',
            name: 'Chiến em shion Ngọt nước non tơ'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.27313-2/10000000_1295665937528370_2205191848984991247_n.mp4?_nc_cat=108&vs=c64d9e5a1de84145&_nc_vs=HBksFQAYJEdJQ1dtQUF5TnZTN1pwb0VBQTlXVnBSTmFwb2VickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBalJtbjFleFVDQUZvNU5kYUxWbmdnYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmyq%2FiosW4kgMVkE4oAkMzGAt2dHNfcHJldmlldxwXQL0uEeuFHrgYJ2Rhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2QZHBUAFaC2BAAoElZJREVPX1ZJRVdfUkVRVUVTVBsNiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYzODExNzM2ODIyOQxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzg4NDk3ODczNTU1MzU1MBJvZW1fdmlkZW9fYXNzZXRfaWQPODg0OTc4NzI4ODg2ODg0FW9lbV92aWRlb19yZXNvdXJjZV9pZA84ODQ5Nzg3MTg4ODY4ODUcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMDE5NDc2ODc4NjEyNzQyJQIcHBwV8OYXGwFVAAIbAVUAAhwVAgAAABaAurcDACXEARsHiAFzBDE5NTYCY2QKMjAyMS0xMS0yMgNyY2IBMANhcHASU3R1ZGlvIHPDoW5nIHThuqFvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwc3NDcwLjA1AnRzD29lcF9wcm9ncmVzc2l2ZQA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCIsInNvdXJjZV9zZWdtZW50X2hhbmRsZSI6bnVsbH0%3D&_nc_ohc=Y1-sX83sGVoAX-NM2Gq&_nc_ht=video-frt3-1.xx&oh=c59a6f5a24e00440f4e0dc5bba49001a&oe=61A59A76&_nc_rid=17b5e094dd8541f',
            path: 'https://javdoe.sh/media/videos/tmb/000/107/970/1.jpg',
            name: 'Me ke dam dang marina shiraishi '
            
        }
        ,
        {
            src: 'https://redirector.googlevideo.com/videoplayback?expire=1638222709&ei=FfekYbrmFs-vyQXUt6iIBQ&ip=65.21.105.248&id=o-AA4OlEx3_HWDqM4w-Uca9diPjHCwGahvypNHy4BrFTwY&itag=22&source=youtube&requiressl=yes&mh=_o&mm=32&mn=sn-5goeen7d&ms=su&mv=u&mvi=1&pl=25&sc=yes&vprv=1&prv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=7120.143&lmt=1632128076478007&mt=1638200272&fexp=24001373%2C24007246&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgOgtg5lZS-j0NMKXSe2HhCy-UcR03Cw-riop3wKjOIigCIQC96j3cBgYdSjKEyqbbYakgZqbSEnxat6LxDLHW-iRhcw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Csc&lsig=AG3C_xAwRQIgWS-xMkc1onJzwLFOegnIYSHAq-UBqBdbMbEhrHYch7UCIQC5sYyUubnFEKeBpc6iwi5Bxw4kP3vbA_I_OcsR9WSWDg%3D%3D',
            path: 'https://static.sextb.net/poster/adn-018.jpg',
            name: 'Thác loạn với cậu em hư hỏng ai sayama'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_450305610043187_2859235298415371938_n.mp4?_nc_cat=109&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1NzUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=AU1Hfa5twGUAX-cN3wo&rl=1575&vabr=1050&_nc_ht=scontent-frx5-2.xx&oh=a98fa88c2843e78bb001e73e6ac2cd3f&oe=61AA23AE',
            path: 'https://r18.video/pics/ai-sayama/waaa00112/ai-sayama-0-300.jpg',
            name: 'Địt em gái bạo dâm hàng xóm'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_408268364312423_9200881441918919966_n.mp4?_nc_cat=103&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM2MSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=yyyzGFR6sFwAX-Xn-TL&rl=361&vabr=201&_nc_ht=video-frt3-2.xx&oh=04f4ec922d36420eba5aa3422d31b7e6&oe=61A59111',
            path: 'https://xjapanese.com/pornpics/aka-asuka/oae00212/aka-asuka-0-300.jpg',
            name: 'Em đồng nghiệp Aka Asuka'
            
        }
        ,
        {
            src: 'https://redirector.googlevideo.com/videoplayback?expire=1638218659&ei=Q-ekYcDxFdXtyQXxxJ0w&ip=65.21.105.248&id=o-ADr8-k8k4A8rmfYuivqQRytA7RqLMbWIP3Q8_hmP_nQm&itag=22&source=youtube&requiressl=yes&mh=eZ&mm=32&mn=sn-5goeen7d&ms=su&mv=u&mvi=1&pl=25&sc=yes&vprv=1&prv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=7008.734&lmt=1637770574013080&mt=1638196588&fexp=24001373%2C24007246&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgXnSbpsKN41nl-j7eqZ2jK0qHnVrKpUpf1Kna_pUYpIkCIQCkhW62ODBFMI18Z-1OZxGuNsoTqSYT0aPb_yneQR86eg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Csc&lsig=AG3C_xAwRgIhAJt1a6My8IMXAdltffiSfCCZv1dbO-SFujdyH9ZmAlJoAiEAj4gkA5NOm5uumf8ZXaxU-Ior6k4YDSBapVGsKrHhRAc%3D',
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
            src: 'https://redirector.googlevideo.com/videoplayback?expire=1638222712&ei=GPekYfnPDIiwyQX_2rOIDw&ip=65.21.105.248&id=o-AFPT7xnDUkBLOGkUwcZlnyQN99Wde1Sn2LjpIHX5mcAK&itag=22&source=youtube&requiressl=yes&mh=EY&mm=32&mn=sn-5goeen7r&ms=su&mv=u&mvi=1&pl=25&sc=yes&vprv=1&prv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=10732.100&lmt=1637770575319010&mt=1638200272&fexp=24001373%2C24007246&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhANglW3jBP5RMXhakV4B43tbwjZ903vIoCAnTUgufxgGSAiBaMCcXaj3wkHEzhbrmKIfc86bv7R6XFSO-1wnwK2vVzA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Csc&lsig=AG3C_xAwRQIhAPQJhR6NW0rZrohRu8eEwUAYnXpTx8Oi5H1YybYZ-RgDAiAo0cOHggVnSWQRnUXmDl-Zw89TJ2iBTWLAXgEK2aU9Nw%3D%3D',
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