import React, { Component } from 'react';

class BookShelfChanger extends Component {
    
    handleChangeShelf = (event) =>{
        console.log('In handleChangeShelf method');
        console.log('event.target.value: ', event.target.value); 
        console.log('this.props.book: ', this.props.book); 
        this.setState({value: event.target.value});
        this.props.updateBookShelf(this.props.book, event.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf === '' || 
                        this.props.book.shelf === 'none' ||
                        this.props.book.shelf === undefined ? 'none' : this.props.book.shelf } 
                onChange={this.handleChangeShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;