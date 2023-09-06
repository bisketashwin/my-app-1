// store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your reducers here
import dataReducer from './reducer/dataReducer';

// Combine reducers if you have multiple data types to manage
const rootReducer = combineReducers({
  data: persistReducer(
    {
      key: 'data',
      storage: AsyncStorage,
    },
    dataReducer
  ),
  // Add more reducers if needed
});

// Create the Redux store with Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

// Create a persistor to handle AsyncStorage persistence
const persistor = persistStore(store);

export { store, persistor };
