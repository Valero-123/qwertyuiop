import {books} from '../mock/books.js';
import generateID from '../utils.js'

export default class BookModel{
    #booksData = books;
    #observers = [];

    get books(){
        return this.#booksData;
    }

    getTasksByStatus(status){
        return this.#booksData.filter(task => task.status === status);
    }

    addBook(title, author, genre){
        const newBook = {
            id: generateID(),
            author: author,
            title: title, 
            genre: genre,
        };
        this.#booksData.push(newBook);
        this._notifyObservers();
        return newBook;
    }

    editBook(title, author, genre, oldBookId){
        const newBook = {
            id: generateID(),
            author: author,
            title: title, 
            genre: genre,
        };
        this.#booksData.push(newBook);
        this.#booksData = this.books.filter((x) => x.id !== oldBookId);
        this._notifyObservers();
    }

    deleteBook(id){
        this.#booksData = this.books.filter((x) => x.id !== id.id);
        this._notifyObservers();
    }

    addObserver(observer){
        this.#observers.push(observer);
    }

    removeObserver(observer){
        this.#observers = this.#observers.filter((obs) => obs !== observer);
    }

    _notifyObservers(){
        this.#observers.forEach((observer) => observer());
    }
}