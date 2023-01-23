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

let dropdownToggle = document.querySelector(".dropdown-toggle")
let logImg = document.querySelector(".log-img")
let logName = document.querySelector(".log-name")
let btnLoginMobile = document.querySelector(".btn-login_link")
let menuDrop = document.querySelector(".dropdown-menu")
var btnSaveProfile = document.querySelector('.edit-profile-btn-save');
var modalEditProfile = document.querySelector('.edit-modal-profile');
var btnEditProfile = document.querySelector('.edit-profile');
var btnCloseProfile = document.querySelector('.edit-profile-btn-close');
var fileUploadAvatar = document.querySelector("#upload-avatar")
var imgUploadAvatar = document.querySelector(".profile-avatar-img")
var profileNameContent = document.querySelector('.profile-name-content');
var profilePhoneContent = document.querySelector('.profile-phone-content');
var modalProfile = document.querySelector('#edit-modal');

var editAvatarLink;

function startt () {
    const isSuccess = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    if(isSuccess === "undefined" || isSuccess == null) {
        window.location.href = './auth.html'
    }
    else {
        var obj = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${isSuccess}`
            }
          }
        fetch(`https://service-betiu.onrender.com/api/v1/read/${userId}`, obj)
        .then(res => res.json())
        .then(result => {
            logImg.src = result.avatar;
            imgUploadAvatar.src = result.avatar;
            profileNameContent.value = `${result.firstName} ${result.lastName}`;
            profilePhoneContent.value = result.phone || "";
            logName.textContent = `Hello, ${result.firstName} ${result.lastName}`;
        })
        .catch(e => {
            toastAram("Có lỗi xảy ra, thử lại")
        })
    }
}

dropdownToggle.onclick = () => {
    if (menuDrop.style.display === "none" || menuDrop.style.display == "") {
        menuDrop.style.display = "flex"
    }else {
        menuDrop.style.display = "none"
    }
}

const doc = document.querySelector('.log-out')
doc.addEventListener('click', button)
function button () {
    localStorage.clear()
    startt()
}

startt()
//profile
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
    const userId = localStorage.getItem("id");
    const data = {
        firstName: covertUserName(profileNameContent.value)[0],
        lastName: covertUserName(profileNameContent.value)[1],
        phone: profilePhoneContent.value
    }
    if(editAvatarLink != null && editAvatarLink !== "") {
        data.avatar = editAvatarLink;
    }
    fetch(`https://service-betiu.onrender.com/api/v1/update/${userId}`, {
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
slidesPrev.onclick = function () {
    indexSlideCurrent--;
    if (indexSlideCurrent < 0) {
        indexSlideCurrent = slideNodes.length - 1;
    }
    slideNodes[indexSlideCurrent].onclick()
}
//slide next slide
slidesNext.onclick = function () {
    indexSlideCurrent++;
    if (indexSlideCurrent >= slideNodes.length) {
        indexSlideCurrent = 0;
    }
    slideNodes[indexSlideCurrent].onclick()
}
// mouse move event
var startClient;
var endClient;
slides.onmousedown = function (e) {
    startClient = e.clientX;
}
slides.onmouseup = function (e) {
    endClient = e.clientX;
    if (startClient - endClient > 50) {
        slidesNext.onclick();
    }
    else if (startClient - endClient <= -50) {
        slidesPrev.onclick();
    }
}

// touch mobile move event
slides.ontouchstart = function (e) {
    startClient = e.touches[0].clientX;
}
slides.ontouchend = function (e) {
    endClient = e.changedTouches[0].clientX;
    const aboutClient = startClient - endClient;
    if (aboutClient > 50) {
        slidesNext.onclick();
    }
    else if (aboutClient < -50) {
        slidesPrev.onclick();
    }
}


// Handle scroll window scroll event on visibility
const header = $('header')
const scrollFirstPage = $('.arrow-mobile-first-page')
window.addEventListener('scroll', changeStatus)
function changeStatus() {
    var scrollBrowser = window.scrollY;
    if (scrollBrowser >= 15) {
        header.classList.add('change-header')
    } else {
        header.classList.remove('change-header')
    }
    if (scrollBrowser >= 6700) {
        scrollFirstPage.style.visibility = 'visible'
    } else {
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
    if (testBtnMenu && testArrowBtn) {
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
            age: '16+',
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
            id: 13,
            src: './assets/trailer/BÚP BÊ SÁT NHÂN (Child’s Play 2019) - Official Trailer - KC- 26.07.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/10-minutes-gone_web_posterLandscape_cab03e38e008e1d2e8fc107abf04f457.jpg',
            name: '10 Phút Sống Còn',
            category: 'Kinh dị',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 14,
            src: './assets/trailer/ZOOTOPIA- PHI VỤ ĐỘNG TRỜI - Trailer D -Chú Lười-.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/monster-hunter_web_posterLandscape_f220b5bf0eb4fa8030e8d5d4160ca4a9.jpg',
            name: 'Thợ Săn Quái Vật',
            category: 'Gia Đình',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 15,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer – Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/moana_web_posterLandscape_c540d02b72f9e5ac2bf6bb6108b70c4a.jpg',
            name: 'Hành Trình Của Moana',
            category: 'Hành Động',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 16,
            src: './assets/trailer/DORAEMON ĐÔI BẠN THÂN [STAND BY ME] (TRAILER) - ĐÔRÊMON THÁI NGUYÊN.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/50-first-dates_web_posterLandscape_c6fe039db02d12360d5e894c57bfdd10.jpg',
            name: '50 Lần Hẹn Đầu Tiên',
            category: 'Gia Đình',
            duration: '95 phút',
            age: '16+',
            premidum: 'Đặc biệt',
        },
        {
            id: 17,
            src: './assets/trailer/NHỮNG KẺ VÔ CẢM - TRAILER CHÍNH THỨC - KHỞI CHIẾU 06.11.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/black-swan_web_posterLandscape_e271cae64ac421a1f327f596cef44b89.jpg',
            name: 'Thiên Nga Đen',
            category: 'Kinh dị',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 18,
            src: './assets/trailer/TRỤC QUỶ TRAILER _ DKKC_ 04.12.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/vacacy-2-the-first-cut_web_posterLandscape_474c9e3e2ad22cc1baeeea04835ea17d.jpg',
            name: 'Nhà Trọ Kinh Hoàng 2',
            category: 'Kinh dị',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 19,
            src: './assets/trailer/John Wick_ Chapter 3 - Parabellum (2019 Movie) New Trailer – Keanu Reeves, Halle Berry.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/shining-girl_web_posterLandscape_055f6c4b541f5305a37af37851e30e8b.jpg',
            name: 'Cô Nàng Lấp Lánh',
            category: 'Hành động',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 20,
            src: './assets/trailer/Life Of Pi - Trailer - MegaStar Cineplex.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/bo-gia_web_posterLandscape_67433b6efe0a2565ec972063216134dc.jpg',
            name: 'Bố Già',
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
            age: '16+',
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
            age: '16+',
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
    blockbusterFilm: [
        {
            id: 1,
            src: "./assets/trailer/Marvel Studios' Avengers- Infinity War - Official Trailer.mp4",
            path: './assets/img/poster-film/endgame.jpg',
            name: 'Avengers: Endgame',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 2,
            src: './assets/trailer/Transformers- The Last Knight Official Trailer 1 (2017) - Michael Bay Movie.mp4',
            path: './assets/img/poster-film/The-Last-Knight-New-Banner-03 (1).jpg',
            name: 'Transformers 3',
            category: 'Viễn Tưởng',
            duration: '95 phút',
            age: '18+',
            premidum: 'Đặc biệt',
        },
        {
            id: 3,
            src: './assets/trailer/SPIDER-MAN- FAR FROM HOME - Official Teaser Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/spider-man-homecoming_web_posterLandscape_89e703b5ff9ed401a44cc32747c5b72c.jpg',
            name: 'Người Nhện: Trở Về Nhà',
            category: 'Viễn Tưởng',
            duration: '148 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 4,
            src: './assets/trailer/Transformers- The Last Knight Official Trailer 1 (2017) - Michael Bay Movie.mp4',
            path: './assets/img/poster-film/tranformer5.jpg',
            name: 'Transformers 5: Kỵ sĩ cuối cùng',
            category: 'Viễn Tưởng',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 5,
            src: './assets/trailer/Annabelle- Tạo Vật Quỷ Dữ - Official Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-last-witch-hunter_web_posterLandscape_646ca2643cfaaed1aaefd1d4500d6111.jpg',
            name: 'Chiến Binh Săn Phù Thủy',
            category: 'Viễn Tưởng',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 6,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/doctor-strange-2016_web_banner_31c2a78f1a132f8be1cbd7540dd14e67.jpg',
            name: 'Phù Thủy Tối Thượng',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 7,
            src: './assets/trailer/NGÀY ĐẪM MÁU- XÁC SỐNG TRỖI DẬY - Trailer chính thức.mp4',
            path: './assets/img/poster-film/wonderWoman.jpg',
            name: 'WonderWoman 2017',
            category: 'Viễn Tưởng',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 8,
            src: './assets/trailer/Phim kinh dị -LUẬT QUỶ- Trailer.mp4',
            path: './assets/img/poster-film/loki.jpg',
            name: 'Loki: vị thần lừa lọc',
            category: 'Viễn Tưởng',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 9,
            src: './assets/trailer/Phim kinh dị -LUẬT QUỶ- Trailer.mp4',
            path: './assets/img/poster-film/nguoidepVaquaiVat.jpg',
            name: 'Người Đẹp Và Quái Vật',
            category: 'Viễn Tưởng',
            duration: '142 phút',
            age: '18+',
            premidum: 'Đặc biệt',
        },
        {
            id: 10,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- THÍ NGHIỆM XÁC SỐNG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/hellboy_web_posterLandscape_79ad6e42eb2e6d15f16546f0f0150df0.jpg',
            name: 'Cậu Bé Địa Ngục',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 11,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/faster_web_posterLandscape_ef34fabb5489349106dd66b6208dfb34.jpg',
            name: 'Thần Tốc',
            category: 'Viễn Tưởng',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 12,
            src: './assets/trailer/(Official Trailer) PATIENTS OF A SAINT- THÍ NGHIỆM XÁC SỐNG - KC- 28.02.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/x-men-first-class_web_posterLandscape_7a90038a7a8451b8a03caad281162b13.jpg',
            name: 'X-Men: Thế Hệ Đầu',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 13,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/power-rangers_web_posterLandscape_c4fb3604e7c14e84bf0cd54c219de145.jpg',
            name: 'Năm Anh Em Siêu Nhân',
            category: 'Viễn Tưởng',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 14,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/a-x-l_web_posterLandscape_ecbd5d6c9035d119bb15f30c0e320f07.jpg',
            name: 'A-X-L Chú Chó Robot',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 15,
            src: './assets/trailer/Deadpool Official Trailer #2 (2016) - Ryan Reynolds Movie HD.mp4',
            path: 'https://cdna.artstation.com/p/assets/images/images/000/344/552/large/enrique-martin-funez-deadpool-mi-dibujo.jpg?1418083572',
            name: 'Deadpool 1',
            category: 'Viễn Tưởng',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 16,
            src: './assets/trailer/Deadpool Official Trailer #2 (2016) - Ryan Reynolds Movie HD.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/deadpool_web_posterLandscape_fbcc52e4e89e3626f4575a1fa8e3c91d.jpg',
            name: 'Deadpool 2',
            category: 'Viễn Tưởng',
            duration: '95 phút',
            age: '16+',
            premidum: 'Đặc biệt',
        },
        {
            id: 17,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/sin-city_web_posterLandscape_9f09fd1bbdebf4032af49e6baadf9585.jpg',
            name: 'Thành Phố Tội Lỗi',
            category: 'Viễn Tưởng',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 18,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/next_web_posterLandscape_d0dce882be10b4b6b0a17cbae03b984b.jpg',
            name: 'Người Nhìn Thấy Tương Lai',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 19,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/ghost-rider_web_posterLandscape_8b0b0fda30cc2c7638cedf802626d272.jpg',
            name: 'Ma Tốc Độ',
            category: 'Viễn Tưởng',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 20,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/maleficent_web_posterLandscape_c5397aadc5ac2f8086b6eaa7d407f243.jpg',
            name: 'Tiên Hắc Ám',
            category: 'Viễn Tưởng',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        }
    ],
    actFilm: [
        {
            id: 1,
            src: './assets/trailer/TRÙM, CỚM VÀ ÁC QUỶ - MAIN TRAILER - Khởi chiếu toàn quốc ngày 31.05.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-gangster-the-cop-the-devil_web_posterLandscape_1bcfbf2c8b5d766ef64ea4b122fed640.jpg',
            name: 'Trùm, Cớm Và Ác Quỷ',
            category: 'Hành động',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 2,
            src: './assets/trailer/VỤ CƯỚP TRONG TÂM BÃO - OFFICIAL TRAILER - 30.03.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-hurricane-heist_web_posterLandscape_99b464e8ead5a445a5fd73a4934222bb.jpg',
            name: 'Vụ Cướp Trong Tâm Bão',
            category: 'Hành động',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 3,
            src: './assets/trailer/THẦN CHẾT - OFFICIAL TRAILER - 04.05.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/death-wish_web_posterLandscape_582c343edc2d494d76d80deacb26d915.jpg',
            name: 'Thần Chết',
            category: 'Hành động',
            duration: '148 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 9,
            src: './assets/trailer/Phim Hành Động -PHI VỤ TIỀN GIẢ- Trailer 02.11.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/project-gutenberg_web_posterLandscape_43ffcfb86ca0328e30bd76e18e57ad6a.jpg',
            name: 'Phi Vụ Tiền Giả',
            category: 'Hành động',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 5,
            src: './assets/trailer/THẦN CHẾT - OFFICIAL TRAILER - 04.05.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/destruction-los-angeles_web_posterLandscape_f854e692be4276ff41ecc4a3a108cce2.jpg',
            name: 'Tàn Phá Los Angeles',
            category: 'Hành động',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 6,
            src: './assets/trailer/Phim hành động - Atomic Blonde _ Điệp Viên Báo Thù- Trailer.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-hitmans-bodyguard_web_posterLandscape_8f16b3c8ff210f3a797419a0fdf9e59a.jpg',
            name: 'Vệ Sĩ Sát Thủ',
            category: 'Hành động',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 7,
            src: './assets/trailer/GĂNG TƠ TÁI XUẤT - Main Trailer - Khởi chiếu- 28.12.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/unstoppable-2019_web_posterLandscape_9c4a89f01956904688de85c8c4d94288.jpg',
            name: 'Găng Tơ Tái Xuất',
            category: 'Hành động',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 9,
            src: './assets/trailer/Deepwater Horizon- Thảm Họa Giàn Khoan - Trailer 1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/deepwater-horizon_web_posterLandscape_c995c067cf0cc6998b763222ad2d17fa.jpg',
            name: 'Thảm Họa Giàn Khoan',
            category: 'Hành động',
            duration: '142 phút',
            age: '18+',
            premidum: 'Đặc biệt',
        },
        {
            id: 8,
            src: './assets/trailer/Phim Hành Động Hài -Oceans 8-  Trailer 22.06.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/brothers-in-arms_web_posterLandscape_1f729196e943844b2a09563ccfcac120.jpg',
            name: 'Băng Cướp Say Xỉn',
            category: 'Hành động',
            duration: '95 phút',
            age: '16+',
            premidum: 'Đặc biệt',
        },
        {
            id: 10,
            src: './assets/trailer/Deepwater Horizon- Thảm Họa Giàn Khoan - Trailer 1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-real-fast-and-furious_web_posterLandscape_ad628c4015c329a06de12bc81bf12f7d.jpg',
            name: 'Quá Nhanh Quá Nguy Hiểm',
            category: 'Hành động',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 11,
            src: './assets/trailer/Phim Hành Động -PHI VỤ TIỀN GIẢ- Trailer 02.11.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/shock-wave_web_posterLandscape_5e74acab50ca05a8587c7ac8555bc878.jpg',
            name: 'Sóng Dữ',
            category: 'Hành động',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 12,
            src: './assets/trailer/VỤ CƯỚP TRONG TÂM BÃO - OFFICIAL TRAILER - 30.03.2018.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/stranger_web_posterLandscape_cc625a40d6f94e306a9f1338b2d740fb.jpg',
            name: 'Khu Rừng Bí Mật',
            category: 'Hành động',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        },
        {
            id: 13,
            src: './assets/trailer/Phim hành động hay- The Transporter -Người vận chuyển  Trailer #1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-transporter-refueled_web_posterLandscape_d15fc498eda289ce12f600021c84fe41.jpg',
            name: 'Người Vận Chuyển 4',
            category: 'Hành động',
            duration: '90 phút',
            age: '13+',
            premidum: 'Cao cấp',
        },
        {
            id: 14,
            src: './assets/trailer/Phim hành động hay- The Transporter -Người vận chuyển  Trailer #1.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/fury_web_posterLandscape_d1f586f4b0d3326b8013474363ed341a.jpg',
            name: 'Cuồng Nộ',
            category: 'Hành động',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao cấp',
        },
        {
            id: 15,
            src: './assets/trailer/LAKE PLACID- LEGACY Official Trailer (2018) Horror Movie.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/30-minutes-or-less_web_posterLandscape_bf89b20ab91a00870294fd244ea3cd98.jpg',
            name: '30 Phút Hoặc Ít Hơn',
            category: 'Hành động',
            duration: '132 phút',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 16,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/hanna_web_posterLandscape_6ff6067c92293d6f16af6d0836a6f878.jpg',
            name: 'Hanna Bí Ẩn',
            category: 'Hành động',
            duration: '95 phút',
            age: '16+',
            premidum: 'Đặc biệt',
        },
        {
            id: 17,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-tower_web_posterLandscape_f8476ca7b079e3b807d781f3cea7d71f.jpg',
            name: 'Tháp Lửa',
            category: 'Hành động',
            duration: '85 phút',
            age: '19+',
            premidum: 'Cao cấp',
        },
        {
            id: 18,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/three-musketeers_web_posterLandscape_7b5ec00662827ce858e12f11e6e2d619.jpg',
            name: 'Ba Chàng Lính Ngự Lâm',
            category: 'Hành động',
            duration: '120 phut',
            age: '21+',
            premidum: 'Đặc biệt',
        },
        {
            id: 19,
            src: './assets/trailer/(Official Trailer) MẸ QUỶ - KC- 19.06.2020.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/the-punisher-war-zone_web_posterLandscape_def9b3d35bf054eca51ca1b22174beec.jpg',
            name: 'Kẻ Trừng Phạt 2: Vùng Chiến Sự',
            category: 'Hành động',
            duration: '30 Tập',
            age: '18+',
            premidum: 'Cao cấp',
        },
        {
            id: 20,
            src: './assets/trailer/(Official Trailer) CHUYỆN KINH DỊ LÚC NỬA ĐÊM - JANGLY MAN - KC- 09.08.2019.mp4',
            path: 'https://assets.glxplay.io/images/w400/title/elite-squad-2008_web_posterLandscape_4d4b142a7b1fd40d115867e00f5c2075.jpg',
            name: 'Cảnh Sát Tinh Nhuệ',
            category: 'Hành động',
            duration: '120 phut',
            age: '7+',
            premidum: 'Cao Cấp',
        }
    ],

    filmContent: [
        {
            src: './assets/trailer/ĐẲNG CẤP THÚ CƯNG 2 - TRAILER LỒNG TIẾNG - KC- 07.06.2019.mp4',
            path: './assets/img/poster-film/end.jpg',
            name: 'Đẳng Cấp Thú Cưng 2'
        },
        {
            src: './assets/trailer/Scream - Official Trailer (2022 Movie).mp4',
            path: './assets/img/poster-film/end1.jpg',
            name: 'Scream II'

        }
        ,
        {
            src: './assets/trailer/Khách Sạn Huyền Bí - Official Trailer - DKKC tại CGV-  27.08.2021.mp4',
            path: './assets/img/poster-film/end2.jpg',
            name: 'Khách sạn huyền bí'

        }
        ,
        {
            src: './assets/trailer/LARVA - SEASON 4 TRAILER - NEW LARVA - LARVA Official.mp4',
            path: './assets/img/poster-film/end3.jpg',
            name: 'Lavar Đảo Hoang'

        }
        ,
        {
            src: './assets/trailer/DORAEMON ĐÔI BẠN THÂN [STAND BY ME] (TRAILER) - ĐÔRÊMON THÁI NGUYÊN.mp4',
            path: './assets/img/poster-film/end4.jpg',
            name: 'DORAEMON ĐÔI BẠN THÂN'

        }
        ,
        {
            src: './assets/trailer/Demon Slayer - Kimetsu no Yaiba - The Movie- Mugen Train Official Trailer.mp4',
            path: './assets/img/poster-film/end5.jpg',
            name: 'Kimetsu no Yaiba - The Movie'

        }
        ,
        {
            src: './assets/trailer/Phim hoạt hình -RICHARD THE STORK _ VẸT CÒ PHIÊU LƯU KÝ- trailer.mp4',
            path: './assets/img/poster-film/end6.jpg',
            name: 'Vẹt Cò phiêu lưu ký'

        }
        ,
        {
            src: './assets/trailer/Annabelle- Tạo Vật Quỷ Dữ - Official Trailer.mp4',
            path: './assets/img/poster-film/end7.jpg',
            name: 'Annabelle- Tạo Vật Quỷ Dữ'

        }
        ,
        {
            src: './assets/trailer/Duck Duck Goose - Ngỗng Vịt Phiêu Lưu Ký - Trailer.mp4',
            path: './assets/img/poster-film/end8.jpg',
            name: 'Ngỗng Vịt Phiêu Lưu Ký'

        }
        ,
        {
            src: './assets/trailer/Phim -Cậu Vàng- Teaser Trailer - KC 08.01.2021.mp4',
            path: './assets/img/poster-film/end9.jpg',
            name: 'Cậu Vàng'

        }
        ,
        {
            src: './assets/trailer/Chú Khủng Long Tốt Bụng - Trailer Chính Thức.mp4',
            path: './assets/img/poster-film/end10.jpg',
            name: 'Chú Khủng Long Tốt Bụng'

        }
        ,
        {
            src: './assets/trailer/A DOG NAMED PALMA ★ Russian movie trailer 2021.mp4',
            path: './assets/img/poster-film/end11.jpg',
            name: 'Chú Chó PalMa'

        }
        ,
        {
            src: './assets/trailer/The Call Of The Wild- Tiếng Gọi Nơi Hoang Dã - Legend.mp4',
            path: './assets/img/poster-film/end15.jpg',
            name: 'Tiếng Gọi Nơi Hoang Dã'

        }
        ,
        {
            src: './assets/trailer/The Call Of The Wild- Tiếng Gọi Nơi Hoang Dã - Legend.mp4',
            path: './assets/img/poster-film/end13.jpg',
            name: 'Tiếng Gọi Nơi Hoang Dã'

        }
        ,
        {
            src: './assets/trailer/Walking With Dinosaurs - Dạo Bước Cùng Khủng Long - Trailer E.mp4',
            path: './assets/img/poster-film/end14.jpg',
            name: 'Dạo Bước Khủng Long'

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
const resultSearchFilm = document.querySelector('.result')
function renderContentFilmEnd(name, filter) {
    const urlSearchPage = `https://service-betiu.onrender.com/api/v1/search-film-tes?name=${name}`;
    if (!name && !filter) {
        fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=phim-thuyet-minh&subCategoryId=kinh-di&country&year`)
            .then(res => res.json())
            .then((result) => {
                var htmls = result.pageProps.data.items.map(function (item, index) {
                    return `<div class="col l-2-4 m-3 c-6 storage-content storage-content-filter" data-index="${index}" onclick=zeroClick("${item.slug}")>
                                <p class="description-item-film">
                                    ${item.name}
                                </p>
                                <div class="item-film-shadow"></div>
                                <img lazy data-src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                            </div>`;
                })
                zeroEnd.innerHTML = htmls.join('');
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
                lazyLoadImgs()
                loading.style.display = "none"
            })
    }
    else if(filter) {
        loading.style.display = "flex"
        fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=${filter.categoryId}&subCategoryId=${filter.subCategoryId}&country=${filter.country}&year`)
        .then(res => res.json())
        .then(result => {
            if(result && result.pageProps.data.items != null && result.pageProps.data.items.length > 0) {
                const htmls = result.pageProps.data.items.map(function (item, index) {
                    return `<div class="col l-2-4 m-3 c-6 storage-content storage-content-filter" data-index="${index}" onclick=zeroClick("${item.slug}")>
                                <p class="description-item-film">
                                    ${item.name}
                                </p>
                                <div class="item-film-shadow"></div>
                                <img lazy data-src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                            </div>`;
            })
            zeroEnd.innerHTML = htmls.join('');
            resultSearchFilm.textContent = "Kết quả lọc được.."
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
            lazyLoadImgs()
            v.style.display = "none"
            v1.style.display = "none"
            v2.style.display = "none"
            v3.style.display = "none"
            loading.style.display = "none"

            }else {
                toastAram("Không tìm thấy phim cho kết quả lọc của bạn, thử lại nhé..")
                loading.style.display = "none"
            }
        })
        .catch(e => {
            toastAram("Có vẻ đã gặp vẫn đề, retry lại page nhé.")
            loading.style.display = "none"
        })
    }
    else {
        loading.style.display = "flex"
        fetch(urlSearchPage)
        .then(res => res.json())
        .then(result => {
            if(result && result.pageProps.data.items != null && result.pageProps.data.items.length > 0) {
                const htmls = result.pageProps.data.items.map(function (item, index) {
                    return `<div class="col l-2-4 m-3 c-6 storage-content storage-content-filter" data-index="${index}" onclick=zeroClick("${item.slug}")>
                                <p class="description-item-film">
                                    ${item.name}
                                </p>
                                <div class="item-film-shadow"></div>
                                <img lazy data-src="https://img.ophim.cc/uploads/movies/${item.poster_url != "" ? item.poster_url : item.thumb_url}" alt="">
                            </div>`;
            })
            zeroEnd.innerHTML = htmls.join('');
            resultSearchFilm.textContent = "Kết quả tìm kiếm được.."
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
            lazyLoadImgs()
            v.style.display = "none"
            v1.style.display = "none"
            v2.style.display = "none"
            v3.style.display = "none"
            loading.style.display = "none"

            }else {
                toastAram("Không tìm thấy phim, hãy nhập chính xác tên phim và thử lại..")
                loading.style.display = "none"
            }
        })
        .catch(e => {
            toastAram("Có vẻ đã gặp vẫn đề, retry lại page nhé.")
            loading.style.display = "none"
        })
    }
}
renderContentFilmEnd();


const storContainer = document.querySelector('.storage-items');
const storContainer1 = document.querySelector('.storage-items-1');
const storContainer2 = document.querySelector('.storage-items-2');
const storContainer3 = document.querySelector('.storage-items-3');
const loading = document.querySelector('#loading')
loading.style.display = "flex"
setTimeout(() => {
    toastSuccess("Đang tải một số cấu hình. Vui lòng đợi giây lát.")
}, 2000)
function renderFilm() {
    loading.style.display = "flex"
    fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=phim-vietsub&subCategoryId=hai-huoc&country&year`)
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
            lazyLoadImgs()
            loading.style.display = "none"

        })
}
function renderFilm1() {
    loading.style.display = "flex"
    fetch(`https://service-betiu.onrender.com/api/v1/filter-film?categoryId=phim-sap-chieu&subCategoryId=&country&year`)
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
            lazyLoadImgs()
            loading.style.display = "none"
        })
}

// handle click on poster film
var currentFilm;
var listNumFilm = document.querySelector('.list-film-num');

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
    loading.style.display = "flex"
    const storageDesHearder = document.querySelector('.storage-desciption_header');
    const email = localStorage.getItem("email") || "";
    fetch(`https://service-betiu.onrender.com/api/v1/search-film?name=${slug}&email=${email}`)
        .then(res => res.json())
        .then(result => {
            dataResource = result;
            renderNumFilm(result.episodes[0].server_data);
            storageDesHearder.textContent = result.movie.name;
            modalPlayFilm.style.display = 'flex'
            const hls1 = new Hls();
            loading.style.display = "none"
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
        .then(() => {
            fetch(`https://service-betiu.onrender.com/api/v1/notification-admin?email=${email}`, { method: "POST" })
            .then(res => res.json())
            .then(result => true)
            .catch(() => {
                return false;
            })
        })
        .catch(e => {
            return false;
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

function renderFilm2() {
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
            lazyLoadImgs()
            loading.style.display = "none"
        })
}
function renderFilm3() {
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
    if (filmNode) {
        currentFilm = Number(filmNode.dataset.index);
        video.src = appItemsFilm.actFilm[currentFilm].src;
        storageDesHearder.textContent = appItemsFilm.actFilm[currentFilm].name;
        modalPlayFilm.style.display = 'flex'
        video.play();
        btnModalTrailer.onclick();
    }
}
// zeroEnd.onclick = function (e) {
//     const filmNode = e.target.closest('.storage-content');
//     const storageDesHearder = document.querySelector('.storage-desciption_header');
//     if (filmNode) {
//         currentFilm = Number(filmNode.dataset.index);
//         video.src = appItemsFilm.filmContent[currentFilm].src;
//         storageDesHearder.textContent = appItemsFilm.filmContent[currentFilm].name;
//         modalPlayFilm.style.display = 'flex'
//         video.play();
//         btnModalTrailer.onclick();
//     }
// }
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
    if (e.which == 27) {
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
btnPrevFilm[0].onmouseover = function () {
    iconPrev[0].style.fontSize = '3rem'
}
btnPrevFilm[0].onmouseout = function () {
    iconPrev[0].style.fontSize = '2rem'
}
btnNextFilm[0].onmouseover = function () {
    iconNext[0].style.fontSize = '3rem'
}
btnNextFilm[0].onmouseout = function () {
    iconNext[0].style.fontSize = '2rem'
}
// horrorFilm
btnPrevFilm[1].onmouseover = function () {
    iconPrev[1].style.fontSize = '3rem'
}
btnPrevFilm[1].onmouseout = function () {
    iconPrev[1].style.fontSize = '2rem'
}
btnNextFilm[1].onmouseover = function () {
    iconNext[1].style.fontSize = '3rem'
}
btnNextFilm[1].onmouseout = function () {
    iconNext[1].style.fontSize = '2rem'
}
// blockBusketFilm
btnPrevFilm[2].onmouseover = function () {
    iconPrev[2].style.fontSize = '3rem'
}
btnPrevFilm[2].onmouseout = function () {
    iconPrev[2].style.fontSize = '2rem'
}
btnNextFilm[2].onmouseover = function () {
    iconNext[2].style.fontSize = '3rem'
}
btnNextFilm[2].onmouseout = function () {
    iconNext[2].style.fontSize = '2rem'
}
// actFilm
btnPrevFilm[3].onmouseover = function () {
    iconPrev[3].style.fontSize = '3rem'
}
btnPrevFilm[3].onmouseout = function () {
    iconPrev[3].style.fontSize = '2rem'
}
btnNextFilm[3].onmouseover = function () {
    iconNext[3].style.fontSize = '3rem'
}
btnNextFilm[3].onmouseout = function () {
    iconNext[3].style.fontSize = '2rem'
}
// newFilm  click prev-next
btnNextFilm[0].onclick = function () {
    if (index < (3.94)) {
        index++;
        if (index == 4) {
            index = 3.94
            btnNextFilm[0].style.display = 'none';
        }
        storContainer.style.transform = `translateX(-${offset * 4 * index}px)`;
        btnPrevFilm[0].style.display = 'block';
    }
}

btnPrevFilm[0].onclick = function () {
    if (index > (0)) {
        if (index === 3.94) {
            index = 4
        }
        index--;
        if (index == 0) {
            btnPrevFilm[0].style.display = 'none';
        }
        storContainer.style.transform = `translateX(-${offset * 4 * index}px)`;
        btnNextFilm[0].style.display = 'block';
    }
}
// horrorFilm click prev-next
btnNextFilm[1].onclick = function () {
    if (index1 < (3.94)) {
        index1++;
        if (index1 == 4) {
            index1 = 3.94
            btnNextFilm[1].style.display = 'none';
        }
        storContainer1.style.transform = `translateX(-${offset * 4 * index1}px)`;
        btnPrevFilm[1].style.display = 'block';
    }
}

btnPrevFilm[1].onclick = function () {
    if (index1 > (0)) {
        if (index1 === 3.94) {
            index1 = 4
        }
        index1--;
        if (index1 == 0) {
            btnPrevFilm[1].style.display = 'none';
        }
        storContainer1.style.transform = `translateX(-${offset * 4 * index1}px)`;
        btnNextFilm[1].style.display = 'block';
    }
}
// blockbusterFilm click prev-next
btnNextFilm[2].onclick = function () {
    if (index2 < (3.94)) {
        index2++;
        if (index2 == 4) {
            index2 = 3.94
            btnNextFilm[2].style.display = 'none';
        }
        storContainer2.style.transform = `translateX(-${offset * 4 * index2}px)`;
        btnPrevFilm[2].style.display = 'block';
    }
}

btnPrevFilm[2].onclick = function () {
    if (index2 > (0)) {
        if (index2 === 3.94) {
            index2 = 4
        }
        index2--;
        if (index2 == 0) {
            btnPrevFilm[2].style.display = 'none';
        }
        storContainer2.style.transform = `translateX(-${offset * 4 * index2}px)`;
        btnNextFilm[2].style.display = 'block';
    }
}
// actFilm click prev-next
btnNextFilm[3].onclick = function () {
    if (index3 < (3.94)) {
        index3++;
        if (index3 == 4) {
            index3 = 3.94
            btnNextFilm[3].style.display = 'none';
        }
        storContainer3.style.transform = `translateX(-${offset * 4 * index3}px)`;
        btnPrevFilm[3].style.display = 'block';
    }
}

btnPrevFilm[3].onclick = function () {
    if (index3 > (0)) {
        if (index3 === 3.94) {
            index3 = 4
        }
        index3--;
        if (index3 == 0) {
            btnPrevFilm[3].style.display = 'none';
        }
        storContainer3.style.transform = `translateX(-${offset * 4 * index3}px)`;
        btnNextFilm[3].style.display = 'block';
    }
}

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

function toastAram(e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast', 'toastAram')
        const msg = e ? e : "Chức năng đang được cập nhật"
        toast.innerHTML = `
            <i class="ti-settings aram"></i>
            <p class="toast-text">${msg}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 4000)
    }
}

const filmSelect = document.querySelectorAll('.film-select');
const updateBefore = document.querySelectorAll('.js-update-before');
filmSelect.forEach((filmSelect) => {
    filmSelect.onclick = function () {
        toastAram();
    }
})
updateBefore.forEach((updateBefore) => {
    updateBefore.onclick = function () {
        toastAram();
    }
})

function lazyLoadImgs() {
    // duyệt tất cả tấm ảnh cần lazy-load
    const lazyImages = document.querySelectorAll('[lazy]');

    // chờ các tấm ảnh này xuất hiện trên màn hình
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            // tấm ảnh này đã xuất hiện trên màn hình
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                const src = lazyImage.dataset.src;

                lazyImage.tagName.toLowerCase() === 'img'
                    // <img>: copy data-src sang src
                    ? lazyImage.src = src

                    // <div>: copy data-src sang background-image
                    : lazyImage.style.backgroundImage = "url(\'" + src + "\')";

                // copy xong rồi thì bỏ attribute lazy đi
                lazyImage.removeAttribute('lazy');

                // job done, không cần observe nó nữa
                observer.unobserve(lazyImage);
            }
        });
    });

    // Observe từng tấm ảnh và chờ nó xuất hiện trên màn hình
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

const inputListSearch = document.querySelector('.input-list');
const searchList = document.querySelector('.storage-item_header-content');
var valueSearch;
inputListSearch.onchange = (e) => {
    const varis = e.target.value;
    if (varis !== "" && varis != null ) {
        valueSearch = varis;
    }
}

searchList.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valueSearch !== "" && valueSearch != null) {
        renderContentFilmEnd(valueSearch)
    }else {
        toastAram("Chưa nhập tên phim mà kiếm cái gì gì?")
    }
    inputListSearch.value = "";
})

//filter film
const formFilterFilm = document.querySelector(".form-filter-film");
const valueFilter1 = document.querySelector("#form-filter-film-1");
const valueFilter2 = document.querySelector("#form-filter-film-2");
const valueFilter3 = document.querySelector("#form-filter-film-3");
formFilterFilm.addEventListener("submit", (e) => {
  e.preventDefault();
  const filter = {
    categoryId: valueFilter1.options[valueFilter1.selectedIndex].value,
    subCategoryId: valueFilter2.options[valueFilter2.selectedIndex].value,
    country: valueFilter3.options[valueFilter3.selectedIndex].value
  }
  renderContentFilmEnd(null, filter)
})

const v = document.querySelector(".v")
const v1 = document.querySelector(".v1")
const v2 = document.querySelector(".v2")
const v3 = document.querySelector(".v3")

// handle click on poster film
var currentFilm;
var listNumFilm = document.querySelector('.list-film-num');

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