import * as types from '../types/users';

export const createUser = ({
  id,
  username,
  firstName,
  lastName,
  email,
  password,
  age,
  phone,
}) => ({
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
  },
});

export const confirmUserCreation = id => ({
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

export const confirmUserDeletion = id => ({
  type: types.USER_DELETION_CONFIRMED,
  payload: {
    oldId,
    newId,
  },
});

export const fetchUsers = ({
  atributeName,
  comparisonObject,
}) => ({
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

export const authenticateUser = ({
  email,
  password,
}) => ({
  type: types.USER_AUTHENTICATED,
  payload: {
    email,
    password,
  },
});

export const confirmUserAuthentication = permission => ({
  type: types.USER_AUTHENTICATION_CONFIRMED,
  payload: {
    permission,
  },
});
