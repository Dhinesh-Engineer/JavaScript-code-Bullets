  
const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);

function runClock(){
  const time=new Date();
  const sec=time.getSeconds()/60;
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;
  hour.style.setProperty('--rotation',hrs*360);
  minute.style.setProperty('--rotation',min*360);
  second.style.setProperty('--rotation',sec*360);

}

runClock();



let ampm = document.getElementById("am-pm");

function displayTime() {
    let datetime = new Date();
    let h = padzero(datetime.getHours());
    let m = padzero(datetime.getMinutes());
    let s = padzero(datetime.getSeconds());

    if (h > 12) {
        h = h - 12; 
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }
    document.getElementById("hh").innerHTML = padzero(h);
    document.getElementById("mm").innerHTML = m;
    document.getElementById("ss").innerHTML = s;
}

function padzero(num) {
    return num<10?"0"+num:num;
    
}

setInterval(displayTime, 500);

