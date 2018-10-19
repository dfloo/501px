import React from 'react';
import Gallery from 'react-grid-gallery';

export default class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    let that = this;
  }

  handleClick(idx, e) {
    const photoId = this.props.item.id;
    e.view.history.replaceState(null, null, `/#/photos/${photoId}`);
    location.reload();
  }


  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    if (this.props.photos) {
      const photos = Object.values(this.props.photos);

      const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
        return arr;
      }

      shuffle(photos);

      let that = this;

      return (
        <div className='photo-index-div'>
          <div className='photo-index-content'>
            <Gallery images={photos}
              onClickThumbnail={this.handleClick}
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
