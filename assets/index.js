const qsById = (id) => document.getElementById(id);
const form = qsById('testform');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(form.elements['book_title'].value);

  localStorage.setItem('book_title', JSON.stringify(bookTitle));
  render(value);
});

function render(value) {
  const h3 = document.createElement('h3');
  h3.innerText = localStorage.getItem(value);
  const bookTitle = form.elements['book_title'].value;
  document.appendChild(h3);
}
