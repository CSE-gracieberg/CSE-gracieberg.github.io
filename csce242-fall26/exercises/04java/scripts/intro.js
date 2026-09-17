document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML ="Hello World";
    e.target.innerHTML="DONE!";
}
document.getElementById("link").onclick = (e) => {
    console.log("link clicked");
}

//styles when the link is clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault();//dont go to link destination
    e.target.classList.add("cool-link");
}

//when button clicked make ball bounce
document.getElementById("ball-btn").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//water plant message based on changed number input
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("plant-image");
    plantImage.classList.remove("hidden");

    if(numDays <= 2){
        pMessage.innerHTML=`No water, lest your plant rest. It's only been ${numDays} day(s)!`;
        plantImage.src="https://dummyimage.com/600x400/71e065/0d3b08&text=Happy+Plant";
    }
    else if(numDays <=5)
    {
        pMessage.innerHTML-`Time to water your plant, its been ${numDays} days!`
        plantImage.src="https://dummyimage.com/600x400/96ab87/0d3b08&text=Thirsty+Plant";
    }
    else if(numDays <=7){
        pMessage.innerHTML-`Your plant is wilting, its been ${numDays} days! Time to water it!`
        plantImage.src="https://dummyimage.com/600x400/a4a86a/0d3b08&text=Wilting+Plant";
    }
    else{
        pMessage.innerHTML-`Your plant has died due to not watering it for ${numDays} days!`
        plantImage.src="https://dummyimage.com/600x400/000000/a6212e&text=Dead+Plant";
    }

   console.log("number of days changed");
}

//counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const start=document.getElementById("start-btn");
const pause = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
pause.disabled=true;
stopBtn.disabled=true;
start.onclick =() =>
{
    countInterval = setInterval(()=>{
        pCount.innerHTML= ++count;
    },500);
    start.disabled=true;
    pause.disabled=false;
    stopBtn.disabled=false;
    console.log("start clicked");
}
pause.onclick =() =>
{
    clearInterval(countInterval);
    console.log("paused");
    start.disabled=false;
    pause.disabled=true;
    stopBtn.disabled=true;
}
stopBtn.onclick =() =>
{
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    start.disabled=false;
    pause.disabled=true;
    stopBtn.disabled=true;
    console.log("stop clicked");
}

//date display
setInterval(()=>{
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const year = today.getFullYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();
    pDisplay.innerHTML = `${hours}:${minutes}:${seconds} ${month}/${day}/${year}`;
}, 1000);

//Toggle Nav
document.querySelector("#toggle-nav").onclick = (e) => {
    console.log("hello");
    document.querySelector("#main-nav ul").classList.toggle("hidden");
  
}

//thermometer
const GOAL = 10000;
document.getElementById("goal").innerHTML = GOAL;

document.getElementById("btn-donation").onclick = () => {
    const userDonation = parseInt(document.getElementById("txt-donation").value);
    const donationP = document.getElementById("donation-msg");
    percent = userDonation / GOAL * 100;
    
    donationP.innerHTML = `You are ${percent.toFixed(1)}% to your goal`;
    document.querySelector(":root").style.setProperty("--donation", percent +"%");

}