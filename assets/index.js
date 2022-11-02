const getElById = (id) => document.getElementById(id);
const testform = getElById('testform');

testform.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = testform.elements['book_titles'].value;

  var bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  if (bookFromStorage && bookTitle) {
    localStorage.setItem(
      'book titles',
      storeItem({ bookFromStorage, bookTitle })
    );
    bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  } else if (bookTitle) {
    //incase we need to remove the key from localstorage at refresh or when leaving page
    onbeforeunload = function () {
      localStorage.removeItem('book titles');
    };
    localStorage.setItem('book titles', storeItem({ bookTitle }));
    bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  }

  render(bookFromStorage);
  testform.elements['book_titles'].value = '';
});

function render(bookFromStorage) {
  var h3 = getElById('formH3');
  if (!h3) {
    h3 = document.createElement('h3');
    h3.setAttribute('id', 'formH3');
  }

  h3.innerText = bookFromStorage;
  document.body.appendChild(h3);
}
function storeItem(booksDetails) {
  const { bookFromStorage, bookTitle } = booksDetails;
  return bookFromStorage
    ? JSON.stringify([...bookFromStorage, bookTitle])
    : JSON.stringify([bookTitle]);
}
