import { GetAllSizeResponse } from 'types/Size.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SizeAllState {
  sizeAll: GetAllSizeResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: SizeAllState = {
  sizeAll: null,
  loading: false,
  error: null
};

const sizeAllSlice = createSlice({
  name: 'sizeAll',
  initialState,
  reducers: {
    setSizeAll: (state, action: PayloadAction<GetAllSizeResponse>) => {
      state.sizeAll = action.payload;
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
    resetSizeAll: (state) => {
      state.sizeAll = null;
      state.loading = false;
      state.error = null;
    }
  }
});
export const { setSizeAll, setLoading, setError, resetSizeAll } = sizeAllSlice.actions;
export default sizeAllSlice.reducer;
