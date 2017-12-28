"use strict"

// BOOKS REDUCERS
export function booksReducers(state = {
  books: [{
      _id: 1,
      title: 'this is the book title',
      price: '5',
      description: 'this is the desc'
    },
    {
      _id: 2,
      title: 'this is the 2nd book title',
      price: '8.7',
      description: 'this is the 2nd desc'
    }
  ]
}, action) {
  switch (action.type) {
    case "POST_BOOK":
      // let books = state.books.concat(action.payload);
      // return {books};
      return {
        books: [...state.books, ...action.payload]
      }
      break;

    case "DELETE_BOOK":
      // creates copy of state.books that we can play with to remove unwanted item
      const bookList = [...state.books]
      // indexDelete function sifts through books arr and finds where book id is same as the one we want to delete
      const indexDelete = bookList.findIndex(
        function(book) {
          return book._id === action.payload._id;
        }
      )
      // spread operator saves books as booklist from idx 0 UP TO index Delete, as well as everything after index Delete...essentially cutting out unwanted item without mutating state
      // as an alternative, can also use map.filter (but will not be as performant)
      return {
        books: [...bookList.slice(0, indexDelete), ...bookList.slice(indexDelete + 1)]
      }
      break;

    case "UPDATE_BOOK":
      const newBookList = [...state.books]
      // find index of book we are looking for
      const indexUpdate = newBookList.findIndex(
        function(book) {
          return book._id === action.payload._id;
        }
      )
      // copies data for selected boook and then updates title based on updated info
      const newBookToUpdate = {
        ...newBookList[indexUpdate],
        title: action.payload.title
      }
      console.log("what is the updated book", newBookToUpdate);
      // removes old unupdated data, pastes in all other data
      return {
        books: [...newBookList.slice(0, indexUpdate), newBookToUpdate, ...newBookList.slice(indexUpdate + 1)]
      }

    case "GET_BOOKS":
      return { ...state,
        books: [...state.books]
      }
      break;
  }
  return state
}
