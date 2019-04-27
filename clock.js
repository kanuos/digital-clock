
const clock= document.getElementById('clock');


const getMeridian =(hour,mins)=>{
    if(hour>=0 && (hour<=11 && mins<=59))
     return "AM";

     else 
     return "PM";
}

const handleClock=()=>{
    const time= new Date();
    const hour = time.getHours();
    const mins = time.getMinutes();
    const secs= time.getSeconds();
    const am_pm=getMeridian(hour,mins);
    let displayHour=hour;
    if(hour>12){
        displayHour=hour-12;
    }

    const display= `${doubleDigit(displayHour)} : ${doubleDigit(mins)} : ${doubleDigit(secs)} ${am_pm}`;
    
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