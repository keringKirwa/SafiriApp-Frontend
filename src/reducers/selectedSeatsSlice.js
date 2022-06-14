import { createSlice } from '@reduxjs/toolkit';

export const selectedSeatsSlice = createSlice({
  name: 'selectedSeats',
  initialState: {seatsSelected: [] },

  reducers: {

    addedSeat: (state, action) => {
      /* in thsi case we will have to first spread all the properties of the selectedSeats array and then add new seats . */

      state.seatsSelected = [...state.seatsSelected,action.payload.data.seatNo];
    },
    removedSeat: (state,action) => {

        state.seatsSelected = state.seatsSelected.filter(seat => seat !== action.payload.data.seatNo);
    },
   
  },
});


export const { addedSeat, removedSeat } = selectedSeatsSlice.actions;

export default selectedSeatsSlice.reducer;