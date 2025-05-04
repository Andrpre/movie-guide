import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const USER_LOCAL_KEY = "profiles";

interface User {
  name: string;
  isLogined: boolean;
}

interface UserState {
  profiles: User[];
}

const initialState: UserState = {
  profiles: JSON.parse(localStorage.getItem(USER_LOCAL_KEY) || "[]") as User[],
};

const setLocalData = (key: string, newValue: User[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(newValue));
  } catch (e) {
    console.error("Ошибка записи в localStorage:", e);
  }
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authorizeUser: (state, action: PayloadAction<string>) => {
      const existingUser = state.profiles.find((user) => user.name === action.payload);
      if (existingUser) {
        state.profiles = state.profiles.map((user) =>
          user.name === action.payload ? { ...user, isLogined: true } : user
        );
        setLocalData(USER_LOCAL_KEY, state.profiles);
      } else {
        state.profiles = [
          ...state.profiles,
          {
            name: action.payload,
            isLogined: true,
          },
        ];
        setLocalData(USER_LOCAL_KEY, state.profiles);
      }
    },
    logoutUser: (state) => {
      state.profiles = state.profiles.map((user) => ({ ...user, isLogined: false }));
      setLocalData(USER_LOCAL_KEY, state.profiles);
    },
  },
  selectors: {
    selectActiveUserName: (state: UserState) => state.profiles.find((user) => user.isLogined)?.name || null,
  },
});

export const { authorizeUser, logoutUser } = usersSlice.actions;
export const { selectActiveUserName } = usersSlice.selectors;
