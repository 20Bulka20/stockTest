import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
// Define a type for the slice state
interface StockState {
  quote: Record<string, number>;
}

// Define the initial state using that type
const initialState: StockState = {
  quote: {},
};

export const stockSlice = createSlice({
  name: "stock",
  // `createSlice` will infer the state type from the `initialState` argument
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

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default stockSlice.reducer;
