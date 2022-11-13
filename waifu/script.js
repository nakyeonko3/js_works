console.log('hello');

const img = document.createElement('img');
fetch('https://api.waifu.pics/sfw/waifu')
  .then((response) => response.json())
  .then((data) => (img.src = data.url))
  .then(document.body.appendChild(img));

fetch('https://api.waifu.pics/sfw/waifu')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  const img2 = document.createElement('img')
// async function putImg() {
//   await get_animes().then(console.log(data));
//   const img = document.createElement('img');
//   img.src = urlSrc;
//   document.body.appendChild(img);
// }

// console.log(get_animes());
// putImg();
