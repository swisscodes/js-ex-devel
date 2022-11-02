const getElById = (id) => document.getElementById(id);
const form = getElById('testform');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const bookTitle = form.elements['book_title'].value;

  localStorage.setItem('book title', JSON.stringify(bookTitle));
  render();
});

function render() {
  const h3 = document.createElement('h3');
  h3.innerText = localStorage.getItem('book title');
  console.log(h3);
  document.body.appendChild(h3);
}
