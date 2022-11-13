console.log('hello');
const audio = new Audio('lum.mp3');
const video = document.querySelector('video');

let flag = true;

video.addEventListener('click', () => {
  if (flag === true) {
    audio.play();
    audio.loop = true;
    flag = false;
  } else {
    audio.pause();
    flag = true;
  }
});

setInterval(
  () => {
    if (video.currentTime > 100) {
      console.log('loop start');
      video.currentTime = 10;
    }
  },
  1000,
  'Parameter 1',
  'Parameter 2'
);
