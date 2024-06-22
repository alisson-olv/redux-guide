import { CartActionsType } from './action-types';

export const addProductToCart = (payload) => ({
  type: CartActionsType.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionsType.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionsType.INCREASE_PRODUCT,
  payload,
});

export const descreaseProductQuantity = (payload) => ({
  type: CartActionsType.DECREASE_PRODUCT,
  payload,
});
