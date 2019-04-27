
const clock= document.getElementById('clock');
let am_pm;

const handleClock=()=>{
    const time= new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let secs= time.getSeconds();
    if(hour>12){
        hour=hour-12;
        am_pm='PM'    
    }
    else{
        am_pm='AM'
    }
    const display= `${doubleDigit(hour)} : ${doubleDigit(mins)} : ${doubleDigit(secs)} ${am_pm}`;
    
    applicableBackground(hour,am_pm);    
    clock.innerText=display;
    
}
const init=()=>{
    
    setInterval(handleClock,1000);
}

function applicableBackground(hours, meridian){
    
    const body= document.querySelector('body');
    
    const night= `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)) ,url(night.jpg)`;
    const evening= `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)) ,url(evening.jpeg)`;
    const morning= `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)) ,url(morning.jpeg)`;
    const otherwise= `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)) ,url(hero.jpeg)`;
    
    if(meridian=='AM'){
        body.style.backgroundImage=morning;
    }
    else{
        if(hours>=3 && hours<=6){
            body.style.backgroundImage=evening;
        }
        else if(hours>6 && hours<11){
            body.style.backgroundImage=night;
        }
        else{
            body.style.backgroundImage=otherwise;
        }
    }
    
    
}


function doubleDigit(num){
    if(num>=0&&num<=9){
       return `0${num}`; 
    }
    return num;
}

init();
document.addEventListener('DOMContentLoaded',init);