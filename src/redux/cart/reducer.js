// JUST EXAMPLE FROM OLD REDUX CODE
import { CartActionsType } from './action-types';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsType.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionsType.REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };

    case CartActionsType.INCREASE_PRODUCT:
      const updatedProductsIncreased = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return { ...state, products: updatedProductsIncreased };

    case CartActionsType.DECREASE_PRODUCT:
      const updatedProductsDecreased = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
      return { ...state, products: updatedProductsDecreased };

    default:
      return state;
  }
};
