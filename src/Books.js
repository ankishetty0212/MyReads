import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Books extends Component {
    updatedBookObj = {};

    updateShelfProp() {
        this.updatedBookObj = this.props.book

        // set current shelf to none as default
        let currentShelf = 'none';

        // if book is in current list, set current shelf to book.shelf
        for (let book of this.props.booksFromShelf) {
            if (book.id === this.props.book.id) {
                currentShelf = book.shelf;
                break;
            }
        }
        this.updatedBookObj.shelf = currentShelf;
    }

    render() {

        this.updateShelfProp()
        return (
            <div>
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${this.updatedBookObj.imageLinks !== undefined &&
                                this.updatedBookObj.imageLinks.smallThumbnail})`
                        }}>
                    </div>
                    <BookShelfChanger book={this.updatedBookObj} updateBookShelf={this.props.updateBookShelf} />
                </div>
                <div className="book-title">{this.updatedBookObj.title}</div>
                <div className="book-authors">
                    {this.updatedBookObj.authors !== undefined && this.updatedBookObj.authors.map((author) => (
                        `${author}, `
                    ))
                    }
                </div>
            </div>


        )
    }
}

export default Books;