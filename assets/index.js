const getElById = (id) => document.getElementById(id);
const testform = getElById('testform');

testform.addEventListener('submit', (event) => {
  const bookTitle = testform.elements['book_titles'].value;
  const titleKey = 'book titles';
  var bookFromStorage = getItem(titleKey);

  event.preventDefault();

  if (bookFromStorage && bookTitle) {
    localStorage.setItem(titleKey, storeItem({ bookFromStorage, bookTitle }));
    bookFromStorage = getItem(titleKey);
  } else if (bookTitle) {
    //incase we need to remove the key from localstorage at refresh or when leaving page
    onbeforeunload = () => localStorage.removeItem(titleKey);
    localStorage.setItem(titleKey, storeItem({ bookTitle }));
    bookFromStorage = getItem(titleKey);
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

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
