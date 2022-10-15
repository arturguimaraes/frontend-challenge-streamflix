import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import seasonReducer from './reducers/season';
import showReducer from './reducers/show';

const createRootReducer = () => combineReducers({
  seasonState: seasonReducer,
  showState: showReducer,
});

const store = createStore(createRootReducer(), applyMiddleware(thunk));

export default store;
