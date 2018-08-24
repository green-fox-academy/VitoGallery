import { combineReducers } from 'redux';
import main from './mainReducer';
import select from './selectReducer';

const rootReducer = combineReducers({
  main,
  // select,
});

export default rootReducer;
