import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createBookListTemplate() {
    return (
        `<div>
            <h2>Книги</h2>
            <ul id="book-list">
            
            </ul>
        </div>
        `
      );
}


export default class BookListComponent extends AbstractComponent{
  #handleClick = null 
  constructor(){
    super();
  }

  get template(){
        return createBookListTemplate();
  }
}