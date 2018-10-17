import React from 'react';
import { Link } from 'react-router-dom';

export default class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    const photo = this.props.photo;
    if (this.props.photo) {
      return (
        <div id='photo-show-modal'
          className=''>
          <div className='photo-show-modal-content'>
            <div className='photo-img'>
              <img src={photo.src} />
            </div>
            <div className='photo-attributes'>
              <h1>Title</h1>
              <h1>Description</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
}
