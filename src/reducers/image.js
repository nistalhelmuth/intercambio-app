import * as types from '../types/image';

const defaultState = {
  image: undefined,
  confirm: -1,
};

const image = (state = defaultState, action) => {
  switch (action.type) {
  case types.IMG_ADDED: {
    return {
      ...state,
      image: action.payload,
    };
  }
  case types.IMG_REMOVED: {
    return {
      ...state,
      image: {},
    };
  }
  case types.BELONGING_IMG_SENT: {
    return {
      ...state,
      confirm: 0,
    };
  }
  case types.PROFILE_IMG_SENT: {
    return {
      ...state,
      confirm: 0,
    };
  }
  case types.IMG_SENT_CONFIRMED: {
    return {
      ...state,
      image: {},
      confirm: -1,
    };
  }
  case types.IMG_SENT_FAILED: {
    return {
      ...state,
      confirm: 1,
    };
  }
  default: {
    return state;
  }
  }
};

export default image;

export const getImage = state => state.image;
export const getImageConfirmation = state => state.confirm;
