import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  cryptoLists: [],
  searchCryptoList: [],
  data: [],
  error: "",
};

export const fetchCryptoList = createAsyncThunk(
  "crypto/fetchCryptoList",
  async () => {
    return await axios.get("/api/cryptolist").then((response) => response.data);
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    sortLowToHigh: (state, action) => {
      state.cryptoLists = state.cryptoLists.sort(
        (a, b) => a.current_price - b.current_price
      );
    },
    sortHighToLow: (state, action) => {
      state.cryptoLists = state.cryptoLists.sort(
        (a, b) => b.current_price - a.current_price
      );
    },
    searchCrypto: (state, action) => {
      state.searchCryptoList = action.payload;
    },
    filterByCategory: (state, action) => {
      state.cryptoLists = state.data.filter((item) =>
        item.categories.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCryptoList.fulfilled, (state, action) => {
      state.loading = false;
      state.cryptoLists = action.payload;
      state.searchCryptoList = action.payload;
      state.data = action.payload;
    });
  },
});

export default cryptoSlice.reducer;
export const { searchCrypto, sortHighToLow, sortLowToHigh, filterByCategory } =
  cryptoSlice.actions;
