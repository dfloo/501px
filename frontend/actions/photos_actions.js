import * as PhotoUtil from '../util/photos_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = photoId => ({
  type: RECEIVE_PHOTO,
  photoId
});

export const fetchPhotos = () => dispatch => (
  PhotoUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const fetchPhoto = photoId => dispatch => (
  PhotoUtil.fetchPhoto(photoId).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);

export const createPhoto = photo => dispatch => (
  PhotoUtil.createPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);

export const updatePhoto = photo => dispatch => (
  PhotoUtil.updatePhoto(photo).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);

export const deletePhoto = photoId => dispatch => (
  PhotoUtil.deletePhoto(photoId).then(photo => (
    dispatch(removePhoto(photoId).then())
  ))
);
