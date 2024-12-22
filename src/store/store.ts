// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slice/langSlice";
import { MediaDataApi } from "../api/mediaApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import fontReducer from './slice/font_increase_decrease'
import themeReducer from './slice/themeSlice'

const store = configureStore({
  reducer: {
    language: languageReducer,
    fontSize: fontReducer,
    theme: themeReducer,
    [MediaDataApi.reducerPath]: MediaDataApi.reducer,  // Fixed the syntax error here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      MediaDataApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
