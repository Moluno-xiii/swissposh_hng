import { configureStore } from "@reduxjs/toolkit";
import menReducer from "./men/menSlice";
import womenReducer from "./women/womenSlice";


export const store = configureStore({
  reducer: {
    men: menReducer,
    women: womenReducer,
  },
});
