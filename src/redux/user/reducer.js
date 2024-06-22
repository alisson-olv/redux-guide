import { UserActionType } from './action-types';

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionType.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
