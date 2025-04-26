import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IMovieWithUserName } from "../../types/apiData";

interface FavoritesState {
  items: IMovieWithUserName[];
}

const initialState: FavoritesState = {
  items: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IMovieWithUserName>) => {
      const existingItem = state.items.find((item) => item.imdbId === action.payload.imdbId);
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.imdbId !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
  selectors: {
    selectFavorites: (state: FavoritesState) => state.items,
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const { selectFavorites } = favoritesSlice.selectors;
