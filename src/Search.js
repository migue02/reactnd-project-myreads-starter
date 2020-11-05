import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    };

    state = {
        results: [],
        query: ''
    };

    updateResults = (results, books) => {
        this.setState(() => ({
            results: results.map((showingBook) => {
                const filteredBook = books.filter((book) => {
                    return book.id === showingBook.id;
                });

                showingBook.shelf = (filteredBook.length > 0 && filteredBook[0].shelf) || showingBook.shelf || 'none';
                return showingBook;
            })
        }))
    }

    updateQuery = (query) => {
        const { updateResults } = this;
        const { books } = this.props;

        BooksAPI.search(query)
            .then(results => {
                updateResults((results && results.map && results) || [], books);
            })

        this.setState(() => ({
            query: query
        }))
    }

    updateBook = (updatedBook, isNew) => {
        const { onUpdateBook } = this.props;

        onUpdateBook(updatedBook, isNew);
        this.updateResults(this.state.results, [updatedBook]);
    }

    render () {
        const { query, results } = this.state;

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link
                        className='close-search'
                        to='/'
                    >Close</Link>
                    <div className='search-books-input-wrapper'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search by title or author'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    </div>
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {results && results.map((book) => (
                            <Book key={book.id} book={book} onUpdateBook={this.updateBook}/>
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;