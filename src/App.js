import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './utils/BooksAPI';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  constructor() {
    super();
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  updateBookShelf = (book, shelf) => {

    /*Another way of updating state without another API call. 
    But this does not update the page immediately either owing to the asynchronous nature of setState. */

    /* BooksAPI.update(book, shelf).then(() => {
       const booksFromState = this.state.books;
       for(let stateBook of booksFromState){
         if(stateBook.id === book.id){
           stateBook.shelf = book.shelf
         }
       }
     
       this.setState(() => ({
           books: booksFromState
       }))
     })*/

    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books: books
          }))
        })
    })


  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={books} updateBookShelf={this.updateBookShelf} booksFromShelf={books} />
              </div>
            </div>
            <div className="open-search">
              <Link
                to='/search'>
                Add a book
            </Link>
            </div>
          </div>
        )} />

        <Route path='/search' render={() => (
          <SearchBooks booksFromShelf={books} updateBookShelf={this.updateBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
