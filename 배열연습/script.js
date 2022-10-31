const submitedArray = [];

const form = document.querySelector('form'),
  inputText = form.querySelector('.input_text'),
  inputSubmit = form.querySelector('.input_submit'),
  deleteAll = document.querySelector('.deleteAll'),
  output = document.querySelector('.output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitedArray.push(inputText.value);
  createLiElement(inputText.value);
  inputText.value = '';
});

function createLiElement(value) {
  const li = document.createElement('li');
  li.innerText = value;
  output.appendChild(li);
}

function deleteTodos() {
  deleteAll.addEventListener('click', (event) => {
    event.preventDefault();
    removeLiTag();
    spliceSubmitArray();
  });
}

function spliceSubmitArray() {
  submitedArray.splice(0, submitedArray.length);
}

function removeLiTag() {
  submitedArray.forEach(() => {
    document.querySelector('li').remove();
  });
}

deleteTodos();