window.addEventListener("resize", setClockHeight);

setClockHeight();

function setClockHeight() {
  const clock = document.querySelector(".clock");
  clock.setAttribute("style", `height: ${clock.offsetWidth}px`);
}
