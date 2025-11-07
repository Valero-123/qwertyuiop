import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createAddBookComponentTemplate() {
    return (
        `<form id="book-form">
            <h2>Добавить новую книгу</h2>
                <input type="text" id="book-title" placeholder="Название книги" required />
                <input type="text" id="book-author" placeholder="Автор" required />
                <select id="book-genre" required>
                    <option value="">Выбрать жанр</option>
                    <option value="Fiction">Художественная</option>
                    <option value="Science">Научная</option>
                    <option value="Fantasy">Фантастика</option>
                    <option value="Biography">Биография</option>
                </select>
                <button class = "add-book-button" type="submit">Добавить книгу</button>
            </form>`
      );
}


export default class AddBookComponent extends AbstractComponent{
  #handleClick = null 
  constructor({onClick}){
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('submit', this.#clickHandler);
  }

  get template(){
        return createAddBookComponentTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}