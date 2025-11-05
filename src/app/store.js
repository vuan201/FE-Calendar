import { configureStore } from "@reduxjs/toolkit";
import { appSettingsSlice, calendarSlice } from "./redux";

export const store = configureStore({
  reducer: {
    appSettings: appSettingsSlice,
    calendar: calendarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
