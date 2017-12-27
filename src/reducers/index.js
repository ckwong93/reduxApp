"use strict"

import {combineReducers} from 'redux';

// import reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducer'
// here combine the REDUCERS
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
