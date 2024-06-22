import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    removeProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id !== action.payload),
      ];
    },
    increaseProductQuantity: (state, action) => {
      const updatedProductsIncreased = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      state.products = updatedProductsIncreased;
    },
    decreaseProductQuantity: (state, action) => {
      const updatedProductsDecreased = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
      state.products = updatedProductsDecreased;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartReducer.actions;

export default cartReducer.reducer;
