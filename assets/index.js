const getElById = (id) => document.getElementById(id);
const testform = getElById('testform');

testform.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = testform.elements['book_titles'].value;

  var bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  if (bookFromStorage) {
    localStorage.setItem(
      'book titles',
      storeItem({ bookFromStorage, bookTitle })
    );
    bookFromStorage = JSON.parse(localStorage.getItem('book titles'));
  } else {
    //incase we need to remove the key from localstorage at refresh or when leaving page
    // window.onbeforeunload = function () {
    //   localStorage.removeItem('book titles');
    // };
    localStorage.setItem('book titles', storeItem({ bookTitle }));
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
function storeItem(booksDetails) {
  const { bookFromStorage, bookTitle } = booksDetails;
  return bookFromStorage
    ? JSON.stringify([...bookFromStorage, bookTitle])
    : JSON.stringify([bookTitle]);
}
