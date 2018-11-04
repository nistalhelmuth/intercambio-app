import { combineReducers } from 'redux';
import categories, * as categorySelectors from './categories';
import belongings, * as belongingSelectors from './belongings';
import users, * as userSelectors from './users';
import posts, * as postSelectors from './posts';
import offers, * as offerSelectors from './offers';

const reducer = combineReducers({
  categories,
  belongings,
  users,
  posts,
  offers,
});

export default reducer;

// Selectores
export const getCategory = (state, id) => categorySelectors.getCategory(state.categories, id);
export const getCategories = state => categorySelectors.getCategories(state.categories);
export const getCategoryIds = state => categorySelectors.getCategoryIds(state.categories);
export const getBelonging = (state, id) => belongingSelectors.getBelonging(state.belongings, id);
export const getBelongings = state => belongingSelectors.getBelongings(state.belongings);
export const getUser = (state, id) => userSelectors.getUser(state.users, id);
export const getUsers = state => userSelectors.getUsers(state.users);
export const getPost = (state, id) => postSelectors.getPost(state.posts, id);
export const getPosts = state => postSelectors.getPosts(state.posts);
export const getOffer = (state, id) => offerSelectors.getOffer(state.offers, id);
export const getOffers = state => offerSelectors.getOffers(state.offers);
