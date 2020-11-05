import React, {Component} from 'react'
import Constants from './Constants'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Shelves extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                console.log('books', books);
                this.setState(() => ({
                    books
                }))
            })
    }

    onUpdateBook = (updatedBook) => {
        this.setState((currState) => ({
            books: currState.books.map((book) => {
                if (updatedBook.id === book.id) {
                    book.shelf = updatedBook.shelf;
                }
                return book;
            })
        }))
    }

    render () {

        return (
            <div className="list-books-content">
                <div>
                    {Constants.SHELVES.map((shelf) => (
                        <Shelf key={shelf.key} title={shelf.title} shelf={shelf.key} allBooks={this.state.books} onUpdateBook={this.onUpdateBook}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Shelves