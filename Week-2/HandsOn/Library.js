//Assignment 4
// Library Book Management System
class Book{
    title;
    author;
    pages;
    isAvailable
    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=true
    }
    borrow()
    {
        this.isAvailable=false
    }
    returnBook()
    {
        this.isAvailable=true
    }
    getInfo()
    {
         return `${this.title} by ${this.author} (${this.pages} pages)`
    }
    isLongBook()
    {
        if (this.pages>300){
            return true
        }
        else{
            return false
        }
    }
}
let b1 = new Book("Harry Potter", "J.K. Rowling", 560);
let b2 = new Book("1984", "George Orwell", 256);
let b3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let b4 = new Book("Stranger", "Nikitha", 300);
let b5 = new Book("Inside Beauty", "Cherry", 345);

let library=[b1,b2,b3,b4,b5]
library.forEach(book => {
    console.log(book.getInfo())
});
//ii. Borrow 2 books and show their availability status
b1.borrow()
b3.borrow()
console.log("\nAfter borrowing:");
library.forEach(book =>
  console.log(book.title, "Available:", book.isAvailable));
//iii. Return 1 book and show updated status
b3.returnBook()
console.log("\nAfter returning one book:");
console.log(b1.title, "Available:", b3.isAvailable);

//iv. Count how many books are "long books" (more than 300 pages)
const longbook=library.filter(b=>b.isLongBook()).length
console.log("\nLong books count:", longbook);

// v. List all available books
let availableBooks = library.filter(book => book.isAvailable);
console.log("\nAvailable books:");
availableBooks.forEach(book => console.log(book.title));

