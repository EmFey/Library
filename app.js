class Book {
	constructor(title, author, pages, read) {
	  this.title = title;
	  this.author = author;
	  this.pages = pages;
	  this.read = read;
	}
  
	info() {
	  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
	}
  }
  
  class Library {
	constructor() {
	  this.books = [];
	  this.bookContainer = document.querySelector(".book-area");
	  this.addBookForm = document.querySelector("addBookForm");
	  this.addBookBtn = document.querySelector(".add-book");
	  this.formModal = document.querySelector(".modal");
	  this.formAddBookBtn = document.querySelector(".formBtn");
	  this.formBtnCancel = document.querySelector(".formBtnCancel");
	  this.formBtnDelete = document.querySelector(".bookDeleteBtn");
	  this.totalBooksElem = document.getElementById("total-books");
	  this.readBooksElem = document.getElementById("read-books");
	  this.unreadBooksElem = document.getElementById("unread-books");
  
	  this.addBookBtn.addEventListener("click", () => this.openForm());
	  this.formAddBookBtn.addEventListener("click", (event) =>
		this.addBookToLibrary(event)
	  );
	  this.formBtnCancel.addEventListener("click", () => this.cancelForm());
	}
  
	openForm() {
	  this.formModal.classList.add("active");
	}
  
	cancelForm() {
	  this.formModal.classList.remove("active");
	}
  
	deleteBookFromLibrary(book) {
	  const index = this.books.findIndex((b) => b === book);
	  this.books.splice(index, 1);
	  this.updateStats();
	}
  
	addBookToLibrary(event) {
	  event.preventDefault();
  
	  // Get the form inputs
	  const title = document.querySelector("#title").value;
	  const author = document.querySelector("#author").value;
	  const pages = document.querySelector("#pages").value;
	  const read = document.querySelector("#isRead").checked;
  
	  // Create a new Book object
	  const newBook = new Book(title, author, pages, read);
  
	  // Add the new Book object to the books array
	  this.books.push(newBook);
  
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
	  bookReadStatus.textContent = "Read: " + (newBook.read ? "True" : "False");
  
	  const bookDeleteBtn2 = document.createElement("button");
	  bookDeleteBtn2.classList.add("dynamicU");
	  bookDeleteBtn2.textContent = "Delete";
	  bookDeleteBtn2.addEventListener("click", () => {
		this.deleteBookFromLibrary(newBook);
		bookTile.remove();
		this.updateStats();
	  });
  
	  bookTile.appendChild(bookImage);
	  bookTile.appendChild(bookTitle);
	  bookTile.appendChild(bookAuthor);
	  bookTile.appendChild(bookPages);
	  bookTile.appendChild(bookReadStatus);
	  bookTile.appendChild(bookDeleteBtn2);
  
	  // Add the new book tile to the book list in the HTML
	  this.bookContainer.appendChild(bookTile);
  
	  // Hide the add
  