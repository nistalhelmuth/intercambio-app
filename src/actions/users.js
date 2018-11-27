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
