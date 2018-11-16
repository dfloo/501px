import * as LikeUtil from "../util/likes_util";

export const RECEIVE_like = "RECEIVE_like";
export const REMOVE_like = "REMOVE_like";

const removelike = likeId => ({
  type: RECEIVE_like,
  likeId
});

export const fetchlikes = () => dispatch =>
  likeUtil.fetchlike().then(like => dispatch(receivelikes(like)));

export const deletePhoto = photoId => dispatch => (
  PhotoUtil.deletePhoto(photoId).then(photo => (
    dispatch(removePhoto(photoId).then())
  ))
);