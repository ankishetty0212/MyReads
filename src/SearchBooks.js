import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './utils/BooksAPI';


class SearchBooks extends Component {
    state = {
        query: '',
        books: []
    }
    
    setQueryCallSearch = (query) => {
        this.setState(() => ({
            query: query
        }))
        this.search(query)
    }

    search(query) {
        BooksAPI.search(this.state.query, 15)
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    render() {
        const { query, books } = this.state
        const { booksFromShelf, updateBookShelf } = this.props

        const showingBooks = query === ''
            ? '' : books;

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link
                            to='/'
                            className="close-search"
                        >
                            Close
                        </Link>

                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => {this.setQueryCallSearch(event.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {showingBooks !== undefined && showingBooks.length > 0 &&
                                showingBooks.map((book) => (
                                    <li key={book.id}>
                                        <div className="book">
                                            <Books book={book} updateBookShelf={updateBookShelf}  booksFromShelf={booksFromShelf}/>
                                        </div>
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks;