const iwantTODO = [
  ' 맛있는 거 치킨 피자 시켜 먹기',
  '500만원 내놔',
  '영화 보기',
  '침대에 누워서 음악 듣기',
  '밖에 나가서 뛰고 오기',
  '친구들이랑 놀러 가기',
<<<<<<< HEAD
  '파파존스 피자 사먹기',
];
=======
  '파파존스 피자 사먹기'
]
>>>>>>> 49cfa1686d9ed449d2e9092bceb1b56b0c8353b6
const button = document.querySelector('button'),
  span = document.querySelector('span');

for (let i = 0; i < 14; i++) {
  iwantTODO.push('더 열심히 웹개발 공부하기');
}

function mathRandomInt(max) {
  return Math.floor(Math.random() * max);
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  span.innerText = iwantTODO[mathRandomInt(iwantTODO.length)];
});

