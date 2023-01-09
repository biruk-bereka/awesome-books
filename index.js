let booksCollection = [];

const setBooks = (books) => {
  localStorage.setItem("Books", JSON.stringify(books));
};

const getBooks = () => {
  const books = JSON.parse(localStorage.getItem("Books"));
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
  const booksContainer = document.querySelector(".books");
  booksContainer.innerHTML = "";
  books.forEach((book,index) => {
    const bookContainer = document.createElement("div");
    const title = document.createElement("p");
    title.innerText = book.title;
    const author = document.createElement("p");
    author.innerText = book.author;
    const removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.type = "button";
    removeButton.onclick = () => deleteBook(index);
    removeButton.innerText = "Remove";
    bookContainer.append(title, author, removeButton);
    booksContainer.append(bookContainer);
  });
};

const addBook = () => {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
  };
  updatedBooksStorge(book);
  displayBook();
  bookTitle.value = "";
  bookAuthor.value = "";
}

const deleteBook = (bookIndex) => {}

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});

displayBook();
