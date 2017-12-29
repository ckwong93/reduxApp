"use strict"
import axios from 'axios';


// GET BOOKS FUNCTION - interacts with MONGODB
export function getBooks(){
  // this function will use send a get request to the database through axios. once completed it will then dispatch the get action creator which will update the store with the database information
  return function(dispatch){
    axios.get("/books")
    .then(function(response){
      dispatch({type:"GET_BOOKS", payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"GET_BOOKS_REJECTED", payload:err})
    })
  }
}

// POST A BOOK - old version without axios
// export function postBook(book){
//   return {
//     type:"POST_BOOK",
//     payload: book
//   }
// }

// POST A BOOK - using axios
export function postBook(book){
  return function(dispatch){
    axios.post("/books", book).then(function(response){
      dispatch({type: "POST_BOOK", payload:response.data})
    }).catch(function(err){
      dispatch({type: "POST_BOOK_REJECTED", payload:"there was an error while posting new book"})
    })
  }
}

// DELETE BOOK`
export function deleteBook(id){
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}


// UPDATE BOOK`
export function updateBook(book){
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
