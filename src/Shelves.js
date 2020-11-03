import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class Shelves extends Component {

    render () {
        const { allBooks} = this.props

        return (
            <div className="list-books-content">
                <div>
                    <Shelf title='Currently Reading' shelf='currentlyReading' allBooks={allBooks}/>
                    <Shelf title='Want to Read' shelf='wantToRead' allBooks={allBooks}/>
                    <Shelf title='Read' shelf='read' allBooks={allBooks}/>
                </div>
            </div>
        )
    }
}

export default Shelves