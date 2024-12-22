// src/features/fontSize/fontSizeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FontSizeState {
  size: number;
}

const initialState: FontSizeState = {
  size: 16, // default font size
};

const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState,
  reducers: {
    increaseFontSize: (state) => {
        state.size === 24 ? state.size = 24 : state.size += 2
    },
    decreaseFontSize: (state) => {
      state.size === 12 ? state.size = 12 : state.size -= 2
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload; // Set custom font size
    },
  },
});

// Export the actions
export const { increaseFontSize, decreaseFontSize, setFontSize } = fontSizeSlice.actions;

// Export the reducer
export default fontSizeSlice.reducer;
