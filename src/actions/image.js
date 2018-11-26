import * as types from '../types/image';

export const addImage = img => (
  {
    type: types.IMG_ADDED,
    payload: img,
  }
);

export const removeImgage = imgId => (
  {
    type: types.IMG_REMOVED,
    payload: imgId,
  }
);

export const sendImgage = () => (
  {
    type: types.IMG_SENT,
    payload: {
    },
  }
);

export const confirmImage = () => (
  {
    type: types.IMG_SENT_CONFIRMED,
  }
);

export const failImg = () => (
  {
    type: types.IMG_SENT_FAILED,
  }
);
