console.log('hello, world!');

const blackDiv = document.querySelector('.black-div');
const whiteDiv = document.querySelector('.white-div');
const buttonsDiv = document.querySelector('.buttons-div');
const section = document.querySelector('.section');

section.addEventListener('click', (event) => handleClick(event));

const handleClick = (event) => {
  const {
    target: { className },
  } = event;
  console.log(className);
  hello(한국말인사);
};

function 한국말인사(이름, domElement) {
  domElement.innerText = `${이름} 안녕!`;
}

const hello = (func) => {
  func('고낙연', whiteDiv);
};
