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
  type:"POST_BOOK",
  payload:
  [{
  id: 3,
  title: 'this is the 3rd book title',
  price: '3.333',
  description: 'this is the desc'
  }
  ]
});
