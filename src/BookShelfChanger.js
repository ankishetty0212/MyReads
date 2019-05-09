import React, { Component } from 'react';

class BookShelfChanger extends Component {
    constructor(props){
        super(props);
        this.state = { value: this.props.book.shelf !== '' ? this.props.book.shelf : 'none' };
    }
    
    handleChangeShelf = (event) =>{
        console.log('In handleChangeShelf method');
        console.log('event.target.value: ', event.target.value);
        this.setState({value: event.target.value});
        this.props.updateBookShelf(this.props.book, event.target.value)
    }

    render() {
        const  book = this.props.book
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChangeShelf}>
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