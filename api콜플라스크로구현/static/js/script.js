const divElement = document.querySelector('div');
const buttonElement = document.querySelector('button');

let toggle = true;

// fetch('/api/geocode').then((res) => {
//
// });

const handleClick = () => {
  handleToggleClick();
  function getHello() {
    return fetch('/hello').then((response) => response);
  }

  async function test() {
    const data = await getHello();

    const jsObectData = await data.json();

    const img = document.createElement('img');
    img.src = jsObectData.url;

    document.body.appendChild(img);
    sessionStorage.setItem('imgUrl', img.src);
  }
  test();
};

//  fetch('http://localhost:8989/hello')
//     .then((response) => response.json())
//     .then((data) =>

const handleToggleClick = () => {
  if (toggle) {
    divElement.innerText = 'clicked';
    toggle = false;
  } else {
    divElement.innerText = 'unclicked';
    toggle = true;
  }
};

function init() {
  const img = document.createElement('img');
  img.src = sessionStorage.getItem('imgUrl');
  document.body.appendChild(img);
  buttonElement.addEventListener('click', handleClick);
}

init();
