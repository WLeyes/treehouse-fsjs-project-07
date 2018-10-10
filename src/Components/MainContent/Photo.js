// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';
class Photo extends Component {
  render() {
    return (
      <li>
        <img src={ this.props.url } alt={ `${this.props.alt}` } />
      </li>
    )
  }
}

Photo.proptypes = {
  url: PropTypes.string.isRequired
}
export default Photo;