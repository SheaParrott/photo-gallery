import React, { Component } from 'react'
import gallery from './gallery.json'

class CategoryList extends Component {
  render() {
    return (
      <main>
        <div className="imageBox">
          <a href="#">{gallery.pandas.title}</a>
          <a href="#">
            <img
              src={gallery.pandas.photos[0].imageURL}
              alt={gallery.pandas.title}
            />
          </a>
        </div>
        <div className="imageBox">
          <a href="#">{gallery.miniatures.title}</a>
          <a href="#">
            <img
              src={gallery.miniatures.photos[0].imageURL}
              alt={gallery.miniatures.title}
            />
          </a>
        </div>
      </main>
    )
  }
}

export default CategoryList
