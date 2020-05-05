var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
// setTimeout = in a certain amount of time EXECUTE this action then you're done.
// setInterval = execute this function every time after this amount time
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft = secondsLeft - 1;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();
