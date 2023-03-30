const myLibrary = [];
const bookContainer = document.querySelector(".book-area");
const addBookForm = document.querySelector("addBookForm");
const addBookBtn = document.querySelector(".add-book");
const formModal = document.querySelector(".modal");
const formAddBookBtn = document.querySelector(".formBtn");
const formBtnCancel = document.querySelector(".formBtnCancel");

addBookBtn.addEventListener('click', openForm);
formAddBookBtn.addEventListener('click', getBook);
formBtnCancel.addEventListener('click', cancelForm)

function openForm() {
	formModal.classList.add("active");
}

function cancelForm() {
	formModal.classList.remove("active");
}

function getBook() {
	//assign parameters to form inputs and pass it to addBookToLibrary()
	const nTitle = document.querySelector("#Title").value;
  	const nAuthor = document.querySelector("#Author").value;
  	const nPages = document.querySelector("#Pages").value;
  	const nRead = document.querySelector("#isRead");

	if ( nRead.checked ) {
		nRead = "True";
	 } else {
		nRead = "False";
	 }

  	const newBook = new Book(nTitle, nAuthor, nPages, nRead);
  	myLibrary.push(newBook);

  	addBookForm.reset();
	formModal.classList.remove("active");
}

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