import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./slices/favorites.slice";
import { usersSlice } from "./slices/users.slice";

const rootReducer = {
  [favoritesSlice.name]: favoritesSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
