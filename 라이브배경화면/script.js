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
