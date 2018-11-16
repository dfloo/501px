import merge from "lodash/merge";

import {
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from "../actions/follows_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return merge({}, state);
    case RECEIVE_FOLLOW:
      return merge({}, state);
    case REMOVE_FOLLOW:
      return merge({}, state);
    default:
      return state;
  }
};
