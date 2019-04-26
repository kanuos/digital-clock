

const handleClock=()=>{
    const time= new Date();
    const clock= document.getElementById('clock');
    
    const hour = time.getHours();
    const mins = time.getMinutes();
    const secs= time.getSeconds();
    
    const display= `${hour} : ${mins} : ${secs}`;
    
    clock.innerText=display;
    
}

setInterval(handleClock,1000);