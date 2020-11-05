import React, {Component} from 'react'
import Constants from './Constants'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

class Shelves extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render () {
        const { books, onUpdateBook } = this.props

        return (
            <div className="list-books-content">
                <div>
                    {Constants.SHELVES.map((shelf) => (
                        <Shelf key={shelf.key} title={shelf.title} shelf={shelf.key} allBooks={books} onUpdateBook={onUpdateBook}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Shelves