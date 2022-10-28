const game_termainal = document.querySelector('.game-terminal');
const start_button = document.querySelector('.start-button');

function init(num) {
  document.addEventListener('click', handleButtonClick);
  function handleButtonClick(event) {
    // event.preventDefault();
    // game_termainal.innerHTML = `<p>게임 시작</p>`;
    const p = document.createElement('p');
    p.innerText = `게임을 시작하겠습니다.`;
    const p2 = document.createElement('p');
    p2.innerText = `게임을 시작하겠습니다.`;
    fragment = document.createDocumentFragment();
    fragment.appendChild(p2);
    game_termainal.appendChild(fragment);
  }
}

init(0);
