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
              <div className='show-user-div'>
                <img className='show-avatar' src={window.images.avatar}/>
                <div className='show-username-follow'>
                  <h1>{this.props.photo.username}</h1>
                  <button>Follow</button>
                </div>
              </div>
              <div className='likes-button-div'>
                <img className='show-likes-heart'
                  src={window.images.white_heart}/>
                <button>1,476</button>
              </div>
              <div className='likes-info-div'>
                <img className='show-likes-heart2'
                  src={window.images.solid_heart}/>
                <h2>user and 1467 others.</h2>
              </div>

              <div className='show-info-div'>
                <h1>{this.props.photo.title}</h1>
                <h2>{this.props.photo.description}</h2>
              </div>
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
