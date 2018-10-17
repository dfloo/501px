import React from 'react';

import PhotoIndexItem from './photo_index_item';

export default class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const photos = Object.values(this.props.photos).map(photo => {
      return (
        <PhotoIndexItem
          key={photo.id}
          photo={photo} />
      );
    });

    return (
      <div className='photo-index-div'>
        <ul className='photo-index-ul'>
          {photos}
        </ul>
      </div>
    );
  }
}
