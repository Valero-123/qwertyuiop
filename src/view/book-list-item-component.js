import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createBookListTemplate(author, name) {
    return (
        `
        <div class = "book_list_item">
            <p>Название: ${author}</p>
           
        </div>
        `
      );
}


export default class BookListItemComponent extends AbstractComponent{
    #handleClick = null 
  constructor({author, name, id, booksModel}){
    super();
    this.author = author;
    this.name = name;
    this.id = id;

    function a(){
        booksModel.deleteBook({id: this.id});
    }
    this.#handleClick = a;
    //this.element.addEventListener('click', this.#clickHandler);
  }

  get template(){
        return createBookListTemplate(this.author, this.name);
  }

    #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };

}

