import { createSlice } from '@reduxjs/toolkit';
/* Note that all these action creators are called once we fetch data from the database. */

export const carSlice = createSlice({
  name: 'cars',
  initialState: { isLoading: true, posts: [],seats:[] },

  reducers: {

    startLoading: (state) => {

      state.isLoading = true;
    },
    endLoading: (state) => {

      state.isLoading = false;
    },
    allCarsFetched: (state, action) => {

      state.posts = action.payload;/* where payload is an array of data from the backend.Again note that we are only changing the posts property and not the isLoading. Again note that awe are overriding the posts array and maintaining all the other prperties of the initialState.*/

    },
    carsFetchedBySearch: (state, action) => {
      
      state.posts = action.payload;/* where payload is an array of data from the backend.Again note that we are only changing the posts property and not the isLoading. */

    },
    oneCarFetched: (state,action) => {
      state.seats = action.payload.data;/* where data is an array of seat objects(seats) */
      
       /* in this case , a payload is a single object.with Immer, here we are creating a new property called post. eg
       action={payload:{ name:'MaiLIMA', seats:'13',availableSeats:20  }} */

    },
  },
});


export const { oneCarFetched,allCarsFetched,startLoading,endLoading ,carsFetchedBySearch} = carSlice.actions;

export default carSlice.reducer;