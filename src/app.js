"use strict"
import {createStore} from 'redux';

// STEP 3 define reducers
const reducer = function(state={books: []},action){
  switch(action.type){
    case "POST_BOOK":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {books: [...state.books,...action.payload]}
    break;

    case "DELETE_BOOK":
    // creates copy of state.books that we can play with to remove unwanted item
    const bookList = [...state.books]
    // indexDelete function sifts through books arr and finds where book id is same as the one we want to delete
    const indexDelete = bookList.findIndex(
      function(book){
        return book.id === action.payload.id;
      }
    )
    // spread operator saves books as booklist from idx 0 UP TO index Delete, as well as everything after index Delete...essentially cutting out unwanted item without mutating state
    // as an alternative, can also use map.filter (but will not be as performant)
    return {books: [...bookList.slice(0,indexDelete),...bookList.slice(indexDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    const newBookList = [...state.books]
    const indexUpdate = newBookList.findIndex(
      function(book){
        return book.id === action.payload.id;
      }
    )
    const newBookToUpdate = {
      ...newBookList[indexUpdate],
      title: action.payload.title
    }
    console.log("what is the updated book",newBookToUpdate);
    return {books: [...newBookList.slice(0,indexUpdate),newBookToUpdate,...newBookList.slice(indexUpdate+1)]}
  }
  return state
}
// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('current state is ', store.getState());
  // console.log('current state is ', store.getState()[1].price)
})
// STEP 2 create and dispatch actions


store.dispatch({
  type:"POST_BOOK",
  payload:
  [{
  id: 1,
  title: 'this is the book title',
  price: '5',
  description: 'this is the desc'
  },
  {
  id: 2,
  title: 'this is the 2nd book title',
  price: '870',
  description: 'this is the 2nd desc'
  }
  ]
});


store.dispatch({
  type:"DELETE_BOOK",
  payload: {id:1}
});

store.dispatch({
  type:"UPDATE_BOOK",
  payload: {
  id:2,
  title: 'updated'}
})
