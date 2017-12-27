"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';


class BooksList extends React.Component{
  componentDidMount(){
    // dispatch an action once compnent loads
    this.props.getBooks();
  }
  render(){
    // console.log("ARE WE ACCESSING THE STATE? : ", this.props.books);
    const booksList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr.id}>
          <BookItem
            id={booksArr.id}
            title={booksArr.title}
            description={booksArr.description}
            price = {booksArr.price}
          />
        </Col>
      )
    })
    return(
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {booksList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getBooks:getBooks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
