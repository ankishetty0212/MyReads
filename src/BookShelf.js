import React, { Component } from 'react';
import Books from './Books';

class BookShelf extends Component {

    render() {
        const { books, updateBookShelf } = this.props
        const bookShelfMap = {
            'currentlyReading': 'Currently Reading',
            'wantToRead': 'Want To Read',
            'read': 'Read'
        }

        return (
            <div>
                {Object.keys(bookShelfMap).map((key) => (
                    <div className="bookshelf" key={key} >
                        <h2 className="bookshelf-title" >{bookShelfMap[key]}</h2>
                        <div className="bookshelf-books" >
                            <ol className="books-grid" >
                                {books !== undefined && books.length > 0 &&
                                    books.map((book) => ( 
                                        book.shelf === key &&
                                        <li key={book.id}>
                                            <div className="book" key={book.id}>
                                                <Books book={book} updateBookShelf={updateBookShelf}/>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ol>
                        </div>
                    </div>

                ))
                }
            </div>
        )
    }
}

export default BookShelf;