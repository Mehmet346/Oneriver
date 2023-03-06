//@ts-ignore 
import { configureStore } from '@reduxjs/toolkit';
//@ts-ignore 
import messageReducer from './message';

export const store = configureStore({
  reducer: {
    message: messageReducer
  }
});
