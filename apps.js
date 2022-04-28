//Set the date we're counting down to
let countDownDate = new Date('april 29, 2022 15:58:25').getTime();

//update the count down every 1 sec.
let x = setInterval (function() {

    //Get today's date and time
    let now = new Date().getTime();

    //Find the distance between now and the count down date
    let difference = countDownDate - now;

    //Time calculation for days, hours, minutes and seconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    //Output the result in an element with id="countdownTimer"
    document.querySelector("#downCount").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    //If the count down is over, write some text
    if(difference < 0) {
        clearInterval(x);
        document.getElementById('countdownTimer').textContent = "EXPIRED"
    }
}, 1000);


let registerBtn = document.querySelector("#register-btn");
let element = document.querySelector(".modal");
let btnX = document.querySelector(".close");

registerBtn.addEventListener("click", function(){
    element.classList.add("show-modal")
})

btnX.addEventListener ("click", function() {
    element.classList.remove("show-modal")
})