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
    const bookList = [...state.books]
    // indexDelete function sifts through books arr and finds where book id is same as the one we want to delete
    const indexDelete = bookList.findIndex(
      function(book){
        return book.id === action.payload.id;
      }
    )
    return {books: [...bookList.slice(0,indexDelete),...bookList.slice(indexDelete + 1)]}
    break;
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
})
