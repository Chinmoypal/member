// PremiumMember.js
const Member = require('./Member');

// PremiumMember constructor function that inherits from Member
class PremiumMember {
    constructor(name) {
        Member.call(this, name); // Inherit properties from Member
        this.specialCollections = true; // Additional property
    }
    // Override borrowBook method for PremiumMember
    borrowBook(book) {
        if (this.borrowedBooks.length >= 5) {
            console.log(`${this.name} cannot borrow more than 5 books.`);
            return;
        }

        // Use Member's borrowBook method with call to reuse functionality
        Member.prototype.borrowBook.call(this, book);
    }
}

// Inherit methods from Member
PremiumMember.prototype = Object.create(Member.prototype);



// Export PremiumMember constructor
module.exports = PremiumMember;