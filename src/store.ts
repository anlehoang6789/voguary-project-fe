// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

// export const persistConfig = {
//   key: 'root',
//   storage: sessionStorage,
//   whitelist: [
//     // Add reducer keys that you do NOT want to store to persistence here
//   ]
// };

// const rootReducer = combineReducers({
//   // Add reducers here
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (defaultMiddleware) =>
//     defaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//     })
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
export {};
