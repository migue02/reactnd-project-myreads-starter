import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookList from './BookList'

class Shelf extends Component {

    render () {
        const { allBooks, shelf, title } = this.props

        const books = allBooks.filter((book) => {
            return book.shelf === shelf
        })

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookList books={books}/>
                </div>
            </div>
        )
    }
}

export default Shelf