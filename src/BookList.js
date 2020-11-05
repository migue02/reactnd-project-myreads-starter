import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends Component {

    render () {
        const { books, onUpdateBook} = this.props

        return (
            <ol className='books-grid'>
                {books.map((book) => (
                    <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>
                ))}
            </ol>
        )
    }
}

export default BookList