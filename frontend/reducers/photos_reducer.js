import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO
} from '../actions/photos_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    default:
      return state
  }
};
