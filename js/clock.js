const clock = document.querySelector("h2#clock");
const clockTitle = document.querySelector(".js-clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${hours}:${minutes}:${seconds}`   ;

}

getClock(); //웹사이트가 시작되자마자 시계를 호출하고 
setInterval(getClock, 1000);//1초에 한번씩 실행


