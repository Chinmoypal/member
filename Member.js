// Member.js
// Member constructor function
function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}

// BorrowBook method for Member prototype
Member.prototype.borrowBook = function(book) {
    if (!book.available) {
        console.log(`${book.title} is already borrowed.`);
        return;
    }
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }

    // Mark the book as unavailable and add to borrowedBooks
    book.available = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
};

// Export Member constructor
module.exports = Member;