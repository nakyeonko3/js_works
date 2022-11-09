const image = new Image();

fetch('https://random.imagecdn.app/500/150').then((response) =>
  console.log(response.url)
);
