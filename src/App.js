import React, { Component } from 'react'
import './App.css'
import gallery from './gallery.json'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <header>Photo Gallery</header>
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/:category" component={PhotoList} />
          <Route path="/:category/:index" component={PhotoDetails} />
        </>
      </Router>
    )
  }
}

export default App
