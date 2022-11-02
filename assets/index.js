const getElById = (id) => document.getElementById(id);
const testform = getElById('testform');

testform.addEventListener('submit', (event) => {
  event.preventDefault();
  var bookFromStorage;

  const bookTitle = testform.elements['book_title'].value;

  localStorage.setItem('book title', JSON.stringify(bookTitle));
  bookFromStorage = localStorage.getItem('book title');
  render(bookFromStorage);
  testform.elements['book_title'].value = '';
});

function render(bookFromStorage) {
  const h3 = getElById('formH3') ?? document.createElement('h3');
  h3.setAttribute('id', 'formH3');
  h3.innerText = JSON.parse(bookFromStorage);
  console.log(h3);
  document.body.appendChild(h3);
}
