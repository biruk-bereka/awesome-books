const books = [
    {
        title: "First Book",
        author: "John Doe"
    },
    
    {
        title: "Second Book",
        author: "John Doe"
    }
];

const booksContainer = document.querySelector('.books');

function displayBook(book){
    const bookContainer = document.createElement('div');
    const title = document.createElement('p');
    title.innerText = book.title;
    const author = document.createElement('p');
    author.innerText = book.author;
    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.innerText = 'Remove';
    bookContainer.append(title,author,removeButton);
    booksContainer.append(bookContainer);
}

books.forEach( book => displayBook(book));

