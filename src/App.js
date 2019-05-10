import React from 'react';
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  constructor(){
    super();
    this.getAllBooks()
  }

  getAllBooks(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books: books
      }))
    })
  }

  updateBookShelf = (book,shelf) => {
    console.log('In App.js updateBookShelf()', book, 'shelf:', shelf)
    BooksAPI.update(book, shelf);
    this.getAllBooks();
  }

  toggleSearchFlag = (searchFlag) => {
    this.setState((currentState) => ({
      showSearchPage: searchFlag
    }))
  }

  render() {
    const {showSearchPage, books} = this.state

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.state.showSearchPage} toggleSearchFlag={this.toggleSearchFlag} 
          booksFromShelf={books} updateBookShelf={this.updateBookShelf}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <BookShelf books={books} updateBookShelf={this.updateBookShelf}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
