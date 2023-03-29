const myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function (){
		return `${title} by ${author}, ${pages}, ${read}`;
	}
}

const book1 = new Book("Click Millionaires", "Scott Fox", 288, false);
const book2 = new Book("The 48 Laws of Power", "Robert Greene", 480, true);
const book3 = new Book("Innovators", " Walter Isaacson", 480, true);

myLibrary.push(book1, book2, book3);

/*function addBookToLibrary() {
    // code
}*/

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

console.log(myLibrary)
console.log(theHobbit.info());