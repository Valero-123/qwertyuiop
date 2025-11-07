import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createAddBookComponentTemplate() {
    return (
        `<form id="book-form">
            <h2>Добавить новую книгу</h2>
                <input type="text" id="book-title" placeholder="Название привычки" required />
                //<input type="text" id="book-author" placeholder="Автор" required />
                <select id="book-genre" required>
                    <option value="">Отметить как</option>
                    <option value="Fiction">Выполнено</option>
                    <option value="Science">Не выполнено</option>
                </select>
                <button class = "add-book-button" type="submit">Добавить привычку</button>
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


