import { create } from 'zustand';

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const isPresent = state.cart.find((item) => item.id === product.id);
      if (!isPresent) {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      } else {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }),
  removeFromCart: (product) =>
    set((state) => {
      const isPresent = state.cart.find((item) => item.id === product.id);
      if (!isPresent) {
        return {
          ...state,
        };
      } else {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }),
}));
