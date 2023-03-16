const { configureStore } = require("@reduxjs/toolkit");
import crytoRedcuer from "./features/cryptoListingSlice";
const store = configureStore({
  reducer: {
    crypto: crytoRedcuer,
  },
});
export default store;
