// main.js
const Book = require('./Book');
const Member = require('./Member');
const PremiumMember = require('./PremiumMember');

// Create several book instances
const book1 = new Book('1984', 'George Orwell');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book4 = new Book('Moby Dick', 'Herman Melville');
const book5 = new Book('Pride and Prejudice', 'Jane Austen');

// Create a regular member and a premium member
const regularMember = new Member('Alice');
const premiumMember = new PremiumMember('Bob');

// Bound function for borrowing a book
const borrowBookBound = regularMember.borrowBook.bind(regularMember, book1);

// Regular member borrowing books
regularMember.borrowBook(book1); // Should be successful
regularMember.borrowBook(book2); // Should be successful
regularMember.borrowBook(book3); // Should be successful
regularMember.borrowBook(book4); // Should fail, limit reached

// Premium member borrowing books
premiumMember.borrowBook(book1); // Should fail, book already borrowed by regularMember
premiumMember.borrowBook(book4); // Should be successful
premiumMember.borrowBook(book5); // Should be successful

// Premium member borrowing more than 5 books
premiumMember.borrowBook(book2); // Should be successful
premiumMember.borrowBook(book3); // Should be successful
premiumMember.borrowBook(book4); // Should reach limit of 5 and stop

// Call the bound function to demonstrate bind
borrowBookBound();