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

      /* in the localStorage we will have : 
      {"email":"sisi@gmail.com","name":"samm sam ","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpc2lAZ21haWwuY29tIiwiaWQiOiI2MmEwYTcwNDQzYThlMDMzMTUzN2FmNzciLCJpYXQiOjE2NTQ2OTU2ODQsImV4cCI6MTY1NDY5OTI4NH0.8eAxuGtqmBKM5ObcAZBLvO4SsW6OZ2Ypr-95FYEIOf8"} */

      state.userName = action.payload.data.name;
      state.userId = action.payload.data.email;
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
