import * as types from '../types/image';

export const addImage = img => (
  {
    type: types.IMG_ADDED,
    payload: img,
  }
);

export const removeImage = () => (
  {
    type: types.IMG_REMOVED,
  }
);

export const sendBelonginImage = ({ Img, belonginValues }) => (
  {
    type: types.BELONGING_IMG_SENT,
    payload: {
      Img,
      belonginValues,
    },
  }
);

export const sendProfileImage = ({ Img, profileValues }) => (
  {
    type: types.PROFILE_IMG_SENT,
    payload: {
      Img,
      profileValues,
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
