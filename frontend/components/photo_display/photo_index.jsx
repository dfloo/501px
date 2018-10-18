import React from 'react';
import Gallery from 'react-grid-gallery';

import PhotoIndexItem from './photo_index_item';

export default class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const renameKeys = (keysMap, obj) => {
      return Object.keys(obj).reduce((acc, key) => {
        const renamedObject = {
          [keysMap[key] || key]: obj[key]
        };
        return {
          ...acc,
          ...renamedObject
        }
      }, {});
    };

    if (this.props.photos) {
      const photos = Object.values(this.props.photos)
      return (
        <div className='photo-index-div'>
          <div className='photo-index-content'>
            <Gallery images={photos}
              enableLightbox={false}
              enableImageSelection={false}
              rowHeight={280}
              margin={5}/>
          </div>
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}
