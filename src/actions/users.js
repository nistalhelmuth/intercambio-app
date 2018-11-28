import * as types from '../types/users';

export const createUser = (
  id,
  username,
  password,
  firstName,
  lastName,
  email,
  age,
  phone,
  img,
) => ({
  type: types.USER_CREATED,
  payload: {
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    age,
    phone,
    img,
  },
});

export const updateUser = (
  id,
  username,
  password,
  firstName,
  lastName,
  email,
  age,
  phone,
  rating,
  img,
  imgUrl,
) => ({
  type: types.USER_UPDATED,
  payload: {
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    age,
    phone,
    rating,
    img,
    imgUrl,
  },
});

export const confirmUserCreation = (
  oldId,
  newId,
) => ({
  type: types.USER_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
  },
});

export const confirmUserUpdate = user => ({
  type: types.USER_UPDATE_CONFIRMED,
  payload: {
    user,
  },
});

export const deleteUser = id => ({
  type: types.USER_DELETED,
  payload: {
    id,
  },
});

export const confirmUserDeletion = (
  oldId,
  newId,
) => ({
  type: types.USER_DELETION_CONFIRMED,
  payload: {
    oldId,
    newId,
  },
});

export const fetchUsers = (
  atributeName,
  comparisonObject,
) => ({
  type: types.USERS_FETCHED,
  payload: {
    atributeName,
    comparisonObject,
  },
});

export const reciveUsers = users => ({
  type: types.USERS_RECIVED,
  payload: {
    users,
  },
});

export const fetchUser = userId => ({
  type: types.USER_FETCHED,
  payload: {
    userId,
  },
});

export const reciveUser = userInfo => ({
  type: types.USER_RECIVED,
  payload: {
    ...userInfo,
  },
});

export const failUserFetching = () => ({
  type: types.USER_RECIVED_FAILED,
});

export const resetSubmitStatus = () => ({
  type: types.SUBMIT_STATUS_RESETTED,
});

export const resetSelectedUser = () => ({
  type: types.SELECTED_USER_RESETED,
});
