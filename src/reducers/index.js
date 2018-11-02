import { combineReducers } from 'redux';
import categories, * as categorySelectors from './categories';
import belongings, * as belongingSelectors from './belongings';
import users, * as userSelectors from './users';

const reducer = combineReducers({
  categories,
  belongings,
  users,
});

export default reducer;

// Selectores
export const getCategory = (state, id) => categorySelectors.getCategory(state.categories, id);
export const getCategories = state => categorySelectors.getCategories(state.categories);
export const getCategoryIds = state => categorySelectors.getCategoryIds(state.categories);

export const getBelonging = (state, id) => {
  console.log(belongingSelectors.getBelonging(state.belongings, id));
  return belongingSelectors.getBelonging(state.belongings, id);
}
export const getBelongings = state => belongingSelectors.getBelongings(state.belongings);
export const getBeloingsByCategory = (state, categoryId) => getBelongings(state).map(belogin => {
  const tempBelongin = getBelonging(state , belogin.id);
  //console.log(tempBelongin);
  return tempBelongin.category === categoryId ? tempBelongin : undefined;
});

export const getUser = (state, id) => userSelectors.getUser(state.users, id);
export const getUsers = state => userSelectors.getUsers(state.users);
