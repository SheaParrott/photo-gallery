import React, { Component } from 'react'
import gallery from './gallery.json'
import { Link } from 'react-router-dom'

class componentName extends Component {
  render() {
    const CategoryData = gallery[this.props.match.params.category]
    const PhotoIndex = this.props.match.params.index
    return (
      <>
        <h4>{CategoryData.photos[PhotoIndex].title}</h4>
        <p>{gallery.pandas.description}</p>
        <Link to={CategoryData.photos[PhotoIndex].sourceURL}>
          <img
            className="photoDetails"
            src={CategoryData.photos[PhotoIndex].imageURL}
          />
        </Link>
      </>
    )
  }
}

export default componentName
