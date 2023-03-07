//@ts-ignore 
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//@ts-ignore 
import messageReducer from './message';
//@ts-ignore 
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const myReducers = combineReducers({
  message: messageReducer, 
})

const persistedReducer = persistReducer(persistConfig, myReducers)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)