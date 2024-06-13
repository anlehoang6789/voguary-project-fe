import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/Product.type';

interface ProductState {
  hotProducts: Product[] | null;
}

const initialState: ProductState = {
  hotProducts: null
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setHotProducts: (state, action: PayloadAction<Product[]>) => {
      state.hotProducts = action.payload;
    },

    resetHotProducts: (state) => {
      state.hotProducts = null;
    }
  }
});

export const { setHotProducts, resetHotProducts } = productSlice.actions;

export default productSlice.reducer;
