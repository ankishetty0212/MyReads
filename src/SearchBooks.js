import React, { Component } from 'react';
import Books from './Books';
import * as BooksAPI from './utils/BooksAPI';

class SearchBooks extends Component {
    state = {
        query: '',
        books: [],
        showSearchPage: false
    }

    setQueryCallSearch = (query) => {
        this.setState(() => ({
            query: query
        }))
        this.search(this.state.query)
    }

    search() {
        BooksAPI.search(this.state.query, 15)
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }


    render() {
        const { query, books } = this.state
        const { showSearchPage, toggleSearchFlag } = this.props

        const showingBooks = query === ''
            ? '' : books;

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" onClick={() => {toggleSearchFlag(false)}}>Close</a>
                        <div className="search-books-input-wrapper">
                            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

                            <input type="text" placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => { this.setQueryCallSearch(event.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {showingBooks !== undefined && showingBooks.length > 0 && 
                            showingBooks.map((book) => (
                                <li key={book.id}>
                                    <div className="book">
                                        <Books book={book} />
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