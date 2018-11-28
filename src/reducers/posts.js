import { combineReducers } from 'redux';
import * as types from '../types/posts';

const selected = (state = {}, action) => {
  switch (action.type) {
  case types.POST_RECIVED: {
    return {
      ...action.payload,
    };
  }
  default:
    return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
  case types.POST_CREATED: {
    const { payload: { id } } = action;
    return {
      ...state,
      [id]: {
        ...action.payload,
      },
    };
  }
  case types.POST_CREATION_CONFIRMED: {
    const { newId, oldId } = action.payload;
    const newState = { ...state };
    const { id, ...rest } = newState[oldId];
    const newItem = {
      id: newId,
      ...rest,
    };
    delete newState[oldId];
    return {
      ...newState,
      [newId]: newItem,
    };
  }
  case types.POSTS_RECIVED: {
    const stateToBe = {};
    action.payload.posts.forEach((post) => {
      stateToBe[post.id] = post;
    });
    return stateToBe;
  }
  case types.POST_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  case types.POST_UPDATE_CONFIRMED: {
    const newState = { ...state };
    const { id } = action.payload.id;
    delete newState[id];
    return {
      ...newState,
      [id]: action.payload,
    };
  }
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case types.POST_CREATED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.POST_CREATION_CONFIRMED: {
    return [
      ...state.filter(id => id !== action.payload.oldId),
      action.payload.newId,
    ];
  }
  case types.POSTS_RECIVED: {
    const stateToBe = [];
    action.payload.posts.forEach((post) => {
      stateToBe.push(post.id);
    });
    return stateToBe;
  }
  case types.POST_DELETION_CONFIRMED: {
    return state.filter(id => id !== action.payload.id);
  }
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
  selected,
});

export const getSelectedPost = state => state.selected;
export const getPost = (state, id) => state.byId[id];
export const getPosts = state => (
  state.allIds.map(id => getPost(state, id))
);
export const getPostsIds = state => state.allIds;
