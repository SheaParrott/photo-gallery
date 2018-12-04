import React, { Component } from 'react'
import gallery from './gallery.json'

class componentName extends Component {
  render() {
    const CategoryData = gallery['pandas']
    const PhotoIndex = 0
    return (
      <>
        <h4>{CategoryData.photos[PhotoIndex].title}</h4>
        <p>{gallery.pandas.description}</p>
        <a href={CategoryData.photos[PhotoIndex].sourceURL}>
          <img src={CategoryData.photos[PhotoIndex].imageURL} />
        </a>
      </>
    )
  }
}

export default componentName
