import * as PhotoUtil from '../util/photos_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const fetchPhotos = () => dispatch => (
  PhotoUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const fetchPhoto = (photoId) => dispatch => (
  PhotoUtil.fetchPhoto(photoId).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);
