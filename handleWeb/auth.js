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
const valueRegisterName = document.querySelector('.value-register-name')
const valueRegisterOtp = document.querySelector('.value-register-otp')
const valueRegisterCode = document.querySelector('.value-register-code')
// get input login phone count
const valueLoginPhone = document.querySelector('.value-login-phone')
const valueLoginPass = document.querySelector('.value-login-pass')
// note swap phone and forget password
const swapPhone = document.querySelector('.js-swap-phone')
const forgetPass = document.querySelector('.js-forget-password')

// handle when click swap phone or forget password
swapPhone.onclick = function() {
    btnLoginTer.onclick();
}
forgetPass.onclick = function() {
    toastAram();
}

// button login used phone
btnLogin.onclick = () => {
    loginMain.classList.remove('on-form');
    loginPhone.classList.add('on-form');
    valueLoginPhone.value = valueRegisterPhone.value;
}
// button login countinus when import phone
btnFormCounti.onclick = () => {
    loginPhone.classList.remove('on-form');
    loginPhonePass.classList.add('on-form');
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
btnRegisterCounti.onclick = () => {
    valueRegisterCode.value = '';
    valueRegisterOtp.value = '';
    if(valueRegisterPhone.value === '' || valueRegisterPass.value === '' || valueRegisterName.value === ''){
        toastError();
        valueRegisterPhone.value = '';
        valueRegisterPass.value = '';
        valueRegisterName.value = '';
    }else {
        registerPhone.classList.remove('on-form');
        registerPhoneVldate.classList.add('on-form');
    }
}
// button register
btnRegisterGo.onclick = () => {
    if(valueRegisterCode.value !== '1997') {
        toastError();
        valueRegisterCode.value = '';
        valueRegisterOtp.value = '';
    }else {
        toastSuccess();
        btnLoginTer.onclick();
        registerPhoneVldate.classList.remove('on-form');
    }
}

// handle button login
const login = document.querySelector('.form-phone-password a')
const formLoginGoogle = document.querySelector('.btn-form-first')
btnLoginGo.onclick = () => {
    if(valueLoginPass.value !== '' && valueLoginPass.value === valueRegisterPass.value && valueLoginPhone.value === valueRegisterPhone.value) {
        login.setAttribute('href', '../index.html')
    }else if(valueLoginPass.value === ''){
        setTimeout(() =>{
            alert('Bạn chưa nhập mật khẩu...')
        },1000)
    }else{
        setTimeout(() => {
        alert('Số điện thoại hoặc mật khẩu không đúng !')
        valueLoginPass.value = '';
        loginMain.classList.add('on-form');
        loginPhonePass.classList.remove('on-form');
        }, 1000)
        }
    }
formLoginGoogle.onclick = function () {
    toastAram();
}

// Handle function toast message
function toastSuccess () {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast', 'toastSuccess')
        toast.innerHTML = `
            <i class="ti-check"></i>
            <p class="toast-text">Bạn đã đăng kí thành công.</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },4000)
    }
}

function toastError () {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast')
        toast.innerHTML = `
            <i class="ti-lock error"></i>
            <p class="toast-text">Có lỗi xảy ra, vui lòng thử lại.</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },4000)
    }
}
function toastAram () {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast', 'toastAram')
        toast.innerHTML = `
            <i class="ti-settings aram"></i>
            <p class="toast-text">Hệ thống đang bảo trì.</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },4000)
    }
}
