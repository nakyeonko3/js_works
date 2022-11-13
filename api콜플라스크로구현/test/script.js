console.log('hello, world');
function getHello() {
  const url = 'http://localhost:8989/hello';
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json;
    });
}
