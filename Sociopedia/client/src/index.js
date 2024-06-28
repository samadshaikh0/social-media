import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import authReducer from './state/index.jsx'; // Ensure this file exists and is correctly exporting the reducer
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'; // Remove .js
import storage from 'redux-persist/lib/storage'; // Remove .js
import {persistStore} from "redux-persist";




const persistConfig = { key: 'root', storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
