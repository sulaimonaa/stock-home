import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = '2a983b252a14dce3b861a39db579c57f';

export const FetchStockLists = createAsyncThunk(
  'stocks/fetchstocks',
  async () => {
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/stock/list?apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Something went wrong with fetching data');
    }
  }
);

const initialState = {
  value: [],
  status: 'idle',
  error: false,
};

const stockListReducer = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchStockLists.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(FetchStockLists.fulfilled, (state, action) => ({
        ...state,
        status: 'successful',
        value: action.payload,
      }))
      .addCase(FetchStockLists.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
});

export default stockListReducer.reducer;
