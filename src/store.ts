import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authLoginGoogleSlice from 'slice/authLoginGoogleSlice';
import authLoginAPISlice from 'slice/authLoginAPISlice';
import { userApi } from 'services/user.services';
import userProfileSlice from 'slice/userProfileSlice';
import { productApi } from 'services/product.services';
import { authApi } from 'services/auth.services';
import hotProductSlice from 'slice/hotProductSlice';
import productAllSlice from 'slice/productSlice';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authLoginGoogle', 'authLoginAPI', 'userProfile', 'hotProduct', 'productAll']
};

const rootReducer = combineReducers({
  authLoginGoogle: authLoginGoogleSlice,
  authLoginAPI: authLoginAPISlice,
  userProfile: userProfileSlice,
  hotProduct: hotProductSlice,
  productAll: productAllSlice,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer
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
      .concat(productApi.middleware)
      .concat(userApi.middleware)
      .concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
