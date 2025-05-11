import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieWithUserName } from "../../types/apiData";

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
      state.items.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    removeFromFavorites: (state, action: PayloadAction<{ imdbId: string; activeUserName: string | null }>) => {
      state.items = state.items.filter((item) => {
        if (item.userName !== action.payload.activeUserName) {
          return true;
        }

        return item.imdbId !== action.payload.imdbId;
      });
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
  selectors: {
    selectFavorites: (state: FavoritesState) => state.items,
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const { selectFavorites } = favoritesSlice.selectors;
