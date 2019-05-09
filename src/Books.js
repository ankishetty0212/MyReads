import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Books extends Component {
    render() {
        const {book, updateBookShelf} = this.props
        return (
            <div>
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}>
                    </div>
                    <BookShelfChanger book={book} updateBookShelf={updateBookShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>


        )
    }
}

export default Books;