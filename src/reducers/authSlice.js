import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userEmail: '',
  },

  reducers: {

    /*The following are the actions to update the slice , that is produce a copy of the intial state , then return that copy to the store ,------->login actionCreator updates the user state */

    signup: (state, action) => {

      /* note that action in this case is an object  having an object containing the data PROPERTY, that data has the data deails.  */
      
      localStorage.setItem('profile', JSON.stringify(action.payload.data));
      
      state.userName = action.payload.data.name;
      console.log(action.payload.data.name);
      state.userId = action.payload.data.email;/* adding a new property using the Immer function . */
      console.log(state.email);
    },
    signin: (state, action) => {
      
      localStorage.setItem('profile', JSON.stringify(action.payload.data));

      state.userName = action.payload.data.name;
      state.userId = action.payload.data.email;
    },

    /* clear the user detals from the store of the application . */

    logout: (state) => {
      window.localStorage.clear();
      state.userName = '';
      state.userId = '';
    },
  },
});

/* NOTE ,the action creators are generated for each case reducr function , in this case , the actions actually refers to the reducer function . */

export const { logout, login,signup } = authSlice.actions;

export default authSlice.reducer;
