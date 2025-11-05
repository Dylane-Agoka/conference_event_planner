import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './state_management/venueSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
  },
});
