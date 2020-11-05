import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Constants from './Constants'

class BookActions extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    updateBook  = (e) => {
        const { book, onUpdateBook } = this.props
        const shelf = e.target.value

        e.preventDefault();

        BooksAPI.update(book, shelf)
            .then(() => {
                const isNew = book.shelf === 'none'

                book.shelf = shelf
                onUpdateBook(book, isNew)
            })
    }

    render () {
        const { book } = this.props

        return (
            <div className='book-shelf-changer'>
                <select onChange={this.updateBook} value={book.shelf}>
                    <option value='move' disabled>Move to...</option>
                    {Constants.SHELVES.map(action => (
                        <option key={action.key} value={action.key}>{action.title}</option>
                    ))}
                    <option value='none'>None</option>
                </select>
            </div>
        )
    }
}

export default BookActions