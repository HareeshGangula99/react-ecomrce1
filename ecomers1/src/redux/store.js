import { createStore, combineReducers } from 'redux';
import { productReducer, categoryReducer } from './reducers';

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducer);

export default store;
