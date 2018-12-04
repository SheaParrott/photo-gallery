import React, { Component } from 'react'
import gallery from './gallery.json'
import CategoryList from './CategoryList.js'

class componentName extends Component {
  render() {
    const CategoryData = gallery['pandas']
    return (
      <>
        {CategoryData.photos.map(photo => {
          return (
            <a key={photo} href={photo.sourceURL}>
              <h4>{photo.title}</h4>
              <img src={photo.imageURL} alt={photo.title} />
            </a>
          )
        })}
      </>
    )
  }
}

export default componentName
