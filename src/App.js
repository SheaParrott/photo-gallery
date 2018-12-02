import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import gallery from './gallery.json'

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
        <main>
          <div className="imageBox">
            <a
              href="#"
              style={{
                textDecoration: 'none'
              }}
            >
              {gallery.pandas.title}
            </a>
            <p>{gallery.pandas.description}</p>
            <img
              src={gallery.pandas.photos[0].imageURL}
              alt={gallery.pandas.title}
            />
          </div>
          <div className="imageBox">
            <a
              href="#"
              style={{
                textDecoration: 'none'
              }}
            >
              {gallery.miniatures.title}
            </a>
            <p>{gallery.miniatures.description}</p>
            <img
              src={gallery.miniatures.photos[0].imageURL}
              alt={gallery.miniatures.title}
            />
          </div>
        </main>
      </div>
    )
  }
}

export default App
