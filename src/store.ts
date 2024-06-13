import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { authApi } from 'services/auth.services';
import storage from 'redux-persist/lib/storage';
import authLoginGoogleSlice from 'slice/authLoginGoogleSlice';
import authLoginAPISlice from 'slice/authLoginAPISlice';
import { userApi } from 'services/user.services';
import userProfileSlice from 'slice/userProfileSlice';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [
    // Add reducer keys that you do NOT want to store to persistence here
    'authLoginGoogle',
    'authLoginAPI',
    'userProfile'
  ]
};

const rootReducer = combineReducers({
  // Add reducers here
  authLoginGoogle: authLoginGoogleSlice,
  authLoginAPI: authLoginAPISlice,
  userProfile: userProfileSlice,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(authApi.middleware)
      .concat(userApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
// export default store;
