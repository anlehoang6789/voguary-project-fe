import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetHotProductResponse } from 'types/Product.type';

interface ProductState {
  hotProducts: GetHotProductResponse[] | null;
}

const initialState: ProductState = {
  hotProducts: null
};

const hotProductSlice = createSlice({
  name: 'hotProduct',
  initialState,
  reducers: {
    setHotProducts: (state, action: PayloadAction<GetHotProductResponse[]>) => {
      state.hotProducts = action.payload;
    },

    resetHotProducts: (state) => {
      state.hotProducts = null;
    }
  }
});

export const { setHotProducts, resetHotProducts } = hotProductSlice.actions;

export default hotProductSlice.reducer;
