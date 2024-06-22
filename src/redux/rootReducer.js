import cartReducer from './cart/slice';
import { userReducer } from './user/reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});
