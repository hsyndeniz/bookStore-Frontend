import { combineReducers } from 'redux';
import bookReducers from './books';
import searchReducers from './search';

export default combineReducers({
  bookReducers,
  searchReducers
});