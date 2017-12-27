"use strict"


// POST A BOOK
export function postBook(book){
  return {
    type:"POST_BOOK",
    payload: book
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