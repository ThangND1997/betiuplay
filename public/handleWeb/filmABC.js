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

let dropdownToggle = document.querySelector(".dropdown-toggle")
let logImg = document.querySelector(".log-img")
let logName = document.querySelector(".log-name")
let btnLoginMobile = document.querySelector(".btn-login_link")
let menuDrop = document.querySelector(".dropdown-menu")
const loading = document.querySelector('#loading')

function start () {
    const isSuccess = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("id");
    if(isSuccess === "undefined" || isSuccess == null) {
        window.location.href = './auth.html'
    }
    var obj = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${isSuccess}`
        }
      }
    fetch(`https://api-betiu.herokuapp.com/api/v1/read/${userId}`, obj)
    .then(res => res.json())
    .then(result => {
        logImg.src = result.avatar;
        imgUploadAvatar.src = result.avatar;
        profileNameContent.value = `${result.firstName} ${result.lastName}`;
        profilePhoneContent.value = result.phone || "";
        logName.textContent = `Hello, ${result.firstName} ${result.lastName}`;
    })
}

const doc = document.querySelector('.log-out')
doc.addEventListener('click', button)
function button () {
    sessionStorage.clear()
    start()
}

start()

dropdownToggle.onclick = () => {
    if (menuDrop.style.display === "none" || menuDrop.style.display == "") {
        menuDrop.style.display = "flex"
    }else {
        menuDrop.style.display = "none"
    }
}

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
        // slidesPrev.onclick = function() {
        //     indexSlideCurrent --;
        //     if(indexSlideCurrent < 0) {
        //         indexSlideCurrent = slideNodes.length - 1;
        //     }
        //     slideNodes[indexSlideCurrent].onclick()
        // }
        // //slide next slide
        // slidesNext.onclick = function() {
        //     indexSlideCurrent ++;
        //     if(indexSlideCurrent >= slideNodes.length) {
        //         indexSlideCurrent = 0;
        //     }
        //     slideNodes[indexSlideCurrent].onclick()
        // }
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
        // slides.ontouchstart = function(e) {
        //     startClient = e.touches[0].clientX;
        // }
        // slides.ontouchend = function(e) {
        //     endClient = e.changedTouches[0].clientX;
        //     const aboutClient = startClient - endClient;
        //     if(aboutClient > 50) {
        //         slidesNext.onclick();
        //     }
        //     else if(aboutClient < -50) {
        //         slidesPrev.onclick();
        //     }
        // }
        
        
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
            path: 'https://javdragon.com/wp-content/uploads/2021/07/blk00504pl.jpg',
            name: 'Một ngày mệt mỏi cùng em'
        },
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_117343074087362_8851286757269677216_n.mp4?_nc_cat=108&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjI3NDIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=Hen7fcu_FOMAX-MjIeo&rl=2742&vabr=1828&_nc_ht=scontent-frt3-1.xx&oh=efc839d5753db5f352afc6171ab11b35&oe=61A7ECD2',
            path: 'https://3.bp.blogspot.com/-eOqqEgCuGNo/XKDevxAdx-I/AAAAAAAAlnQ/gOA9qq6ibUIDqR9SB5PUXpdkhafZ-TJEgCK4BGAYYCw/s1600/W_adultery_2018_HD.jpg',
            name: 'Con ciu to bự chỉ dành cho em'
            
        }
        ,
        {
            src: './assets/filmABBC/p2.mp4',
            path: 'https://i.mydramalist.com/wggl1_4c.jpg?v=1',
            name: 'Hiếp dâm tập thể HD'
            
        }
        ,
        {
            src: 'https://vdownload-19.sb-cd.com/8/4/8421035-720p.mp4?secure=Qz7mpaE2AjgnhGU_rCHccQ,1638905631&m=19&d=4&_tid=8421035',
            path: 'https://img.soccersuck.com/images/2021/03/15/ipx641-pl.jpg',
            name: 'Bị Bắt Làm Nô lệ Cho em Chito-se JAV68'
            
        }
        ,
        {
            src: 'https://video.fhph1-2.fna.fbcdn.net/v/t66.36240-6/10000000_618455705957951_125417533242997657_n.mp4?_nc_cat=101&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE2MzYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=U1vahTzXiS0AX8uHSgw&rl=1636&vabr=1091&_nc_ht=scontent-bru2-1.xx&oh=88d255042cbcd683fd18c5a98d6f1e74&oe=61A8E266',
            path: 'https://www.japanesebeauties.net/r18/hikari-azusa/ipx00756/hd-hikari-azusa-0.jpg',
            name: 'Chiến em shion Ngọt nước non tơ'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.27313-2/10000000_1295665937528370_2205191848984991247_n.mp4?_nc_cat=108&vs=c64d9e5a1de84145&_nc_vs=HBksFQAYJEdJQ1dtQUF5TnZTN1pwb0VBQTlXVnBSTmFwb2VickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBalJtbjFleFVDQUZvNU5kYUxWbmdnYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmyq%2FiosW4kgMVkE4oAkMzGAt2dHNfcHJldmlldxwXQL0uEeuFHrgYJ2Rhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2QZHBUAFaC2BAAoElZJREVPX1ZJRVdfUkVRVUVTVBsNiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYzODI4MDI0MTE0OQxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzg4NDk3ODczNTU1MzU1MBJvZW1fdmlkZW9fYXNzZXRfaWQPODg0OTc4NzI4ODg2ODg0FW9lbV92aWRlb19yZXNvdXJjZV9pZA84ODQ5Nzg3MTg4ODY4ODUcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMDE5NDc2ODc4NjEyNzQyJQIcHBwV8OYXGwFVAAIbAVUAAhwVAgAAABaAurcDACXEARsHiAFzBDE5NTYCY2QKMjAyMS0xMS0yMgNyY2IBMANhcHASU3R1ZGlvIHPDoW5nIHThuqFvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwc3NDcwLjA1AnRzD29lcF9wcm9ncmVzc2l2ZQA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCIsInNvdXJjZV9zZWdtZW50X2hhbmRsZSI6bnVsbH0%3D&_nc_ohc=fB5as7jpbPsAX_XiR8_&_nc_ht=video-frt3-1.xx&oh=9aed2e339a4b2b42fc043df399756ef1&oe=61A794B6&_nc_rid=95de40f704d8410',
            path: 'https://javdragon.com/wp-content/uploads/2021/11/242113456_1645711l.jpg',
            name: 'Me ke dam dang marina shiraishi '
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_423830532515801_5963359634454360916_n.mp4?_nc_cat=106&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjMzNCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=ztn9tO-BLGIAX84_7C-&rl=334&vabr=186&_nc_ht=video-frt3-1.xx&oh=a8291f618c92f6e129b7802a0a15a015&oe=61A7ED18',
            path: 'https://jav-fetish.com/wp-content/uploads/2021/04/jul00529pl-1.jpg',
            name: 'Thác loạn với cậu em hư hỏng ai sayama'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_450305610043187_2859235298415371938_n.mp4?_nc_cat=109&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1NzUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=AU1Hfa5twGUAX-cN3wo&rl=1575&vabr=1050&_nc_ht=scontent-frx5-2.xx&oh=a98fa88c2843e78bb001e73e6ac2cd3f&oe=61AA23AE',
            path: 'https://static.sextb.net/poster/ssis-080.jpg',
            name: 'Địt em gái bạo dâm hàng xóm'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_408268364312423_9200881441918919966_n.mp4?_nc_cat=103&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM2MSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=yyyzGFR6sFwAX-Xn-TL&rl=361&vabr=201&_nc_ht=video-frt3-2.xx&oh=7dcda44c68ba92d24e7d0490c79f96be&oe=61A78B51',
            path: 'https://freepornee.com/r18/marina-shiraishi/jusd00930/hd-marina-shiraishi-0.jpg',
            name: 'Em đồng nghiệp Aka Asuka'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_4567755046671632_1523789648021009772_n.mp4?_nc_cat=108&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDQsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=Zt9rZSboR9gAX__23Us&rl=1504&vabr=1003&_nc_ht=scontent-frt3-1.xx&oh=2e0540f086bf90a5aa428ab9371af3e3&oe=61AB3F8A',
            path: 'https://static.javct.net/poster/ssni-780.jpg',
            name: 'Em giúp việc xinh đẹp'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_125808009892808_3582196089384586831_n.mp4?_nc_cat=1&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjIwMjAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=yGnxYA2tN3AAX86Cbmb&rl=2020&vabr=1347&_nc_ht=scontent-frx5-1.xx&oh=312f967735241263c0089c8123bbc9b4&oe=61AB9C9D',
            path: 'https://javmodel.com/javdata/uploads/ssni857.jpg',
            name: 'Em gai xinh dep tai nha'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.27313-2/10000000_858703231545078_3486579932051737661_n.mp4?_nc_cat=1&vs=19dac2718b1ba73e&_nc_vs=HBksFQAYJEdJQ1dtQUQyYmhWdC1Bd0RBRDBNODdyNTBXSXdickZxQUFBRhUAAsgBABUAGCRHSUNXbUFBeFU2Wk10bjRBQU9tV1BMdFQ1UEZQYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmwKGAk9eSwAEVkE4oAkMzGAt2dHNfcHJldmlldxwXQJ3xUeuFHrgYJ2Rhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2QZHBUAFaC2BAAoElZJREVPX1ZJRVdfUkVRVUVTVBsNiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYzODI4MDIwOTU2NQxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzQyMjUzMzQwOTU3ODcxORJvZW1fdmlkZW9fYXNzZXRfaWQPNDIyNTMzNDAyOTEyMDUzFW9lbV92aWRlb19yZXNvdXJjZV9pZA80MjI1MzMzOTk1Nzg3MjAcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA81OTg2MDIyMTE0NzUyNTYlAhwcHBXw5hcbAVUAAhsBVQACHBUCAAAAFoC6twMAJcQBGweIAXMDMTMzAmNkCjIwMjEtMTEtMTkDcmNiATADYXBwElN0dWRpbyBzw6FuZyB04bqhbwJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MIMTkxNi4zMTgCdHMPb2VwX3Byb2dyZXNzaXZlAA%3D%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCIsInNvdXJjZV9zZWdtZW50X2hhbmRsZSI6bnVsbH0%3D&_nc_ohc=pS5JPrZATd0AX91KjoW&_nc_ht=video-frx5-1.xx&oh=90256e944030e27bccd6775785469cd7&oe=61A7B29C&_nc_rid=af0abe28052749e',
            path: 'https://jav-fetish.site/wp-content/uploads/2019/11/meyd548pl-1.jpg',
            name: 'Chuyen du lich cung em'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_695923691811658_8548958732098580970_n.mp4?_nc_cat=107&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM0NzUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=R0pJAmBihYgAX9bJY87&rl=3475&vabr=2317&_nc_ht=scontent-frt3-1.xx&oh=b9980b9dfc9a0265be407e416d3dfdd2&oe=61AAD00B',
            path: 'https://javhd.pics/dmm/marina-yuzuki/h_205ssnd00102/hd-marina-yuzuki-0.jpg',
            name: 'Ga chich em tren pho'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t42.1790-2/10000000_577193870208528_6897522989478438018_n.mp4?_nc_cat=103&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjM5NiwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=oKxt_l23EvgAX-oFI-q&rl=396&vabr=220&_nc_ht=video-frt3-2.xx&oh=3a594c7a3f5ef086aeed4204e11f26b7&oe=61A7BC1E',
            path: 'https://javdragon.com/wp-content/uploads/2021/11/242113456_1645711l.jpg',
            name: 'Chuyen du lich ngot ngao voi em Melody'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_320528246241709_7830470949008946672_n.mp4?_nc_cat=107&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjMyNDksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=HRluzIeEGLEAX8Z-yme&rl=3249&vabr=2166&_nc_ht=scontent-frt3-1.xx&oh=f8bf907fea514380d15efa3eb415e82a&oe=61ABB68D',
            path: 'https://javdragon.com/wp-content/uploads/2021/05/ssis00068pl.jpg',
            name: 'Cach melody nho sua xe'
            
        }
        ,
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_688537985363972_5383715241904905650_n.mp4?_nc_cat=1&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=7ZhoTWKaJUcAX9QSbAw&rl=1500&vabr=942&_nc_ht=scontent-frx5-1.xx&oh=dce25af7f8f1f9311e8ddab5e1cb017b&oe=61AB166E',
            path: 'https://v2.9nungx.com/wp-content/uploads/clothes-big-tits-i-want-to-rec-unintentionally-clo-340x520.jpg',
            name: 'Phịch em đồng nghiệp Mikami hàng non'
            
        }
    ],

    filmUsUk: [
        {
            src: './assets/filmABBC/p1.mp4',
            path: 'https://sun9-16.userapi.com/impf/c852236/v852236819/11d18b/XP5ZLnEsqi0.jpg?size=403x604&quality=96&sign=ed8e25cdad8cea20cf5bde7df2dcc059&type=album',
            name: 'Anh sửa ống nước Cu bự'
        },
        {
            src: 'https://vdownload-19.sb-cd.com/8/4/8421035-720p.mp4?secure=0PnGmN5WgkaXliQBV6f29g,1639013031&m=19&d=4&_tid=8421035',
            path: 'https://image-us.24h.com.vn/upload/4-2019/images/2019-10-04/1570150468-913-untitled-12-1570098063-width650height855.jpg',
            name: 'Tất cả vì em với cặp dú bự'
            
        }
        ,
        {
            src: './assets/filmABBC/p2.mp4',
            path: 'https://i.pinimg.com/736x/6e/2e/04/6e2e043b822a3496432dd9b92c5a3abd.jpg',
            name: 'U là trời, ngon qóa vậy Rio-Chan'
            
        }
        ,
        {
            src: 'https://fvs.io/redirector?token=bHVSM2piYkdVOFF3aE5PMzdmVE4vcm1SZUNaN0duY0MyYk85SGpOaVBPV2RoWVB3SHZZOWNtenFZd3ZEaENWWnZheG5haTZoalZyZGZrZjhkOHdvam96d0t1SFNzSnkycUJ2a29ENWRaQUpvV090a005aWNoZTJodXJzMVZmSFBaa3llam16d3hKK0paNHM4WEVzTWViS2RyN2xzd25xaVZDaz06RjB1M2dETGI3YVRLM21kS0svd2RnUT092PyK',
            path: 'https://superstarsbio.com/wp-content/uploads/2019/10/Lana-Rhoades-height.jpg',
            name: 'Không thể ngăn cản con cu này'
            
        }
        ,
        {
            src: 'https://video.fhph1-2.fna.fbcdn.net/v/t66.36240-6/10000000_618455705957951_125417533242997657_n.mp4?_nc_cat=101&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE2MzYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=U1vahTzXiS0AX8uHSgw&rl=1636&vabr=1091&_nc_ht=scontent-bru2-1.xx&oh=88d255042cbcd683fd18c5a98d6f1e74&oe=61A8E266',
            path: 'https://i.redd.it/gqrt4edj7pz31.jpg',
            name: 'Cô bé thiên thần dú bự'
            
        }
        ,
        {
            src: './assets/filmABBC/p1.mp4',
            path: 'https://www.myconfinedspace.com/wp-content/uploads/2019/04/Kylie-Page-720x1082.jpg',
            name: 'Quá tuyệt vời với tuyệt kĩ bú ciuu'
        },
        {
            src: 'https://video.fhph1-1.fna.fbcdn.net/v/t66.36240-6/10000000_117343074087362_8851286757269677216_n.mp4?_nc_cat=108&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjI3NDIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=Hen7fcu_FOMAX-MjIeo&rl=2742&vabr=1828&_nc_ht=scontent-frt3-1.xx&oh=efc839d5753db5f352afc6171ab11b35&oe=61A7ECD2',
            path: 'https://64.media.tumblr.com/c149086722ae69caa836957fdf606e5d/tumblr_ofl77xi5Sk1vn43dho1_1280.jpg',
            name: 'Bé xinh sắn làm tình giỏi'
            
        }
        ,
        {
            src: './assets/filmABBC/p2.mp4',
            path: 'https://phantom-marca.unidadeditorial.es/bb8ed6f4ede1f10a240d7ec125f18c48/assets/multimedia/imagenes/2020/09/30/16014432721559.jpg',
            name: 'Tình cờ gặp Idol trên phố'
            
        }
        ,
        {
            src: 'https://fvs.io/redirector?token=bHVSM2piYkdVOFF3aE5PMzdmVE4vcm1SZUNaN0duY0MyYk85SGpOaVBPV2RoWVB3SHZZOWNtenFZd3ZEaENWWnZheG5haTZoalZyZGZrZjhkOHdvam96d0t1SFNzSnkycUJ2a29ENWRaQUpvV090a005aWNoZTJodXJzMVZmSFBaa3llam16d3hKK0paNHM4WEVzTWViS2RyN2xzd25xaVZDaz06RjB1M2dETGI3YVRLM21kS0svd2RnUT092PyK',
            path: 'https://data.ibtimes.sg/en/full/28858/kylie-jenner.jpg?w=736',
            name: 'Cái giá cho việc lẳng lơ'
            
        }
        ,
        {
            src: 'https://video.fhph1-2.fna.fbcdn.net/v/t66.36240-6/10000000_618455705957951_125417533242997657_n.mp4?_nc_cat=101&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE2MzYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=U1vahTzXiS0AX8uHSgw&rl=1636&vabr=1091&_nc_ht=scontent-bru2-1.xx&oh=88d255042cbcd683fd18c5a98d6f1e74&oe=61A8E266',
            path: 'https://i.pinimg.com/originals/04/56/73/0456737b513a9a80ca0092d2d17a08b2.jpg',
            name: 'Tuyệt kĩ nhấp nhả của Cô nàng vú bự'
            
        }
    ]

};
// btnTrailer.onclick = () => {
//     toastAram();
// }
const zeroEnd = document.querySelector('.zero-end');
const usUkEnd = document.querySelector('.us-uk-end');
function renderContentFilmEnd(name) {
    const urlRenPage = `https://api-betiu.herokuapp.com/api/v1/list-film?page=${numPage}`;
    const urlSearchPage = `https://api-betiu.herokuapp.com/api/v1/search-film?name=${name}`;
    if (!name) {
        loading.style.display = "flex"
        fetch(urlRenPage)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            const htmls = result.items.map(function(item, index) {
                return `<div class="col l-2-4 m-3 c-6 storage-content stoge-content-over" data-index="${index}" onclick=zeroClick("${item.slug}")>
                <div class="description-item-film">
                    ${item.name}
                </div>
                <img src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                </div>`;
            })
            zeroEnd.innerHTML = htmls.join('');
            loading.style.display = "none"
            window.scrollTo(0, 650);
        })
    }else {
        fetch(urlSearchPage)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result && result.status !== false) {
                    const htmls = `<div class="col l-2-4 m-3 c-6 storage-content stoge-content-over" data-index="0" onclick=zeroClick("${result.movie.slug}")>
                    <div class="description-item-film">
                    ${result.movie.name}
                    </div>
                    <img src="${result.movie.poster_url != "" ? result.movie.poster_url : result.movie.thumb_url}" alt="">
                    </div>`;
                zeroEnd.innerHTML = htmls;
                console.log(htmls);
            }else {
                toastAram("Film Not Found. Please confirm correct name film...thanks^^")
            }
        })
    }
}
// function renderContentFilmUsUk() {
//     var htmls = appItemsFilm.filmUsUk.map(function(filmUsUk, index) {
//         return `<div class="col l-2-4 m-3 c-6 storage-content no-hidden-pc" data-index="${index}">
//         <img src="${filmUsUk.path}" alt="">
//         </div>`;
//     })
//     usUkEnd.innerHTML = htmls.join('');
// }
renderContentFilmEnd();
// renderContentFilmUsUk();
const stoItems = document.querySelectorAll('.storage-item');
const stoImg = document.querySelector('.storage-item > img');
const stoOverlay = document.querySelectorAll('.storage-item-overlay');
// handle click on poster film
var currentFilm;
var listNumFilm = document.querySelector('.list-film-num');
const modalPlayFilm = document.querySelector('.storage-body-modal');

function renderNumFilm(items) {
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
        fetch(`https://api-betiu.herokuapp.com/api/v1/search-film?name=${slug}`)
        .then(res => res.json())
        .then(result => {
            dataResource = result;
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
//  -------remove usuk video----------
// usUkEnd.onclick = function (e) {
//     const filmNode = e.target.closest('.storage-content');
//     const storageDesHearder = document.querySelector('.storage-desciption_header');
//     if(filmNode) {
//         currentFilm = Number(filmNode.dataset.index);
//         video.src = appItemsFilm.filmUsUk[currentFilm].src;
//         storageDesHearder.textContent = appItemsFilm.filmUsUk[currentFilm].name;
//         modalPlayFilm.style.display = 'flex'
//         video.play();
//         audio.pause();
//         videoTitle.pause();
//     }
// }
video.onerror = ()=> {
    document.querySelector('#error-video').style.display = 'flex';
}
// handle click close modal film
const btnloseModalFilm = document.querySelector('.storage-body-modal_overlay i');
const overlayModalFilm = document.querySelector('.storage-body-modal_overlay');
// function audioPlay () {
//     setTimeout(() => {
//         audio.play();
//     }, 400)
// }
function videoTitlePlay () {
    if(document.documentElement.clientWidth > 739) {
        // videoTitle.play();
    }
}
btnloseModalFilm.onclick = function () {
    video.pause();
    // audioPlay();
    // videoTitlePlay();
    // videoTitle.muted = false;
    modalPlayFilm.style.display = 'none'
    document.querySelector('#error-video').style.display = 'none';
}
overlayModalFilm.onclick = function () {
    video.pause();
    // audioPlay();
    videoTitlePlay();
    // videoTitle.muted = false;
    modalPlayFilm.style.display = 'none'
    document.querySelector('#error-video').style.display = 'none';
}
// const offset = stoImg.offsetWidth * 3.7;
// storContainer.style.transform = `translateX(-${offset}px)`

// handle click btn film modal

function toastAram (e) {
    let text = "";
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    e ? text = e : text = "Chức năng đang được cập nhật."
    if(toastMain) {
        toast.classList.add('toast', 'toastAram')
        toast.innerHTML = `
            <i class="ti-settings aram"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },4000)
    }
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



const filmSelect = document.querySelectorAll('.film-select');
const subFilm = document.querySelectorAll('.js-sub');
const updateBefore = document.querySelectorAll('.js-update-before');
filmSelect.forEach((filmSelect)=>{
    filmSelect.onclick = function(){
        toastAram();
    }
})
subFilm.forEach((subFilm) => {
    subFilm.onclick = () => {
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
// btnPasss.onclick = function () {
//     if(navPassInput.value === 'thangdeptrai' || navPassInput.value === '0') {
//         videoTitlePlay();
//         $('.pass-input').style.transform = 'translateY(60%)';
//         setTimeout(function(){
//             navPass.style.transform = 'translateY(-100%)';
//         }, 1000)
//         // audio.play();
//     }else {
//         setTimeout(function(){
//             alert('Sai rồi! Hãy thử lại')
//             navPassInput.value = '';
//         }, 500)
//     }
// }
// window.onkeyup = function (e) {
//     if(e.which === 13) {
//         btnPasss.onclick();
//     }
//     if(e.which === 27) {
//         video.pause();
//         // audioPlay();
//         videoTitlePlay();
//         modalPlayFilm.style.display = 'none'
//         document.querySelector('#error-video').style.display = 'none';
//     }
// }
var numPage = 1;
const nextListBtn = document.querySelector('.next-list');
nextListBtn.onclick = () => {
    numPage++;
    renderContentFilmEnd();
}

// audio.loop = true;
// videoTitle.loop = true;
// videoTitle.muted = true;
// videoTitle.controls = false;
// audio.volume = 0.4;


const inputListSearch = document.querySelector('.input-list');
const searchList = document.querySelector('.storage-item_header-content');
var valueSearch;
inputListSearch.onchange = (e) => {
    const varis = e.target.value;
    if (varis !== "" && varis != null ) {
        valueSearch = formatCheckName(varis);
    }

}

function formatCheckName(keyName) {
    keyName = removeAccents(keyName);
    const keySplit = keyName.trim().toLowerCase().split(" ");
    return keySplit.join("-");
}

function removeAccents(keyname) {
    return keyname.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}


searchList.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valueSearch !== "" && valueSearch != null) {
        renderContentFilmEnd(valueSearch)
    }else {
        toastAram("Recheck name film..Haizz")
    }
    inputListSearch.value = "";
})

// edit profile
var modalProfile = document.querySelector('#edit-modal');
var loadingImg = document.querySelector('.loading-img')

var btnSaveProfile = document.querySelector('.edit-profile-btn-save');
var modalEditProfile = document.querySelector('.edit-modal-profile');
var btnEditProfile = document.querySelector('.edit-profile');
var btnCloseProfile = document.querySelector('.edit-profile-btn-close');
var fileUploadAvatar = document.querySelector("#upload-avatar")
var imgUploadAvatar = document.querySelector(".profile-avatar-img")
var profileNameContent = document.querySelector('.profile-name-content');
var profilePhoneContent = document.querySelector('.profile-phone-content');
var editAvatarLink;

btnEditProfile.onclick = () => {
    modalProfile.style.display = 'flex'
    modalEditProfile.style.transform = 'translateY(0)';
    modalEditProfile.style.transition = '4s';
    menuDrop.style.display = "none"
}

btnCloseProfile.onclick = () => {
    modalProfile.style.display = 'none'
}

fileUploadAvatar.addEventListener("change", ev => {
    loading.style.display = "flex"
    const formdata = new FormData()
    formdata.append("image", ev.target.files[0])
    fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
            Authorization: "Client-ID eb9173f09f940b0"
        },
        body: formdata
    }).then(data => data.json()).then(result => {
        loading.style.display = "none"
        imgUploadAvatar.src = result.data.link;
        editAvatarLink = result.data.link;
        toastSuccess("Upload success")
    })
    .catch((er) => {
        loading.style.display = "none"
        toastAram("Faild Upload")
    })
})

function covertUserName(str) {
    const array = [];
    const strNew = str.split(' ');
    const latestItem = strNew.pop()
    array.push(strNew.join(' '))
    array.push(latestItem)
    return array;
}

modalEditProfile.addEventListener('submit', async (e) => {
    e.preventDefault();
    loading.style.display = "flex"
    const userId = sessionStorage.getItem("id");
    const data = {
        firstName: covertUserName(profileNameContent.value)[0],
        lastName: covertUserName(profileNameContent.value)[1],
        phone: profilePhoneContent.value
    }
    if(editAvatarLink != null && editAvatarLink !== "") {
        data.avatar = editAvatarLink;
    }
    fetch(`https://api-betiu.herokuapp.com/api/v1/update/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        toastSuccess("Update Success")
        setTimeout(() => {
            location.reload()
        }, 1000)
    })
    .catch(e => {
        toastAram("Update profile faild. Please try again")
        loading.style.display = "none"
    })
})