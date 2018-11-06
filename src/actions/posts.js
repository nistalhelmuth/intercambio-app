import * as types from '../types/posts';

export const createPost = (
  id,
  title,
  description,
  postedBy,
  offeredItem,
  date,
  category,
) => ({
  types: types.POST_CREATED,
  payload: {
    id,
    title,
    description,
    postedBy,
    offeredItem,
    date,
    category,
  },
});

export const confirmPostCreation = (
  oldId,
  newId,
) => ({
  type: types.POST_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
  },
});

export const deltePost = id => ({
  type: types.POST_DELETED,
  payload: {
    id,
  },
});

export const confirmDeletionPost = id => ({
  type: types.POST_DELETION_CONFIRMED,
  id,
});

export const updatePost = (
  id,
  title,
  description,
  postedBy,
  offeredItem,
  date,
  category,
) => ({
  types: types.POST_UPDATED,
  payload: {
    id,
    title,
    description,
    postedBy,
    offeredItem,
    date,
    category,
  },
});

export const confirmPostUpdate = (
  id,
  title,
  description,
  postedBy,
  offeredItem,
  date,
  category,
) => ({
  types: types.POST_UPDATED,
  payload: {
    id,
    title,
    description,
    postedBy,
    offeredItem,
    date,
    category,
  },
});

export const fetchPosts = (
  atributeName,
  comparisonObject,
) => ({
  type: types.POSTS_FETCHED,
  payload: {
    atributeName,
    comparisonObject,
  },
});

export const recivePosts = posts => ({
  type: types.POSTS_RECIVED,
  payload: {
    posts,
  },
});
