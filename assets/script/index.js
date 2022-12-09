'use strict'

const settings = document.querySelector('.settings');
const cookiesSettings = document.querySelector('.cookies-settings');
const cookiesAgree = document.querySelector('.cookies-agree');
const save = document.querySelector('.save');
const agree = document.querySelector('.agree');
const cookesWindow = document.querySelector('.cookies-agree');

const width = document.querySelector('.width');
const height = document.querySelector('.height');
const os = document.querySelector('.os');
const browser = document.querySelector('.browser');

let x = 0;

settings.addEventListener('click', () => {
    cookiesAgree.classList.add('invis');
    cookiesSettings.classList.remove('invis');
});

save.addEventListener('click', () => {
    cookiesSettings.classList.add('invis');
    cookiesAgree.classList.remove('invis');
});


function getBrowser(){
    const lifeTime = new Date;
    lifeTime.setSeconds(lifeTime.getSeconds + 15);
    let expires = "expires=" + lifeTime.toUTCString();
    let sameSite = 'SameSite=None'

    const browserText = `${navigator.userAgent}`;
    const x = browserText.split(' ');

    const y = `Browser = ${x[0]}; ${expires}; ${sameSite}; Secure`
    return y;
}

function getOS(){

}

function setCookies(){

    const lifeTime = new Date;
    lifeTime.setSeconds(lifeTime.getSeconds + 15);
    let expires = "expires=" + lifeTime.toUTCString();
    let sameSite = 'SameSite=None'


    if(browser.checked == true){
        document.cookie = getBrowser();
    }

    if(os.checked == true){
        document.cookie =`OS = ${navigator.appVersion}; ${expires}; ${sameSite}; Secure`;
    }   

    if(width.checked == true){
        document.cookie =`Width = ${screen.width}; ${expires}; ${sameSite}; Secure`
    }  

    if(height.checked == true){
        document.cookie =`Height = ${screen.height}; ${expires}; ${sameSite}; Secure`
    }
}

function getCookies(){
    console.log(document.cookie);
}

function start(){
    if(x === 15){
        cookesWindow.classList.remove('invis')
    }
    x++
};

agree.addEventListener('click',() => {
    x = 0;
    setCookies();
    getCookies();
    cookesWindow.classList.add('invis')
    setInterval(start, 1000);
})

