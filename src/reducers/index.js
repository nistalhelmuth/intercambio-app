import { combineReducers } from 'redux';
import categories, * as categorySelectors from './categories';
import belongings, * as belongingSelectors from './belongings';

const reducer = combineReducers({
  categories,
  belongings,
});

export default reducer;

// Selectores
export const getCategory = (state, id) => categorySelectors.getCategory(state.categories, id);
export const getCategories = state => categorySelectors.getCategories(state.categories);
export const getCategoryIds = state => categorySelectors.getCategoryIds(state.categories);
export const getBelonging = (state, id) => belongingSelectors.getBelonging(state.belongings, id);
export const getBelongings = state => belongingSelectors.getBelongings(state.belongings);
