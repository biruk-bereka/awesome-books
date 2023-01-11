class Book {
  constructor() {
    this.booksCollection = [];
  }

  #setBooks = (books) => {
    localStorage.setItem('Books', JSON.stringify(books));
  };

  #getBooks = () => {
    const books = JSON.parse(localStorage.getItem('Books'));
    if (books) return books;
    return [];
  };

  updatedBooksStorge = (book) => {
    this.booksCollection = this.#getBooks();
    this.booksCollection.push(book);
    this.#setBooks(this.booksCollection);
  };

  addBook() {
    const newBook = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    this.updatedBooksStorge(newBook);
    this.displayBook();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  deleteBook = (bookIndex) => {
    if (bookIndex !== null) {
      this.booksCollection = this.#getBooks();
      const bookUpdated = this.booksCollection.filter((book, index) => {
        if (index !== bookIndex) return true;
        return null;
      });
      this.#setBooks(bookUpdated);
      this.displayBook();
    }
  };

  displayBook = () => {
    const books = this.#getBooks();
    const booksContainer = document.querySelector('.books');
    booksContainer.innerHTML = '';
    for (let i = 0; i < books.length; i += 1) {
      booksContainer.innerHTML += `
        <div class="book">
        <p>"${books[i].title}" by ${books[i].author}</p>
        <button type="button" onClick= "deleteBook(${i})">Remove</button>
        `;
    }
  };
}

const book = new Book();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  book.addBook();
});

const deleteBook = (index) => {
  book.deleteBook(index);
};

deleteBook(-1);

book.displayBook();

const bookListLink = document.getElementById('book-lists');
const bookFormLink = document.getElementById('book-form');
const contactInfoLink = document.getElementById('contact-info');
const bookSection = document.querySelector('.books-section');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

bookListLink.addEventListener('click', () => {
  bookListLink.classList.add('active');
  bookFormLink.classList.remove('active');
  contactInfoLink.classList.remove('active');

  bookSection.classList.remove('invisible');
  formSection.classList.add('invisible');
  contactSection.classList.add('invisible');
});

bookFormLink.addEventListener('click', () => {
  bookListLink.classList.remove('active');
  bookFormLink.classList.add('active');
  contactInfoLink.classList.remove('active');
  bookSection.classList.add('invisible');
  formSection.classList.remove('invisible');
  contactSection.classList.add('invisible');
});

contactInfoLink.addEventListener('click', () => {
  bookListLink.classList.remove('active');
  bookFormLink.classList.remove('active');
  contactInfoLink.classList.add('active');
  contactInfoLink.classList.add('active');
  bookSection.classList.add('invisible');
  formSection.classList.add('invisible');
  contactSection.classList.remove('invisible');
});
