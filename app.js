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

const book1 = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, true);
const book2 = new Book("Innovators", "Walter Isaacson", 480, true);

myLibrary.push(book1, book2);


const bookContainer = document.querySelector(".book-area");


function addBookToLibrary() {
    myLibrary.forEach((book) => {
		const bookTile = document.createElement("div");
		bookTile.classList.add("book-tile");

		const image = document.createElement("img");
  		image.src = "images/bookIMG.jfif";

		const title = document.createElement("h2");
		title.textContent = book.title;

		const author = document.createElement("p");
		author.textContent = "Author: " + book.author;

		const pages = document.createElement("p");
		pages.textContent = "Pages: " + book.pages;

		const read = document.createElement("p");
		read.textContent = "Read: " + book.read;

		bookTile.appendChild(image);
		bookTile.appendChild(title);
		bookTile.appendChild(author);
		bookTile.appendChild(pages);
		bookTile.appendChild(read);

		bookContainer.appendChild(bookTile);
	  });
}

addBookToLibrary();