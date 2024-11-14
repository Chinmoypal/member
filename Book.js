// Book.js
// Book constructor function
function Book(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
}

// Export Book constructor
module.exports = Book;