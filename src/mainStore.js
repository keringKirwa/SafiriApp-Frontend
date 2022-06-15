import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/authSlice.js';
import carReducer from './reducers/carSlice';
import cartSlice from './reducers/selectedSeatsSlice';
import settingsSlice from './reducers/settingsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cars: carReducer,
    selectedSeats: cartSlice,
    settings: settingsSlice,
  },
});

/* Note that both cars and user are objects/array , that contain the data that is being worked on. */
