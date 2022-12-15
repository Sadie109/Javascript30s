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

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
console.log(this.dataset);
video.currentTime += parseFloat(this.dataset.skip)
}


function handleRangeUpdate() {
  console.log(this.value);
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));