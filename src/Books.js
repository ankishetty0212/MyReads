import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Books extends Component {
    updatedBookObj = {};
    
    updateShelfProp(){
        this.updatedBookObj = this.props.book
        console.log('this.props.booksFromShelf title', this.props.booksFromShelf);
        console.log('this.updatedBookObj', this.updatedBookObj);

        if(this.props.book.shelf === undefined ){
            //While navigating through Search page
            this.props.booksFromShelf.map((bookFromShelf) => (
                bookFromShelf.id === this.props.book.id 
                    ? this.updatedBookObj.shelf = bookFromShelf.shelf
                    : this.updatedBookObj.shelf = 'none'
            ))
        }
    }

    render() {
        this.updateShelfProp()
        return (
            <div>
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${ this.updatedBookObj.imageLinks !== undefined && 
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