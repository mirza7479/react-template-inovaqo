import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { userRole } = UserSlice.actions;

export default UserSlice.reducer;
