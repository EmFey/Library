//Variables
const myLibrary = [];
const bookContainer = document.querySelector(".book-area");
const addBookForm = document.querySelector("addBookForm");
const addBookBtn = document.querySelector(".add-book");
const formModal = document.querySelector(".modal");
const formAddBookBtn = document.querySelector(".formBtn");
const formBtnCancel = document.querySelector(".formBtnCancel");
const formBtnDelete = document.querySelector(".bookDeleteBtn");
const totalBooksElem = document.getElementById("total-books");
const readBooksElem = document.getElementById("read-books");
const unreadBooksElem = document.getElementById("unread-books");

// Function to update the stats
function updateStats() {
  totalBooksElem.textContent = getTotalBooks();
  readBooksElem.textContent = getReadBooksCount();
  unreadBooksElem.textContent = getUnreadBooksCount();
}

//Event Listeners
addBookBtn.addEventListener('click', openForm);
formAddBookBtn.addEventListener('click', addBookToLibrary);
formBtnCancel.addEventListener('click', cancelForm);
formBtnDelete.addEventListener('click', deleteBookFromLibrary);

//Constructors/ Objects
function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function (){
		return `${title} by ${author}, ${pages}, ${read}`;
	}
}


//Functions
function openForm() {
	formModal.classList.add("active");
}

function cancelForm() {
	formModal.classList.remove("active");
}

function deleteBookFromLibrary(book) {
	const index = myLibrary.findIndex((b) => b === book);

	myLibrary.splice(index, 1);
	updateStats();
}

//Adding manual books
//const book1 = new Book("Click Millionaires", "Scott Fox", 288, false);
const book1 = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, true);
const book2 = new Book("Innovators", "Walter Isaacson", 480, true);

myLibrary.push(book1, book2);

function addManualBook() {
    myLibrary.forEach((book) => {
		const bookTile = document.createElement("div");
		bookTile.classList.add("book-tile");

		const image = document.createElement("img");
  		image.src = "images/bookIMG.jfif";

		const title = document.createElement("h1");
		title.classList.add("dynamic");
		title.textContent = book.title;

		const author = document.createElement("p");
		author.textContent = "Author: " + book.author;

		const pages = document.createElement("p");
		pages.textContent = "Pages: " + book.pages;

		const read = document.createElement("p");
		read.textContent = "Read: " + book.read;

		const bookDeleteBtn = document.createElement("button");
		bookDeleteBtn.classList.add("dynamicU");
		bookDeleteBtn.textContent = "Delete";
		bookDeleteBtn.addEventListener("click", () => {
		deleteBookFromLibrary(book);
		bookTile.remove();
	});

		bookTile.appendChild(image);
		bookTile.appendChild(title);
		bookTile.appendChild(author);
		bookTile.appendChild(pages);
		bookTile.appendChild(read);
		bookTile.appendChild(bookDeleteBtn);

		bookContainer.appendChild(bookTile);
	  });
}

addManualBook();

function addBookToLibrary(event) {
  event.preventDefault();

  	// Get the form inputs
  	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
  	const pages = document.querySelector("#pages").value;
  	let read = document.querySelector("#isRead");

	if (read.checked) {
		read = "True";
	} else {
		read = "False";
	}

  	// Create a new Book object
  	const newBook = new Book(title, author, pages, read);

  	// Add the new Book object to the books array
  	myLibrary.push(newBook);

  	// Create a new book tile
	const bookTile = document.createElement("div");
	bookTile.classList.add("book-tile");

	const bookImage = document.createElement("img");
	bookImage.src = "images/bookIMG.jfif";
	bookImage.alt = "Book cover image";

	const bookTitle = document.createElement("h1");
	bookTitle.classList.add("dynamic");
	bookTitle.textContent = newBook.title;

	const bookAuthor = document.createElement("p");
	bookAuthor.textContent = "Author: " + newBook.author;

	const bookPages = document.createElement("p");
	bookPages.textContent = "Pages: " + newBook.pages;

	const bookReadStatus = document.createElement("p");
	bookReadStatus.classList.add("read-status");
	bookReadStatus.textContent = "Read: " + newBook.read;

	const bookDeleteBtn2 = document.createElement("button");
	bookDeleteBtn2.classList.add("dynamicU");
	bookDeleteBtn2.textContent = "Delete";
	bookDeleteBtn2.addEventListener("click", () => {
		deleteBookFromLibrary(newBook);
		bookTile.remove();
		updateStats();
	});

	bookTile.appendChild(bookImage);
	bookTile.appendChild(bookTitle);
	bookTile.appendChild(bookAuthor);
	bookTile.appendChild(bookPages);
	bookTile.appendChild(bookReadStatus);
	bookTile.appendChild(bookDeleteBtn2);

	// Add the new book tile to the book list in the HTML
	bookContainer.appendChild(bookTile);

	// Hide the add book form
	formModal.classList.remove("active");

	updateStats();
}

function getTotalBooks() {
	return myLibrary.length + 2;
}

function getReadBooksCount() {
	return (myLibrary.filter((book) => book.read).length) + 1;
}

function getUnreadBooksCount() {
	const unreadCount = myLibrary.reduce((count, myLibrary) => {
	  if (myLibrary.read == "True") {
		return count + 1;
	  } else {
		return count;
	  }
	}, 0);

	const readCount = myLibrary.length - unreadCount;

	return {
	  unread: unreadCount,
	  read: readCount
	};
}

updateStats();