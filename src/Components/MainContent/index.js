// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// Axios Component for React with child function callback. This is intended to allow in render async requests.
import axios from 'axios';

// Component imports
import apiKey from '../config';

import GalleryList from './GalleryList';
import Loading from '../Loading';

class MainContent extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        loading: true
      })
      this.performSearch(nextProps.query);
    }
  }

  performSearch = (query = 'pug') => {
    // Fetch from Flickr
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => console.log('Error Fetching and parsing data', error));
  }

  // Render results to page
  render(props) {
    return (
      <div className="photo-container">
        <h2>{this.props.query}</h2>
        {(this.state.loading) ? <Loading /> : <GalleryList data={this.state.photos} />}
      </div>
    )
  }
}

MainContent.propTypes = {
  query: PropTypes.string.isRequired
}

export default MainContent;