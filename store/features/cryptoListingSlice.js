import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  cryptoLists: [],
  searchCryptoList: [],
  error: "",
};

export const fetchCryptoList = createAsyncThunk(
  "crypto/fetchCryptoList",
  async () => {
    return await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => response.data);
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCryptoList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCryptoList.fulfilled, (state, action) => {
      state.loading = false;
      state.cryptoLists = action.payload;
      state.searchCryptoList = action.payload;
    });
  },
});

export default cryptoSlice.reducer;
