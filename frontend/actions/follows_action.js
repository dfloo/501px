import * as FollowsUtil from '../util/follows_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = followId => ({
  type: RECEIVE_FOLLOW,
  followId
});

export const fetchFollows = () => dispatch => (
  FollowUtil.fetchFollows().then(follows => (
    dispatch(receiveFollows(follows))
  ))
);

export const createFollow = follow => dispatch => (
  FollowUtil.createFollow(follow).then(follow => (
    dispatch(receiveFollow(follow))
  ))
);


export const deleteFollow = followId => dispatch => (
  FollowUtil.deleteFollow(followId).then(followId => (
    dispatch(removeFollow(followId).then())
  ))
);
