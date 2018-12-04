import React, { Component } from 'react'
import gallery from './gallery.json'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
      <main>
        {Object.keys(gallery).map(category => {
          return (
            <div key={category} className="imageBox">
              <Link to={`/${category}`}>{gallery[category].title}</Link>
              <Link to={`/${category}`}>
                <img
                  src={gallery[category].photos[0].imageURL}
                  alt={gallery[category].title}
                />
              </Link>
            </div>
          )
        })}
      </main>
    )
  }
}

export default CategoryList
