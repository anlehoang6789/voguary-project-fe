import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authLoginGoogleSlice from 'slice/authLoginGoogleSlice';
import authLoginAPISlice from 'slice/authLoginAPISlice';
import { userApi } from 'services/user.services';
import userProfileSlice from 'slice/userProfileSlice';
import { productApi } from 'services/product.services';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authLoginGoogle', 'authLoginAPI', 'userProfile', 'productApi']
};

const rootReducer = combineReducers({
  authLoginGoogle: authLoginGoogleSlice,
  authLoginAPI: authLoginAPISlice,
  userProfile: userProfileSlice,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer // Thêm productApi.reducer vào rootReducer
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
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
