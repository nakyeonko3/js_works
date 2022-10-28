const iwantTODO = [
  ' 맛있는 거 치킨 피자 시켜 먹기',
  '몬파라하기',
  '귀칼 유곽편 보기 아니면 다른 애니 봐도 됨',
  '침대에 누워서 노래 듣기',
  '마녀기사안나하기12',
  '마녀기사안나하기3',
  '덩킨 도넛 사먹기',
  '긴나성 trpg, 옥냥이scp 유튜브 영상 보기',
  ' 다크리온 플레이 하기',
  'pixiv, e-hentai망가 야한거 탐닉하기',
];
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

// 회전판이 돌아가서 더 흥분 시킴
// 이전 뽑기 결과가 표시가 됨
// 하루 단위로 뽑기만 가능. 하루에 딱 한 번씩만 뽑기
// 하고 싶은 일을 추가 할 수 있음

// 이걸 변형해서 선택장애 친구들 음식 정해주기 프로그램 만들어보기
// 위치 api랑 별점 api 연동해서 더 나은 것 추천 해주기