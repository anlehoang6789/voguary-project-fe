import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetProductDetailsByProductIdResponse } from 'types/Product.type';

interface ProductDetailsState {
  productDetails: GetProductDetailsByProductIdResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailsState = {
  productDetails: null,
  loading: false,
  error: null
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProductDetails: (state, action: PayloadAction<GetProductDetailsByProductIdResponse>) => {
      state.productDetails = action.payload;
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
    resetProductDetails: (state) => {
      state.productDetails = null;
      state.loading = false;
      state.error = null;
    }
  }
});
export const { setProductDetails, setLoading, setError, resetProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
