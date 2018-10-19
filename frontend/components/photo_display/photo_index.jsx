import React from 'react';
import Gallery from 'react-grid-gallery';

export default class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: Object.values(this.props.photos),
      currentPhoto: 0
    }

    this.onCurrentPhotoChange = this.onCurrentPhotoChange.bind(this);
    this.renderShow = this.renderShow.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentDidUpdate(prevProps) {
    if (Object.values(this.props.photos).length != Object.values(prevProps.photos).length) {
      this.setState({ photos: Object.values(this.props.photos) })
    }
  }

  onCurrentPhotoChange(idx) {
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
              currentImageWillChange={this.onCurrenPhotoChange}
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
