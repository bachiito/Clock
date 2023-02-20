const secondsHand = document.querySelector(".sec-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

window.addEventListener("resize", setClockHeight);

setClockHeight();
setInterval(setTime, 1000);

function setTime() {
  const now = new Date();

  if (now.getSeconds() === 0) {
  }

  secondsHand.style.rotate = `${now.getSeconds() * 6 + 90}deg`;
  minutesHand.style.rotate = `${now.getMinutes() * 6 + 90}deg`;
  hoursHand.style.rotate = `${now.getHours() * 30 + 90}deg`;
}

function setClockHeight() {
  const clock = document.querySelector(".clock");
  clock.setAttribute("style", `height: ${clock.offsetWidth}px`);
}
