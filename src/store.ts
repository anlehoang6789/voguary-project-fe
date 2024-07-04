import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authLoginGoogleSlice from 'slice/authLoginGoogleSlice';
import authLoginAPISlice from 'slice/authLoginAPISlice';
import userProfileSlice from 'slice/userProfileSlice';
import { productApi } from 'services/product.services';
import { authApi } from 'services/auth.services';
import hotProductSlice from 'slice/hotProductSlice';
import productAllSlice from 'slice/productSlice';
import { userApi } from 'services/user.services';
import { notiApi } from 'services/notification.services';
import productDetailsSlice from 'slice/productDetailsSlice';
import { orderApi } from 'services/order.services';
import { categoryApi } from 'services/category.services';
import { colorApi } from 'services/color.services';
import { sizeApi } from 'services/size.services';
import { cartApi } from 'services/cart.services';
import { paymentApi } from 'services/payment.services';
import sizeAllSlice from 'slice/sizeAllSlice';
import { searchApi } from 'services/search.services';
import { inventoryApi } from 'services/inventory.services';
import { dashboardApi } from 'services/dashboard.services';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authLoginGoogle', 'authLoginAPI', 'userProfile', 'hotProduct', 'productAll', 'productDetails', 'sizeAll']
};

const rootReducer = combineReducers({
  authLoginGoogle: authLoginGoogleSlice,
  authLoginAPI: authLoginAPISlice,
  userProfile: userProfileSlice,
  hotProduct: hotProductSlice,
  productAll: productAllSlice,
  productDetails: productDetailsSlice,
  sizeAll: sizeAllSlice,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [notiApi.reducerPath]: notiApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [colorApi.reducerPath]: colorApi.reducer,
  [sizeApi.reducerPath]: sizeApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [inventoryApi.reducerPath]: inventoryApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer
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
      .concat(productApi.middleware)
      .concat(notiApi.middleware)
      .concat(orderApi.middleware)
      .concat(categoryApi.middleware)
      .concat(colorApi.middleware)
      .concat(sizeApi.middleware)
      .concat(cartApi.middleware)
      .concat(paymentApi.middleware)
      .concat(searchApi.middleware)
      .concat(inventoryApi.middleware)
      .concat(dashboardApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
