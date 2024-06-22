import { UserActionType } from '../../redux/user/action-types';

export const loginUser = (payload) => ({
  type: UserActionType.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionType.LOGOUT,
});
