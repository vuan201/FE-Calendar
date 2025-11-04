import { createSlice } from '@reduxjs/toolkit'

const baseName = 'appSettings'

const initialState = {
  sidebarExpand: true,
  maxWidthSizebar: 250,
  minWidthSizebar: 50,
}

export const appSettingsSlice = createSlice({
  name: baseName,

  initialState,

  reducers: {
    changeSidebarState: (state) => {
      state.sidebarExpand = !state.sidebarExpand
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSidebarState } = appSettingsSlice.actions

// Export State
export const selectSidebarExpand = (state) => state.appSettings.sidebarExpand
export const selectMaxWidthSizebar = (state) => state.appSettings.maxWidthSizebar
export const selectMinWidthSizebar = (state) => state.appSettings.minWidthSizebar

export default appSettingsSlice.reducer