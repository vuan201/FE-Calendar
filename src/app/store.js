import { configureStore } from "@reduxjs/toolkit";
import { appSettingsSlice } from "./redux";

export const store = configureStore({
  reducer: {
    appSettings: appSettingsSlice
  },
});
