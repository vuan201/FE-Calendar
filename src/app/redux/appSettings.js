import { createSlice } from '@reduxjs/toolkit'

const baseName = 'appSettings'

const initialState = {
  openModal: false,
  sidebarExpand: true,
  maxWidthSizebar: 250,
  minWidthSizebar: 80
}

export const appSettingsSlice = createSlice({
  name: baseName,

  initialState,

  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload
    },
    changeSidebarState: (state) => {
      state.sidebarExpand = !state.sidebarExpand
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSidebarState, setOpenModal } = appSettingsSlice.actions

// Export State
export const selectSidebarExpand = (state) => state.appSettings.sidebarExpand
export const selectMaxWidthSizebar = (state) => state.appSettings.maxWidthSizebar
export const selectMinWidthSizebar = (state) => state.appSettings.minWidthSizebar
export const selectOpenModal = (state) => state.appSettings.openModal

export default appSettingsSlice.reducer