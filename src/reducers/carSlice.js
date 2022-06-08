import { createSlice } from '@reduxjs/toolkit';
/* Note that all these action creators are called once we fetch data from the database. */

export const carSlice = createSlice({
  name: 'cars',
  initialState: { isLoading: true, posts: [],post:{} },

  reducers: {

    startLoading: (state) => {

      state.isLoading = true;
    },
    endLoading: (state) => {

      state.isLoading = false;
    },
    allCarsFetched: (state, action) => {

      state.posts = action.payload;/* where payload is an array of data from the backend.Again note that we are only changing the posts property and not the isLoading. */

    },
    carsFetchedBySearch: (state, action) => {
      
      state.posts = action.payload;/* where payload is an array of data from the backend.Again note that we are only changing the posts property and not the isLoading. */

    },
    oneCarFetched: (state,action) => {
      state.post = action.payload;
      
       /* in this case , a payload is a single object.with Immer, here we are creating a new property called post. eg
       action={payload:{ name:'MaiLIMA', seats:'13',availableSeats:20  }} */

    },
  },
});


export const { oneCarFetched,allCarsFetched,startLoading,endLoading } = carSlice.actions;

export default carSlice.reducer;