import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/search';

const createRootReducer = () => combineReducers({
  searchState: searchReducer
});

const store = createStore(createRootReducer(), applyMiddleware(thunk));

export default store;
