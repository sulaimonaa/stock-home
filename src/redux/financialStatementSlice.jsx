import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_KEY = '2a983b252a14dce3b861a39db579c57f';

export const FetchFinancialStatements = createAsyncThunk(
  'financialstatements/fetchstatement',
  async () => {
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=${API_KEY}`
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

const financialStatementReducer = createSlice({
  name: 'financialstatements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchFinancialStatements.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(FetchFinancialStatements.fulfilled, (state, action) => ({
        ...state,
        status: 'successful',
        value: action.payload,
      }))
      .addCase(FetchFinancialStatements.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
});

export default financialStatementReducer.reducer;
