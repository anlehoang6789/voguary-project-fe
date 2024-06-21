import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetProductResponse } from 'types/Product.type';

interface AllProductState {
  allProduct: GetProductResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: AllProductState = {
  allProduct: null,
  loading: false,
  error: null
};

const productAllSlice = createSlice({
  name: 'productAll',
  initialState,
  reducers: {
    setAllProduct: (state, action: PayloadAction<GetProductResponse>) => {
      state.allProduct = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetAllProduct: (state) => {
      state.allProduct = null;
      state.loading = false;
      state.error = null;
    }
  }
});
export const { setAllProduct, setLoading, setError, resetAllProduct } = productAllSlice.actions;
export default productAllSlice.reducer;
