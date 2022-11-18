// handle click login phone
const btnLogin = document.querySelector('button.btn-form-phone');
const btnRegister = document.querySelector('.js-register');
const btnLoginTer = document.querySelector('.js-login');
const btnLoginGo = document.querySelector('.js-login-go');
const btnRegisterGo = document.querySelector('.js-register-go');
const btnRegisterCounti = document.querySelector('.js-register-counti');
const loginMain = document.querySelector('.form-main');
const loginPhone = document.querySelector('.form-phone');
const loginPhonePass = document.querySelector('.form-phone-password');
const registerPhone = document.querySelector('.form-register-phone');
const registerPhoneVldate = document.querySelector('.form-register-phone-end');
const btnFormCounti = document.querySelector('.btn-form_data');
// get input register phone count
const valueRegisterPhone = document.querySelector('.value-register-phone')
const valueRegisterPass = document.querySelector('.value-register-pass')
const valueRegisterName = document.querySelector('.value-register-repass')
const valueRegisterOtp = document.querySelector('.value-register-otp')
const valueRegisterCode = document.querySelector('.value-register-code')
// get input login phone count
const valueLoginPhone = document.querySelector('.value-login-phone')
const valueLoginPass = document.querySelector('.value-login-pass')
// note swap phone and forget password
const swapPhone = document.querySelector('.js-swap-phone')
const forgetPass = document.querySelector('.js-forget-password')

// handle when click swap phone or forget password
swapPhone.onclick = function () {
    btnLoginTer.onclick();
}
forgetPass.onclick = function () {
    toastAram();
}

// button login used phone
btnLogin.onclick = () => {
    loginMain.classList.remove('on-form');
    registerPhoneVldate.classList.remove('on-form');
    loginPhone.classList.add('on-form');
    const email = localStorage.getItem("email")
    if (email) {
        valueLoginPhone.value = email;
    }
}
// button login countinus when import phone
btnFormCounti.onclick = () => {
    if (valueLoginPhone.value === '') {
        toastError();
    } else {
        loginPhone.classList.remove('on-form');
        loginPhonePass.classList.add('on-form');
    }
}
// button register footer
btnRegister.onclick = () => {
    loginMain.classList.remove('on-form');
    loginPhone.classList.remove('on-form');
    loginPhonePass.classList.remove('on-form');
    registerPhone.classList.add('on-form');
    btnRegister.classList.toggle('on-auth');
    btnLoginTer.classList.toggle('on-auth');
    valueRegisterPass.value = '';
    valueRegisterPhone.value = '';
    valueRegisterName.value = '';
    PreseulAudio.onclick();
    showSound();
}
// button login footer
btnLoginTer.onclick = () => {
    loginPhonePass.classList.remove('on-form');
    registerPhone.classList.remove('on-form');
    registerPhoneVldate.classList.remove('on-form');
    btnLogin.onclick();
    btnRegister.classList.toggle('on-auth');
    btnLoginTer.classList.toggle('on-auth');
}
// button register countinus when import infor
function registerEmails() {
    valueRegisterCode.value = '';
    valueRegisterOtp.value = '';
    if (valueRegisterPhone.value === '' || valueRegisterPass.value === '' || valueRegisterName.value === '') {
        toastError();
        valueRegisterPhone.value = '';
        valueRegisterPass.value = '';
        valueRegisterName.value = '';
    } else {
        registerPhone.classList.remove('on-form');
        registerPhoneVldate.classList.add('on-form');
    }
}
// button register
function registerLatest () {
    if (valueRegisterCode.value !== '2468') {
        toastError();
        valueRegisterCode.value = '';
        valueRegisterOtp.value = '';
    } else {
        toastSuccess();
        btnLoginTer.onclick();
        registerPhoneVldate.classList.remove('on-form');
    }
}

// handle button login
const login = document.querySelector('.form-phone-password a')
const formLoginGoogle = document.querySelector('.btn-form-first')
// btnLoginGo.onclick = () => {
//     if(valueLoginPass.value !== '' && valueLoginPass.value === valueRegisterPass.value && valueLoginPhone.value === valueRegisterPhone.value || valueLoginPhone.value === '1' && valueLoginPass.value === '1') {
//         login.setAttribute('href', 'https://dev-thangnguyen.github.io/betiuplay/index.html')
//     }else if(valueLoginPass.value === ''){
//         setTimeout(() =>{
//             alert('Bạn chưa nhập mật khẩu...')
//         },1000)
//     }else{
//         setTimeout(() => {
//         alert('Số điện thoại hoặc mật khẩu không đúng !')
//         valueLoginPass.value = '';
//         loginMain.classList.add('on-form');
//         loginPhonePass.classList.remove('on-form');
//         }, 1000)
//         }
//     }
formLoginGoogle.onclick = function () {
    toastAram();
}

// Handle function toast message
function toastSuccess() {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast', 'toastSuccess')
        toast.innerHTML = `
            <i class="ti-check"></i>
            <p class="toast-text">Bạn đã đăng kí thành công.</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 4000)
    }
}

function toastError() {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast')
        toast.innerHTML = `
            <i class="ti-lock error"></i>
            <p class="toast-text">Có lỗi xảy ra, vui lòng thử lại.</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 4000)
    }
}
function toastAram() {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast', 'toastAram')
        toast.innerHTML = `
            <i class="ti-settings aram"></i>
            <p class="toast-text">Hệ thống đang bảo trì.</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 4000)
    }
}
//handle music 
const audio = document.querySelector('audio');
const PreseulAudio = document.querySelector('.preseul-btn');
const music = document.querySelector('#music');
//handle radom music
const listMusic = [
    './assets/music/kloi1.mp3',
    './assets/music/kloi2.mp3',
    './assets/music/piano-chil.mp3',
    './assets/music/We Wish You a Merry Christmas.mp3'
]

var indexRandomMusic = Math.floor(Math.random() * listMusic.length);
audio.setAttribute('src', listMusic[3]);
PreseulAudio.onclick = () => {
    audio.load();
    audio.play();
}
audio.loop = true;

function showSound() {
    var htmlMusic = `<i class="fas fa-volume-up music-img"></i>`;
    audio.volume = 0.6;
    setTimeout(() => {
        music.innerHTML = htmlMusic;
        const musicImg = document.querySelector('.music-img')
        musicImg.style.animation = 'toastIn ease 1s'
        musicImg.onclick = function () {
            htmlMusic = `<i class="fas fa-volume-mute music-img"></i>`;
            music.innerHTML = htmlMusic;
            audio.pause();
            music.style.animation = 'toastOut ease 1s 2s forwards'
            setTimeout(function () {
                music.innerHTML = '';
            }, 3000)
        }
    }, 1000)
}




const loading = document.querySelector('#loading')
const apiPostUsers = 'https://api-betiu.herokuapp.com/api/v1/login'

const email = localStorage.getItem("email")

email ? valueLoginPhone.value = email : valueLoginPhone.value = "";

async function loginNow(email, password) {

    loading.style.display = "flex";
    axios({
        method: 'post',
        url: apiPostUsers,
        data: {
            email,
            password
        }
    })
        .then(data => {
            let token = data.data.token;
            let id = data.data.id;
            localStorage.setItem("token", token)
            localStorage.setItem("id", id)
        })
        .then(() => {
            let token = localStorage.getItem("token");
            if (token != "undefined") {
                loading.style.display = "none";
                window.location.href = './filmABC.html'
            }
        })
        .catch((e) => {
            const textError = "Ôi không ! Email hoặc mật khẩu không chính xác. Thử lại nhé"
            // console.log(e);
            // const start = e.response.data.search('<pre>')
            // const end = e.response.data.search('</pre>')
            // let message = e.response.data.slice(start + 5, end);
            toastAram(textError);
            loading.style.display = "none";
        })
}
let emailValue = "";
loginPhonePass.addEventListener('submit', e => {
    e.preventDefault()
    emailValue = valueLoginPhone.value !== "" ? valueLoginPhone.value : emailValue;
    const password = valueLoginPass.value
    loginNow(emailValue, password)
    valueLoginPhone.value = "";
    valueLoginPass.value = "";
})

// tx2.onclick = () => {
//     toastAram("Tính năng đang được bảo trì, thông cảm nhé")
// }

function toastAram(e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast')
        toast.innerHTML = `
            <i class="fa fa-solid fa-bug error"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 8000)
    }
}


// Register



const formLogin = document.querySelector('.form-container-register')
const formEmail = document.querySelector('.value-register-phone')
const formAvatar = document.querySelector('.form-avatar')
const formUserName = document.querySelector('.value-register-otp')
const formPhoneName = document.querySelector('.form-phone-name')
const formAddress = document.querySelector('.form-address')
const formPassword = document.querySelector('.value-register-pass')
const formRestriesPassword = document.querySelector('.value-register-repass')

const alertInput = document.querySelector("#alert input")
const apiVerifyMail = 'https://api-betiu.herokuapp.com/api/v1/verify/send-mail'
// const apiPostUsers = 'http://127.0.0.1:3001/api/v1/create'
// const apiVerifyMail = 'http://127.0.0.1:3001/api/v1/verify/send-mail'
localStorage.clear();

async function verifySendMail(email) {
    loading.style.display = "flex";
    axios({
        method: 'post',
        url: apiVerifyMail,
        params: { email: email }
    })
        .then((data) => {
            console.log(data);
            if (data.status === 200) {
                toastSuccess(`Chúng tôi đã gửi mã xác nhận tới ${email}, cho chúng tôi biết nhé`);
                loading.style.display = "none";
                registerEmails();
            }
        })
        .catch((e) => {
            // console.log(e.response.data);
            // const start = e.response.data.search('<pre>')
            // const end = e.response.data.search('</pre>')
            // let message = e.response.data.slice(start + 5, end);
            toastAram("Ôi không, Email đã được đăng kí rồi :D");
            loading.style.display = "none";
        })
}
formLogin.addEventListener('submit', async e => {
    e.preventDefault()
    if (formPassword.value === formRestriesPassword.value) {
        const data = {
            email: formEmail.value,
        }
        verifySendMail(data.email)
    } else {
        toastAram("Mật khẩu không khớp. Kiểm tra lại đi bà nội")
    }
})

registerPhoneVldate.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = {
        firstName: covertUserName(formUserName.value)[0],
        lastName: covertUserName(formUserName.value)[1],
        email: formEmail.value,
        password: formPassword.value,
        phone: "",
        genMailCode: valueRegisterCode.value
    }
    register(data)
    formUserName.value = "";
    valueRegisterCode.value = "";
})



function toastAram(e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast')
        toast.innerHTML = `
            <i class="fa fa-solid fa-bug error"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 8000)
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

function covertUserName(str) {
    const array = [];
    const strNew = str.split(' ');
    const latestItem = strNew.pop()
    array.push(strNew.join(' '))
    array.push(latestItem)
    return array;
}
var apiCreateuser = "https://api-betiu.herokuapp.com/api/v1/create"
function register(body) {
    loading.style.display = "flex";
    axios({
        method: 'POST',
        url: apiCreateuser,
        data: body
    })
        .then((data) => {
            if (data.status === 200 && data.data.message === "created success") {
                toastSuccess("Bạn đã đang kí thành công. Đăng nhập và trải nghiệm nào");
                setTimeout(() => {
                    loading.style.display = "none";
                    btnLogin.onclick();
                    localStorage.setItem("email", body.email)

                }, 1000)
            }
        })
        .catch((e) => {
            // const start = e.response.data.search('<pre>')
            // const end = e.response.data.search('</pre>')
            // let message = e.response.data.slice(start + 5, end);
            // console.log(e.response.data);
            toastAram("Đã có lỗi xảy ra, vui lòng thử lại nhé");
            loading.style.display = "none";
            formUserName.value = "";
            formAddress.value = "";
            formEmail.value = "";
            formPassword.value = "";
            formAvatar.value = "";
            alertInput.value = "";
            formPhoneName.value = "";
        })
}
