import React, { Component } from 'react'
import gallery from './gallery.json'

class componentName extends Component {
  render() {
    return (
      <>
        <h4>{gallery.pandas.title}</h4>
        <p>
          Pandas are bears native to south-central China, and are objectively
          the cutest animals on earth.
        </p>
        <a href="https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294">
          <img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
        </a>
      </>
    )
  }
}

export default componentName
