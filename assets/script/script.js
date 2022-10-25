const count = ()=>{
    let date = new Date
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();  
    
    document.querySelector('.digital').innerHTML = `${decNumb(hours)}:${decNumb(minutes)}:${decNumb(seconds)}`;
    
    document.querySelector('.p_s').style.transform = `rotate(${-90 + seconds * 6}deg)`
    document.querySelector('.p_m').style.transform = `rotate(${(-90 + minutes * 6) + (seconds * 0.1)}deg)`
    if(hours > 12){hours = hours - 12}
    document.querySelector('.p_h').style.transform = `rotate(${(-90 + hours * 30) + (minutes * 0.5)}deg)`   
}

const decNumb = (num) =>{
    if(num < 10){
        return `0${num}`
    }else{
        return num 
    }
}
let timer = setInterval(count, 1000)
count()
