import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  search: searchReducer
});