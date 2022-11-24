import { createSlice } from "@reduxjs/toolkit";

interface StockState {
  quote: Record<string, number>;
}

const initialState: StockState = {
  quote: {},
};

export const stockSlice = createSlice({
  name: "stock",

  initialState,
  reducers: {
    setQuote: (state, payload) => {
      const quote = payload.payload;
      state.quote = quote;
      return state;
    },
  },
});

export const { setQuote } = stockSlice.actions;

export default stockSlice.reducer;
