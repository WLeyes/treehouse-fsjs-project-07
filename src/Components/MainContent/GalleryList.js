// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// Component imports
import Photo from './Photo';
import Error404 from '../Error404/Image404';

class GalleryList extends Component {
  constructor(props) {
    super();
  }
  render() {
    const results = this.props.data;
    let photos;
    if(results.length > 0){
      photos = results.map( photo =>
        <Photo 
          key={ photo.id }
          alt={photo.title}
          url={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg` }
        />
      );
    } else {
      photos = <Error404 />;
    }
    
    return (
      <ul>
        {photos}
      </ul>
    )
  }
}

GalleryList.proptypes = { photos: PropTypes.array.isRequired }

export default GalleryList;