import React from 'react';
import Search from './Search';
import Shelves from './Shelves';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }));
            })
    }

    onUpdateBook = (updatedBook, isNew) => {
        this.setState((currState) => ({
            books: isNew ?
                currState.books.concat([updatedBook])
                : currState.books.map((book) => {
                    if (updatedBook.id === book.id) {
                        book.shelf = updatedBook.shelf;
                    }
                    return book;
                })
        }))
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <Shelves books={this.state.books} onUpdateBook={this.onUpdateBook} />
                        <div className="open-search">
                            <Link
                                to='/search'
                            >Add a book</Link>
                        </div>
                    </div>
                )} />
                <Route exact path='/search' render={() => (
                    <Search books={this.state.books} onUpdateBook={this.onUpdateBook} />
                )} />
            </div>
        )
    }
}

export default BooksApp;
