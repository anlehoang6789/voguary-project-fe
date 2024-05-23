import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from 'slice/authSlice';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { authApi } from 'services/auth.services';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [
    // Add reducer keys that you do NOT want to store to persistence here
    'auth'
  ]
};

const rootReducer = combineReducers({
  // Add reducers here
  auth: authSlice,
  [authApi.reducerPath]: authApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
// export default store;
