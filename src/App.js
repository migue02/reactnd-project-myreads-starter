import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import Shelves from './Shelves'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelves allBooks={this.state.books}/>
            <div className="open-search">
                <Link
                  to='/search'
                >Add a book</Link>
            </div>
          </div>
          )} />
          <Route exact path='/search' render={() => (
            <Search />
          )} />
      </div>
    )
  }
}

export default BooksApp
