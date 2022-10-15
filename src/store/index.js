import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import showReducer from './reducers/show';
import seasonReducer from './reducers/season';
import authReducer from './reducers/auth';

const createRootReducer = () => combineReducers({
  authState: authReducer,
  seasonState: seasonReducer,
  showState: showReducer,
});

const store = createStore(createRootReducer(), applyMiddleware(thunk));

export default store;
