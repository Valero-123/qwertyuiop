import AddBookComponent from "./view/add-book-component.js";
import { RenderPosition, render } from "./framework/render.js";
import FilterBooksComponent from "./view/filter-boooks-component.js";
import BookListComponent from "./view/book-list-component.js";
import BookModel from "./model/book-model.js";
import BookListPresenter from "./presenter/book-list-presenter.js";

const bodyContainer = document.querySelector('.header');
const formContainer = document.querySelector('.book-form');
const filterContainer = document.querySelector('.book-filter');
const listContainer = document.querySelector('.book-list');

const bookListComponent = new BookListComponent();
render(bookListComponent, listContainer, RenderPosition.AFTERBEGIN);

const booksModel = new BookModel();

const taskBoardPresenter = new BookListPresenter({
    boardContainer: bookListComponent, 
    tasksModel: booksModel,
});


const addBookComponent = new AddBookComponent({onClick: handleNewTaskButtonClick});
function handleNewTaskButtonClick(){
    taskBoardPresenter.createTask();
}



render(addBookComponent, formContainer, RenderPosition.AFTERBEGIN);

function handleFilterSelection(){
    taskBoardPresenter.filterSelection();
}
const filterBookComponent = new FilterBooksComponent({onClick: handleFilterSelection});
render(filterBookComponent, filterContainer, RenderPosition.AFTERBEGIN);

taskBoardPresenter.init();