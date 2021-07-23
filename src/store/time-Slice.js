import { createSlice } from '@reduxjs/toolkit';


const timeSlice = createSlice({
    name: 'time',
    initialState: { time:new Date().toLocaleString() },
    reducers: {
      tick(state) {
        state.time = new Date().toLocaleString()
      },

    },
  });
  
  export const timeActions = timeSlice.actions;
  
  export default timeSlice.reducer;