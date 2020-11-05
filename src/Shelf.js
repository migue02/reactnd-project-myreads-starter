import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

class Shelf extends Component {

    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render () {
        const { allBooks, shelf, title, onUpdateBook } = this.props;

        const books = allBooks.filter((book) => {
            return book.shelf === shelf;
        })

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookList books={books} onUpdateBook={onUpdateBook}/>
                </div>
            </div>
        )
    }
}

export default Shelf;