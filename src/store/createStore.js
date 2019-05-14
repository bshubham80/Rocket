import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

const appReducers = combineReducers({
  user: userReducer,
});

const store = createStore(appReducers, {});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
