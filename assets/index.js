const getElById = (id) => document.getElementById(id);
const testform = getElById('testform');

testform.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = testform.elements['book_titles'].value;

  var bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  if (bookFromStorage) {
    localStorage.setItem(
      'book titles',
      JSON.stringify([...bookFromStorage, bookTitle])
    );
    bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  } else {
    window.onbeforeunload = function () {
      localStorage.removeItem('book titles');
    };
    localStorage.setItem('book titles', JSON.stringify([bookTitle]));
    bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  }

  render(bookFromStorage);
  testform.elements['book_titles'].value = '';
});

function render(bookFromStorage) {
  const h3 = getElById('formH3') ?? document.createElement('h3');
  h3.setAttribute('id', 'formH3');
  h3.innerText = bookFromStorage;
  console.log(h3);
  document.body.appendChild(h3);
}
