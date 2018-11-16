import merge from "lodash/merge";

import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../actions/follows_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, state);
    case RECEIVE_LIKE:
      return merge({}, state);
    case REMOVE_LIKE:
      return merge({}, state);
    default:
      return state;
  }
};
