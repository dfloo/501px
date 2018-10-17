import React from 'react';
import { Link } from 'react-router-dom';

export default class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    const photo = this.props.photo;
    debugger
    if (this.props.photo) {
      return (
        <div className='photo-show-div'>
          <img src={photo.src} />
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      );
    }
  }
}
