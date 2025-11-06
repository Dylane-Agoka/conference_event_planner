import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './state_management/venueSlice';
import avReducer from './state_management/avSlice';
import mealsReducer from './state_management/mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});
