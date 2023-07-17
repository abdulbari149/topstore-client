import { configureStore } from "@reduxjs/toolkit";
import api from "./services";
import { headerReducer } from "./components/Header";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    header: headerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
