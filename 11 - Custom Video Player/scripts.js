const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  // other option to use tenerary operator
  // const method = video.paused ? 'play' : 'paused';
  // video[method]();
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
