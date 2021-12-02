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
// slideNodes[0].onclick = () => {
//     //Reset interval with indexSlideCurrent
//     indexSlideCurrent = 0;
//     // Add and remove class node, slide, content    
//     $('.slides-dot_item.active').classList.remove('active')
//     slideNodes[0].classList.add('active')
//     slide.classList.add('active-1')
//     slide.classList.remove('active-2')
//     slide.classList.remove('active-3')
//     slide.classList.remove('active-4')
//     slideContent.classList.add('active-5')
//     slideContent.classList.remove('active-6')
//     slideContent.classList.remove('active-7')
//     slideContent.classList.remove('active-8')
//     document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
//     slideContentTextAll[0].classList.add('visi-slide-film')
// }
// slideNodes[1].onclick = () => {
//     indexSlideCurrent = 1;
//     $('.slides-dot_item.active').classList.remove('active')
//     slideNodes[1].classList.add('active')
//     slide.classList.add('active-2')
//     slide.classList.remove('active-1')
//     slide.classList.remove('active-3')
//     slide.classList.remove('active-4')
//     slideContent.classList.add('active-6')
//     slideContent.classList.remove('active-5')
//     slideContent.classList.remove('active-7')
//     slideContent.classList.remove('active-8')
    
//     document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
//     slideContentTextAll[1].classList.add('visi-slide-film')
// }
// slideNodes[2].onclick = () => {
//     indexSlideCurrent = 2;
//     $('.slides-dot_item.active').classList.remove('active')
//     slideNodes[2].classList.add('active')
//     slide.classList.add('active-3')
//     slide.classList.remove('active-1')
//     slide.classList.remove('active-2')
//     slide.classList.remove('active-4')
//     slideContent.classList.add('active-7')
//     slideContent.classList.remove('active-5')
//     slideContent.classList.remove('active-6')
//     slideContent.classList.remove('active-8')
//     document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
//     slideContentTextAll[2].classList.add('visi-slide-film')
// }
// slideNodes[3].onclick = () => {
//     indexSlideCurrent = 3;
//     $('.slides-dot_item.active').classList.remove('active')
//     slideNodes[3].classList.add('active')
//     slide.classList.add('active-4')
//     slide.classList.remove('active-1')
//     slide.classList.remove('active-3')
//     slide.classList.remove('active-2')
//     slideContent.classList.add('active-8')
//     slideContent.classList.remove('active-5')
//     slideContent.classList.remove('active-6')
//     slideContent.classList.remove('active-7')
//     document.querySelector('.slide-content-text.visi-slide-film').classList.remove('visi-slide-film')
//     slideContentTextAll[3].classList.add('visi-slide-film')
// }

// // Set Interval for slides
// // var loopSlider = setInterval(loopSlide, 6000);
// var indexSlideCurrent = 0;
// // function loopSlide() {
//     //     indexSlideCurrent > 2 ? indexSlideCurrent = 0 : indexSlideCurrent ++;
//     //     autoSlide(indexSlideCurrent);
//     // }
    
//     // function autoSlide(indexSlideCurrent) {
//         //     slideNodes[indexSlideCurrent].onclick();
//         // }
        
//         // Handle prev/next slide changes
//         // slide previous slide
//         slidesPrev.onclick = function() {
//             indexSlideCurrent --;
//             if(indexSlideCurrent < 0) {
//                 indexSlideCurrent = slideNodes.length - 1;
//             }
//             slideNodes[indexSlideCurrent].onclick()
//         }
//         //slide next slide
//         slidesNext.onclick = function() {
//             indexSlideCurrent ++;
//             if(indexSlideCurrent >= slideNodes.length) {
//                 indexSlideCurrent = 0;
//             }
//             slideNodes[indexSlideCurrent].onclick()
//         }
//         // mouse move event
//         var startClient;
//         var endClient;
//         slides.onmousedown = function(e) {
//             startClient = e.clientX;
//         }
//         slides.onmouseup = function(e) {
//             endClient = e.clientX;
//             if(startClient - endClient > 50) {
//                 slidesNext.onclick();
//             }
//             else if(startClient - endClient <= -50) {
//                 slidesPrev.onclick();
//             }
//         }
        
//         // touch mobile move event
//         slides.ontouchstart = function(e) {
//             startClient = e.touches[0].clientX;
//         }
//         slides.ontouchend = function(e) {
//             endClient = e.changedTouches[0].clientX;
//             const aboutClient = startClient - endClient;
//             if(aboutClient > 50) {
//                 slidesNext.onclick();
//             }
//             else if(aboutClient < -50) {
//                 slidesPrev.onclick();
//             }
//         }
        
        
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
const btnTrailer = document.querySelector('.js-btn-trailer-play')
const filmApp = document.querySelector('.film-app')
const filmModal = document.querySelector('.modal-film')
const trailer = document.querySelector('.trailer')
const filmPlay = document.querySelector('.film')
const video = document.querySelector('#video')
const videoTitle = document.querySelector('#video-title')

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
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.27313-2/10000000_1295665937528370_2205191848984991247_n.mp4?_nc_cat=108&vs=c64d9e5a1de84145&_nc_vs=HBksFQAYJEdJQ1dtQUF5TnZTN1pwb0VBQTlXVnBSTmFwb2VickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBalJtbjFleFVDQUZvNU5kYUxWbmdnYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmyq%2FiosW4kgMVkE4oAkMzGAt2dHNfcHJldmlldxwXQL0uEeuFHrgYJ2Rhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2QZHBUAFaC2BAAoElZJREVPX1ZJRVdfUkVRVUVTVBsNiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYzODI4MDI0MTE0OQxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzg4NDk3ODczNTU1MzU1MBJvZW1fdmlkZW9fYXNzZXRfaWQPODg0OTc4NzI4ODg2ODg0FW9lbV92aWRlb19yZXNvdXJjZV9pZA84ODQ5Nzg3MTg4ODY4ODUcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMDE5NDc2ODc4NjEyNzQyJQIcHBwV8OYXGwFVAAIbAVUAAhwVAgAAABaAurcDACXEARsHiAFzBDE5NTYCY2QKMjAyMS0xMS0yMgNyY2IBMANhcHASU3R1ZGlvIHPDoW5nIHThuqFvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwc3NDcwLjA1AnRzD29lcF9wcm9ncmVzc2l2ZQA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCIsInNvdXJjZV9zZWdtZW50X2hhbmRsZSI6bnVsbH0%3D&_nc_ohc=fB5as7jpbPsAX_XiR8_&_nc_ht=video-frt3-1.xx&oh=9aed2e339a4b2b42fc043df399756ef1&oe=61A794B6&_nc_rid=95de40f704d8410',
            path: 'https://javdoe.sh/media/videos/tmb/000/107/970/1.jpg',
            name: 'Me ke dam dang marina shiraishi '
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_423830532515801_5963359634454360916_n.mp4?_nc_cat=106&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjMzNCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=ztn9tO-BLGIAX84_7C-&rl=334&vabr=186&_nc_ht=video-frt3-1.xx&oh=a8291f618c92f6e129b7802a0a15a015&oe=61A7ED18',
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
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_408268364312423_9200881441918919966_n.mp4?_nc_cat=103&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM2MSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=yyyzGFR6sFwAX-Xn-TL&rl=361&vabr=201&_nc_ht=video-frt3-2.xx&oh=7dcda44c68ba92d24e7d0490c79f96be&oe=61A78B51',
            path: 'https://xjapanese.com/pornpics/aka-asuka/oae00212/aka-asuka-0-300.jpg',
            name: 'Em đồng nghiệp Aka Asuka'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_4567755046671632_1523789648021009772_n.mp4?_nc_cat=108&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDQsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=Zt9rZSboR9gAX__23Us&rl=1504&vabr=1003&_nc_ht=scontent-frt3-1.xx&oh=2e0540f086bf90a5aa428ab9371af3e3&oe=61AB3F8A',
            path: 'https://i2.wp.com/xopenload.pw/wp-content/uploads/2021/03/VEMA-097.jpg?fit=375%2C541&ssl=1',
            name: 'Em giúp việc xinh đẹp'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_125808009892808_3582196089384586831_n.mp4?_nc_cat=1&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjIwMjAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=yGnxYA2tN3AAX86Cbmb&rl=2020&vabr=1347&_nc_ht=scontent-frx5-1.xx&oh=312f967735241263c0089c8123bbc9b4&oe=61AB9C9D',
            path: 'https://danviet.mediacdn.vn/upload/2-2018/images/2018-06-23/7-1529742628-width650height858.jpg',
            name: 'Em gai xinh dep tai nha'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.27313-2/10000000_858703231545078_3486579932051737661_n.mp4?_nc_cat=1&vs=19dac2718b1ba73e&_nc_vs=HBksFQAYJEdJQ1dtQUQyYmhWdC1Bd0RBRDBNODdyNTBXSXdickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBeFU2Wk10bjRBQU9tV1BMdFQ1UEZQYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmwKGAk9eSwAEVkE4oAkMzGAt2dHNfcHJldmlldxwXQJ3xUeuFHrgYJ2Rhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2QZHBUAFaC2BAAoElZJREVPX1ZJRVdfUkVRVUVTVBsNiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYzODI4MDIwOTU2NQxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzQyMjUzMzQwOTU3ODcxORJvZW1fdmlkZW9fYXNzZXRfaWQPNDIyNTMzNDAyOTEyMDUzFW9lbV92aWRlb19yZXNvdXJjZV9pZA80MjI1MzMzOTk1Nzg3MjAcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA81OTg2MDIyMTE0NzUyNTYlAhwcHBXw5hcbAVUAAhsBVQACHBUCAAAAFoC6twMAJcQBGweIAXMDMTMzAmNkCjIwMjEtMTEtMTkDcmNiATADYXBwElN0dWRpbyBzw6FuZyB04bqhbwJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTkxNi4zMTgCdHMPb2VwX3Byb2dyZXNzaXZlAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCIsInNvdXJjZV9zZWdtZW50X2hhbmRsZSI6bnVsbH0%3D&_nc_ohc=pS5JPrZATd0AX91KjoW&_nc_ht=video-frx5-1.xx&oh=90256e944030e27bccd6775785469cd7&oe=61A7B29C&_nc_rid=af0abe28052749e',
            path: 'https://thongcaucongnghet.info/uploads/tieusumelodymarks/melody-marks-10.jpg',
            name: 'Chuyen du lich cung em'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_695923691811658_8548958732098580970_n.mp4?_nc_cat=107&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM0NzUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=R0pJAmBihYgAX9bJY87&rl=3475&vabr=2317&_nc_ht=scontent-frt3-1.xx&oh=b9980b9dfc9a0265be407e416d3dfdd2&oe=61AAD00B',
            path: 'https://api.chich.info/Uploads/Album/anh-sex-gai-chau-au%20(18).jpg',
            name: 'Ga chich em tren pho'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_577193870208528_6897522989478438018_n.mp4?_nc_cat=103&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM5NiwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=oKxt_l23EvgAX-oFI-q&rl=396&vabr=220&_nc_ht=video-frt3-2.xx&oh=3a594c7a3f5ef086aeed4204e11f26b7&oe=61A7BC1E',
            path: 'https://ae01.alicdn.com/kf/Hf0d511ff452d4dbcb9c70de068057feez.jpg',
            name: 'Chuyen du lich ngot ngao voi em Melody'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_320528246241709_7830470949008946672_n.mp4?_nc_cat=107&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjMyNDksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=HRluzIeEGLEAX8Z-yme&rl=3249&vabr=2166&_nc_ht=scontent-frt3-1.xx&oh=f8bf907fea514380d15efa3eb415e82a&oe=61ABB68D',
            path: 'https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjE2MDAiLCJoIjoiMTIw/MCJ9fSwiaWQiOiJpNzUw/ODE5NyIsImYiOiJqcGci/fQ;;.jpg',
            name: 'Cach melody nho sua xe'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_688537985363972_5383715241904905650_n.mp4?_nc_cat=1&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=7ZhoTWKaJUcAX9QSbAw&rl=1500&vabr=942&_nc_ht=scontent-frx5-1.xx&oh=dce25af7f8f1f9311e8ddab5e1cb017b&oe=61AB166E',
            path: 'https://m.media-amazon.com/images/I/411uVC0M7lL.jpg',
            name: 'Phịch em đồng nghiệp Mikami hàng non'
            
        }
    ]

};
// btnTrailer.onclick = () => {
//     toastAram();
// }
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
        audio.pause();
        videoTitle.pause();
    }
}
// handle click close modal film
const btnloseModalFilm = document.querySelector('.storage-body-modal_overlay i');
const overlayModalFilm = document.querySelector('.storage-body-modal_overlay');
function audioPlay () {
    setTimeout(() => {
        audio.play();
    }, 800)
}
btnloseModalFilm.onclick = function () {
    video.pause();
    audioPlay();
    videoTitle.play();
    modalPlayFilm.style.display = 'none'
}
overlayModalFilm.onclick = function () {
    video.pause();
    audioPlay();
    videoTitle.play();
    modalPlayFilm.style.display = 'none'
}
window.onkeyup = function (e) {
    if(e.which == 27) {
        video.pause();
        audioPlay();
        videoTitle.play();
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
const audio = $('audio')
btnPasss.onclick = function () {
    if(navPassInput.value === 'thangdeptrai' || navPassInput.value === '0') {
        $('.pass-input').style.transform = 'translateY(60%)';
        setTimeout(function(){
            navPass.style.transform = 'translateY(-100%)';
        }, 1000)
        audio.play();
        videoTitle.play();
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
audio.loop = true;
videoTitle.loop = true;
videoTitle.muted = true;
audio.volume = 0.8;

