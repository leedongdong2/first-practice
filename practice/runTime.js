const Clockbox = document.querySelector(".topGrid");
const ColckrunTime = Clockbox.querySelector(".runTime");

function getTIme(){
    const date = new Date();
    let hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = date.getMinutes();
    ColckrunTime.innerText = `${hours >= 12 ? `AM ${hours}` : `PM ${hours}`}:${minutes < 10 ? `0${minutes}` : minutes}` 

}





function printClock(){
getTIme();
setInterval(getTIme,1000);
}
printClock();