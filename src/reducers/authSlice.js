import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userEmail: '',
  },

  reducers: {
    signup: (state, action) => {
      localStorage.setItem('profile', JSON.stringify(action.payload.data));

      state.userName = action.payload.data.name;
      state.userEmail = action.payload.data.email;
    },
    signin: (state, action) => {
      /* TODO: populate the user details to the local storage here not in the register page . */

      localStorage.setItem('profile', JSON.stringify(action.payload.data));

      state.userName = action.payload.data.name;
      state.userId = action.payload.data.email;
    },

    logout: (state) => {
      window.localStorage.clear();
      state.userName = '';
      state.userId = '';
    },
  },
});

/* NOTE ,the action creators are generated for each case reducer function , in this case , the actions actually refers to the reducer function . */

export const { logout, login, signup } = authSlice.actions;

export default authSlice.reducer;
