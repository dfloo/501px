import * as LikeUtil from "../util/likes_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const deleteLike = likeId => ({
  type: RECEIVE_LIKE,
  likeId
});

export const fetchLikes = () => dispatch => (
  LikeUtil.fetchLikes().then(likes => (
    dispatch(receiveLikes(likes))
  ))
);

export const createLike = like => dispatch => (
  LikeUtil.createLike(like).then(like => (
    dispatch(receiveLike(like))
  ))
);

export const deleteLike = likeId => dispatch => (
  LikeUtil.deleteLike(likeId).then(likeId => (
    dispatch(deleteLike(likeId))
  ))
);