import { AbstractComponent } from '../framework/view/abstract-component.js';
import {createElement} from '../framework/render.js'; 


function createFilterBooksTemplate() {
    return (
        `<div>
        <h2>Фильтровать</h2>
            <select id="genre-filter">
                <option value="all">Все</option>
                <option value="Fiction">Художественная</option>
                <option value="Science">Научная</option>
                <option value="Fantasy">Фантастика</option>
                <option value="Biography">Биография</option>
            </select>
        </div>
`
      );
}


export default class FilterBooksComponent extends AbstractComponent{
    #handleClick = null 
  constructor({onClick}){
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template(){
        return createFilterBooksTemplate();
  }

    #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };

}