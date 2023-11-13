import { LogIn, LogOut, refreshUser, register } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(LogIn.pending, (state, action) => state)
      .addCase(LogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(LogIn.rejected, (state, action) => state)
      .addCase(LogOut.pending,(state,action)=>state)
      .addCase(LogOut.fulfilled,(state,action)=>{
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(LogOut.rejected,(state,action)=>state)
      .addCase(refreshUser.fulfilled,(state,action)=>{
        state.user = action.payload;
        state.isLoggedIn = true;
      })
  }


});

export const authReducer = authSlice.reducer;