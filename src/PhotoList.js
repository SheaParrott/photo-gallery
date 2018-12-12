import React, { Component } from 'react'
import gallery from './gallery.json'

import { Link } from 'react-router-dom'

class componentName extends Component {
  render() {
    const category = this.props.match.params.category
    const CategoryData = gallery[category]
    return (
      <>
        {CategoryData.photos.map((photo, index) => {
          return (
            <Link key={index} to={`/${category}/${index}`}>
              <h4>{photo.title}</h4>
              <img
                className="photoDetails"
                src={photo.imageURL}
                alt={photo.title}
              />
            </Link>
          )
        })}
      </>
    )
  }
}

export default componentName
// render() {
//   console.log(this.props.match.params.category)
// const category = this.props.match.params.category
//   const CategoryData = gallery[category]
//   return (
//     <>
//       {CategoryData.photos.map((photo, index) => {
//         return (
//           <Link to={`/${category}/index`}></Link>
//             <h4 key={index}>{photo.title}</h4>
//             <img src={photo.imageURL} alt={photo.title} />
//         )
//       })}
//     </>
//   )
// }
