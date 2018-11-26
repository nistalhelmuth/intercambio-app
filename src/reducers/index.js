import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import categories, * as categorySelectors from './categories';
import belongings, * as belongingSelectors from './belongings';
import users, * as userSelectors from './users';
import posts, * as postSelectors from './posts';
import offers, * as offerSelectors from './offers';
import image, * as imageSelectors from './image';
import auth, * as authSelectors from './auth';
import interfaceState, * as interfaceSelectors from './interface';

const reducer = combineReducers({
  auth,
  belongings,
  categories,
  form: formReducer,
  interfaceState,
  offers,
  posts,
  users,
  image,
});

export default reducer;

// Selectores
export const getCategory = (state, id) => categorySelectors.getCategory(state.categories, id);
export const getCategories = state => categorySelectors.getCategories(state.categories);
export const getCategoryIds = state => categorySelectors.getCategoryIds(state.categories);

export const getBelonging = (state, id) => belongingSelectors.getBelonging(state.belongings, id);
export const getBelongings = state => belongingSelectors.getBelongings(state.belongings);
export const getBeloingsByCategory = (state, categoryId) => getBelongings(state).map(belogin => (belogin.category === parseInt(categoryId, 10) ? belogin.id : undefined));
export const getBeloingsByUser = (state, userId) => getBelongings(state).map(belogin => (belogin.propietaryId === parseInt(userId, 10) ? belogin.id : undefined));

export const getUser = (state, id) => userSelectors.getUser(state.users, id);
export const getUsers = state => userSelectors.getUsers(state.users);

export const getPost = (state, id) => postSelectors.getPost(state.posts, id);
export const getPosts = state => postSelectors.getPosts(state.posts);
export const getPostIds = state => postSelectors.getPostIds(state.posts);

export const getOffer = (state, id) => offerSelectors.getOffer(state.offers, id);
export const getOffers = state => offerSelectors.getOffers(state.offers);
export const getOffersByObject = (state, itemID) => getOffers(state).map(offer => (offer.offeredIn === parseInt(itemID, 10) ? offer : undefined));

export const getToken = state => authSelectors.getToken(state.auth);
export const getLoggedUser = state => authSelectors.getLoggedUser(state.auth);
export const getLoginStatus = state => authSelectors.getLoginStatus(state.auth);

export const getBetCreator = state => interfaceSelectors.getBetCreator(state.interfaceState);

export const getImage = state => imageSelectors.getImage(state.image);
export const getImageConfirmation = state => imageSelectors.getImageConfirmation(state.image);
