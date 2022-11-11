const image = new Image();

fetch('https://random.imagecdn.app/500/150')
  .then((response) => (image.src = response.url))
  .then(document.body.appendChild(image));
// .then(document.body.appendChild(image));
