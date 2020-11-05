import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookActions from './BookActions'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render () {
        const { book, onUpdateBook } = this.props

        const { imageLinks } = book

        return (
            <li key={book.id}>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.thumbnail})` }}></div>
                        <BookActions book={book} onUpdateBook={onUpdateBook}/>
                    </div>
                    <div className='book-title'>{book.title}</div>
                    {book.authors && book.authors.map((author) => (
                        <div key={Math.random()} className='book-authors'>{author}</div>
                    ))}
                </div>
            </li>
        )
    }
}

export default Book