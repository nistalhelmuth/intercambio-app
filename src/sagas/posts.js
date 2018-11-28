import {
  call,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';
import { fetchPosts, fetchPost, createPost } from '../api/posts';
import * as types from '../types/posts';
import * as actions from '../actions/posts';
import * as selectors from '../reducers';

function* postsFetcher(action) {
  const { payload: { categoryId } } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      fetchPosts,
      categoryId,
      token,
    );
    yield put(actions.recivePosts(response));
  } catch (error) {
    yield put(actions.failPostsFetching());
  }
}

function* postFetcher(action) {
  const { payload: { postId } } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      fetchPost,
      postId,
      token,
    );
    yield put(actions.recivePost(response));
  } catch (error) {
    console.log(error);
    yield put(actions.failPostFetching());
  }
}

function* postCreator(action) {
  const {
    payload: {
      id,
      title,
      description,
      img,
      postedBy,
      offeredItem,
      category,
    },
  } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      createPost,
      title,
      description,
      img,
      postedBy,
      offeredItem,
      category,
      token,
    );
    yield put(actions.recivePost(id, response.id));
  } catch (error) {
    console.log(error);
    yield put(actions.failPostFetching());
  }
}

function* watchPostsSaga() {
  yield takeLatest(
    types.POSTS_FETCHED,
    postsFetcher,
  );
  yield takeLatest(
    types.POST_FETCHED,
    postFetcher,
  );
  yield takeLatest(
    types.POST_CREATED,
    postCreator,
  );
}

export default watchPostsSaga;
