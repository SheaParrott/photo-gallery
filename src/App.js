import React, { Component } from 'react'
import './App.css'
import gallery from './gallery.json'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lyrics: '',
      pandaImage: '',
      pandaParagraph: '',
      miniatureImage: '',
      miniatureParagraph: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header>Photo Gallery</header>
        <div className="headerMenu">
          <a href="#">home</a>
        </div>
        {/* <CategoryList /> */}
        {/* <PhotoList /> */}
        <PhotoDetails />
      </div>
    )
  }
}

export default App
