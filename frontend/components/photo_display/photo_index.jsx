import React from 'react';
import Gallery from 'react-grid-gallery';

export default class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: Object.values(this.props.photos),
      currentPhoto: 0
    }

    this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
    this.renderShow = this.renderShow.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentDidUpdate(prevProps) {
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if (a[j] === undefined) {
          continue
        }
        const x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    const photos = Object.values(this.props.photos);

    if (photos.length != Object.values(prevProps.photos).length) {
      this.setState({ photos: shuffle(photos) })
    }
  }

  onCurrentImageChange(idx) {
    this.setState({ currentPhoto: idx });
  }

  renderShow() {
    const thisPhoto = this.state.photos[this.state.currentPhoto]
    this.props.history.push(`/photos/${thisPhoto.id}`)
  }

  render() {
    if (this.state.photos.length > 0) {

      return (
        <div className='photo-index-div'>
          <div className='photo-index-content'>
            <Gallery images={this.state.photos}
              enableLightbox={true}
              enableImageSelection={false}
              currentImageWillChange={this.onCurrentImageChange}
              rowHeight={280}
              margin={5}
              customControls={[
                <button key="renderShow" onClick={this.renderShow}>Details</button>
              ]}
            />
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
