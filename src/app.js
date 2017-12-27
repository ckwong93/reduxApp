"use strict"

//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


// middleware
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';

// Import ACTIONS
import {addToCart} from './actions/cartActions'
import {postBook, deleteBook, updateBook} from './actions/booksActions'

// Import combined REDUCERS
import reducers from './reducers/index';

// applying middleware will show before and after state when actions are dispatched
const middleware = applyMiddleware(logger)

// STEP 1 create the store
const store = createStore(reducers, middleware);

// store.subscribe(function(){
//   console.log('current state is ', store.getState());
// })

import BooksList from './components/pages/bookslist';
render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);








// STEP 2 create and dispatch actions

// store.dispatch(postBook([{
// id: 1,
// title: 'this is the book title',
// price: '5',
// description: 'this is the desc'
// },
// {
// id: 2,
// title: 'this is the 2nd book title',
// price: '870',
// description: 'this is the 2nd desc'
// }
// ]))
// store.dispatch(deleteBook({id:1}))
//
// store.dispatch(updateBook({
// id:2,
// title: 'updated'}))
//
// store.dispatch(addToCart([{id: 1}]))
