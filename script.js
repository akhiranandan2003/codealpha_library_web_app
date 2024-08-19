// Sample Book Data
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", genre: "Fiction", summary: "A story about the Jazz Age in the United States." },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084", genre: "Fiction", summary: "A novel about racial injustice in the American South." }
];

// Function to display books
function displayBooks(bookList) {
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = '';

    bookList.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        
        bookItem.innerHTML = `
            <h3>${book.title} by ${book.author}</h3>
            <p>Genre: ${book.genre}</p>
            <p>ISBN: ${book.isbn}</p>
            <p>${book.summary}</p>
            <button onclick="deleteBook(${index})">Delete</button>
        `;
        bookListContainer.appendChild(bookItem);
    });
}

// Function to add a new book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const genre = document.getElementById('genre').value;
    const summary = document.getElementById('summary').value;

    const newBook = { title, author, isbn, genre, summary };
    books.push(newBook);
    displayBooks(books);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('summary').value = '';
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks(books);
}

// Function to search for books
function searchBooks() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.isbn.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
}

// Event Listeners
document.getElementById('addBookBtn').addEventListener('click', addBook);
document.getElementById('searchBar').addEventListener('input', searchBooks);

// Initial Display
displayBooks(books);
