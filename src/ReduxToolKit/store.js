import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserSlice from "./Slice/userSlice";

// Define the persist config for the slice reducer you want to persist
const persistUserConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistUserConfig, UserSlice);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});
export const persistor = persistStore(store);
export default store;
