const todoForm = document.querySelector('.todoForm');

todoForm.addEventListener('click', (event) => {
  const {
    target: { tagName },
  } = event;
  if (tagName !== 'INPUT') return;
  alert('clicked');
});
