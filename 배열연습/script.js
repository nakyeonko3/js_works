const submit_array = [];

const form = document.querySelector('form'),
  input_text = form.querySelector('.input_text'),
  input_submit = form.querySelector('.input_submit'),
  button = document.querySelector('button'),
  output = document.querySelector('.output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submit_array.push(input_text.value);
  input_text.value = '';
});

function printOutput(num) {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const fragment = document.createDocumentFragment();
    submit_array.forEach((item) => {
      const li = document.createElement('li');
      li.id = ++num;
      li.innerText = item;
      fragment.appendChild(li);
    });
    output.appendChild(fragment);
    button.remove();
  });
}

printOutput(0);
