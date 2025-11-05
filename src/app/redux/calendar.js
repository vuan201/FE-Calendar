import { createSlice } from "@reduxjs/toolkit";

const baseName = "calendar";

const initialState = {
  selectedTime: new Date(),
};

export const calendarSlice = createSlice({
  name: baseName,

  initialState,

  reducers: {
    setSelectedTime: (state, action) => {
        state.selectedTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedTime } = calendarSlice.actions;

// Export State
export const selectedTime = (state) => state.calendar.selectedTime;

export default calendarSlice.reducer;
