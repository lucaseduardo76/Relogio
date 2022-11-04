"use strict";
const count = () => {
    let date = new Date;
    let milisecond = date.getMilliseconds();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let digitalClock = document.querySelector('.digital');
    let secondsPointer = document.querySelector('.p_s');
    let minutesPointer = document.querySelector('.p_m');
    let hoursPointer = document.querySelector('.p_h');
    digitalClock.innerHTML = `${decNumb(hours)}:${decNumb(minutes)}:${decNumb(seconds)}`;
    secondsPointer.style.transform = `rotate(${(-90 + seconds * 6) + (milisecond * (6 / 1000))}deg)`;
    minutesPointer.style.transform = `rotate(${(-90 + minutes * 6) + (seconds * (1 / 10))}deg)`;
    if (hours > 12) {
        hours = hours - 12;
    }
    hoursPointer.style.transform = `rotate(${(-90 + hours * 30) + (minutes * (5 / 10))}deg)`;
};
const decNumb = (num) => {
    let ret = num < 10 ? `0${num}` : num;
    return ret;
};
const pointersClock = () => {
    for (let n = 0; n <= 60; n++) {
        let clock = document.querySelector('.riscos');
        if (n % 5 !== 0) {
            clock.innerHTML += `<div class="risco" style="transform: rotate(${n * 6}deg)"><div class="ponto b"></div></div>`;
        }
    }
};
let timer = setInterval(count, 50);
count();
pointersClock();
