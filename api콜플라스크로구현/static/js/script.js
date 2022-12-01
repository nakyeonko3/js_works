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


// console.log('hello world');

// const submit_form = document.querySelector('.submit_form');
// const sensor_data_div = document.querySelector('.sensor_data_div');

// const init = () => {
//   submit_form.addEventListener('submit', handleSubmit);
//   setInterval(renderSensorData, 1000);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log('handle submit trggered');
//   renderSensorData();
// };

// const getSensorData = () => {
//   return fetch('/getSensorData')
//     .then((response) => response.json())
//     .then((data) => data.sensor_data);
// };

// const renderSensorData = async () => {
//   const sensor_data = await getSensorData();
//   sensor_data_div.innerText = sensor_data;
// };

// const getNowDateTime = () => {
//     const now = new Date();
//     console.log(now);
// }

// init();
