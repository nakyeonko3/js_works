const iwantTODO = [
  ' 맛있는 거 치킨 피자 시켜 먹기',
  '500만원 내놔',
  '영화 보기',
  '침대에 누워서 음악 듣기',
  '밖에 나가서 뛰고 오기',
  '친구들이랑 놀러 가기',
  '파파존스 피자 사먹기',
];
const num = localStorage.getItem('count');

for (let i = 0; i < 14; i++) {
  iwantTODO.push('더 열심히 웹개발 공부하기');
}

const button = document.querySelector('button'),
  span = document.querySelector('span'),
  divCount = document.querySelector('.div-count-num');

function mathRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function init(num) {
  span.innerText = localStorage.getItem('iwantTODO');
  divCount.innerHTML = `count:${num}`;
  button.addEventListener('click', handleClick);

  function handleClick(event) {
    event.preventDefault();
    changeSpanInnerText();
    chageDivCountInnerHTML();
  }

  function chageDivCountInnerHTML() {
    divCount.innerHTML = `count:${++num}`;
    localStorage.setItem('count', num);
  }

  function changeSpanInnerText() {
    span.innerText = iwantTODO[mathRandomInt(iwantTODO.length)];
    localStorage.setItem('iwantTODO', span.innerText);
  }
}

init(num);

/* 
3Fs

FACT
1) web storm 사이트를 보고 메서드 추출(extract methord), 변수 네이밍 리펙토링을 함ㅎ
2) console.log를 이용해서 버그를 없엠
3) chageDivCountInnerHTML함수는 자기 자신의 실행 횟수를 웹화면에 보여주는 기능을 구현하는데 2시간 이상 시간을 씀


FEELING
web storm 사이트를 보고 메서드 추출은 한 건 잘했음. 
근데 아직 
1) 함수 이름, 변수 이름의 직관성이 부족한 것 같음
함수 이름을 보고 이 함수가 어떤 기능인지 
2) 화살표 함수를 잘 이해를 못하고 있는 것 같음.
3) init 함수 안에 addEventListener랑 html을 추가하거나 수정하는 dom 메서드를 다 넣었는 데 이게 잘한 건지 모르겠음.
4) 내가 만든 것에 대해 개발자 분이 피드백 해줬으면 좋겠다. 
(메서드 추출을 잘했는지, 변수 네이밍 문제는 없는지)

FINDING

1) 함수 이름 작명법, 변수 이름 작명법 구글링 해보고 지금 코드 개선해보기
2) 지금 코드 퍼브릭 리포지토리에 올리기
3) 스터디 기회가 있다면 꼭 하기
4) 로컬 스토리지 기능으로 새로고침을 해도 그대로 있게 하기
5) 다른 사람 코드와 비교해보고 내 코드 개선해보기
6) 주마다 한 번씩만 실행 할 수 있게 하기

*/
