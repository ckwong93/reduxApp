"use strict"
import {createStore} from 'redux';
import {addToCart} from './actions/cartActions'
import {postBook, deleteBook, updateBook} from './actions/booksActions'
// Import combined REDUCERS
import reducers from './reducers/index';

// STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function(){
  console.log('current state is ', store.getState());
})
// STEP 2 create and dispatch actions

store.dispatch(postBook([{
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
]))
store.dispatch(deleteBook({id:1}))

store.dispatch(updateBook({
id:2,
title: 'updated'}))

store.dispatch(addToCart([{id: 1}]))
