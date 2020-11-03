import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookList extends Component {

    render () {
        const { books } = this.props

        return (
            <ol className='books-grid'>
                {books.map((book) => (
                    <li key={book.id}>
                        <div className='book'>
                            <div className='book-top'>
                            <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className='book-shelf-changer'>
                                <select>
                                <option value='move' disabled>Move to...</option>
                                <option value='currentlyReading'>Currently Reading</option>
                                <option value='wantToRead'>Want to Read</option>
                                <option value='read'>Read</option>
                                <option value='none'>None</option>
                                </select>
                            </div>
                            </div>
                            <div className='book-title'>{book.title}</div>
                            {book.authors && book.authors.map((author) => (
                                <div key={Math.random()} className='book-authors'>{author}</div>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default BookList