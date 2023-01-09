let booksCollection = [];

const setBooks = (books) => {
  localStorage.setItem('Books', JSON.stringify(books));
};

const getBooks = () => {
  const books = JSON.parse(localStorage.getItem('Books'));
  if (books) return books;
  return [];
};

const updatedBooksStorge = (book) => {
  booksCollection = getBooks();
  booksCollection.push(book);
  setBooks(booksCollection);
};

const displayBook = () => {
  const books = getBooks();
  const booksContainer = document.querySelector('.books');
  booksContainer.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    booksContainer.innerHTML += `
        <div class="book">
        <p>${books[i].title}</p>
        <p>${books[i].author}</p>
        <button type="button" onClick= "deleteBook(${i})">Remove</button>
        `;
  }
};

const deleteBook = (bookIndex) => {
  if (bookIndex !== null) {
    const books = getBooks();
    const bookUpdated = books.filter((book, index) => {
      if (index !== bookIndex) return true;
      return null;
    });
    setBooks(bookUpdated);
    displayBook();
  }
};

const addBook = () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const book = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  updatedBooksStorge(book);
  displayBook();
  bookTitle.value = '';
  bookAuthor.value = '';
};

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  deleteBook(-1);
  event.preventDefault();
  addBook();
});

displayBook();
