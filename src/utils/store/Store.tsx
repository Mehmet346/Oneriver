//@ts-ignore 
import { configureStore } from '@reduxjs/toolkit';
//@ts-ignore 
import messageReducer from './store/message';

export const store = configureStore({
  reducer: {
    message: messageReducer
  }
});
