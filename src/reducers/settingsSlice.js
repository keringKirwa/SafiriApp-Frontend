import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  /* note that both the state and the initial state all mean the same thing . and we are receiving an object from the backend .*/

  name: 'settings',

  initialState: {
    settingsDetails: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  },

  reducers: {
    userDetailsFetched: (state, action) => {
      /* TODO: override the initial settingsDetails */

      console.log(action.payload.data);

      state.settingsDetails = action.payload.data;
    },
  },
});

export const { userDetailsFetched } = settingsSlice.actions;

export default settingsSlice.reducer;
