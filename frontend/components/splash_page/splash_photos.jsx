import React from 'react';

const SplashPhotos = () => {
  return(
    <div id='splash-photos' className='splash-photo-div'>
      <div className='splash-photo-frame'>
        <img className='splash-photo' src={window.images.splash1}/>
      </div>
      <div className='splash-photo-frame'>
        <img className='splash-photo' src={window.images.splash2}/>
      </div>
      <div className='splash-photo-frame'>
        <img className='splash-photo' src={window.images.splash4}/>
      </div>
      <div className='splash-photo-frame'>
        <img className='splash-photo' src={window.images.splash3}/>
      </div>
    </div>
  );
}

export default SplashPhotos
