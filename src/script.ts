const count = ()=>{
    let date = new Date
    let milisecond: number = date.getMilliseconds();
    let seconds: number = date.getSeconds();
    let minutes: number = date.getMinutes();
    let hours: number = date.getHours();  
    
    let digitalClock = document.querySelector('.digital') as HTMLElement;
    let secondsPointer = document.querySelector('.p_s') as HTMLElement;
    let minutesPointer = document.querySelector('.p_m') as HTMLElement;
    let hoursPointer = document.querySelector('.p_h') as HTMLElement;


    digitalClock.innerHTML = `${decNumb(hours)}:${decNumb(minutes)}:${decNumb(seconds)}`;
    
    secondsPointer.style.transform = `rotate(${(-90 + seconds * 6) + (milisecond * (6/1000))}deg)`
    minutesPointer.style.transform = `rotate(${(-90 + minutes * 6) + (seconds * (1/10))}deg)`

    if(hours > 12){hours = hours - 12}

    hoursPointer.style.transform = `rotate(${(-90 + hours * 30) + (minutes * (5/10))}deg)`   
}

const decNumb = (num: number): number | string =>{
    let ret = num < 10 ? `0${num}`:num;
    return ret
}

const pointersClock = (): void => {
    for(let n = 0; n <= 60; n++){
        let clock = document.querySelector('.riscos') as HTMLElement;
        if(n%5 !== 0){
            clock.innerHTML += `<div class="risco" style="transform: rotate(${n * 6}deg)"><div class="ponto b"></div></div>`
        }    
    }
}

let timer = setInterval(count, 50)
count()
pointersClock()

