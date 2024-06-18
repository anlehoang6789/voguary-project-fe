import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authLoginGoogleSlice from 'slice/authLoginGoogleSlice';
import authLoginAPISlice from 'slice/authLoginAPISlice';
import { userApi } from 'services/user.services';
import userProfileSlice from 'slice/userProfileSlice';
import { productApi } from 'services/product.services';
import { authApi } from 'services/auth.services';
import { notiApi } from 'services/notification.services';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authLoginGoogle', 'authLoginAPI', 'userProfile', 'productApi']
};

const rootReducer = combineReducers({
  authLoginGoogle: authLoginGoogleSlice,
  authLoginAPI: authLoginAPISlice,
  userProfile: userProfileSlice,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [notiApi.reducerPath]: notiApi.reducer
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
      .concat(productApi.middleware) // Thêm productApi.middleware vào middleware của configureStore
      .concat(userApi.middleware)
      .concat(productApi.middleware)
      .concat(notiApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
