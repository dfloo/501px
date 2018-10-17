import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = ({ photo }) => {
  return (
    <li className='index-photo-li'>
      <img className='index-photo'
        src={photo.photoUrl} />
    </li>);
};

export default PhotoIndexItem
