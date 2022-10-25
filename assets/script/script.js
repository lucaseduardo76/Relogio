const count = ()=>{
    let date = new Date
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(hours < 10){
        hours = `0${hours}`;
    }
    document.querySelector('.digital').innerHTML = `${hours}:${minutes}:${seconds}`;



    document.querySelector('.p_s').style.transform = `rotate(${-90 + seconds * 6}deg)`
    document.querySelector('.p_m').style.transform = `rotate(${-90 + minutes * 6}deg)`

    if(hours > 12){
        hours = hours - 12
    }

    document.querySelector('.p_h').style.transform = `rotate(${(-90 + hours * 30) + (minutes * 0.5)}deg)`
}

setInterval(count, 1000)
count()