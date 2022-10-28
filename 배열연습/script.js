const submit_array = [];

const form = document.querySelector('form'),
  input_text = form.querySelector('.input_text'),
  input_submit = form.querySelector('.input_submit'),
  deleteAll = document.querySelector('.deleteAll'),
  output = document.querySelector('.output');

form.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();
    submit_array.push(input_text.value);
    const li = document.createElement('li');
    li.innerText = input_text.value;
    output.appendChild(li);
    input_text.value = '';
  },
  true
);

function deleteAllTodos() {
  deleteAll.addEventListener('click', (event) => {
    event.preventDefault();
    submit_array.forEach((element) => {
      document.querySelector('li').remove();
    });
    document.querySelector('li').remove();
    submit_array.splice(0, submit_array.length);
  });
}

array.forEach((element) => {});

document.addEventListener();

deleteAllTodos();
