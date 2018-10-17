import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = ({ photo }) => {
  return (
    <li className='index-photo-li'>
      <img className='index-photo'
        src={photo.src} />
    </li>);
};

export default PhotoIndexItem
