import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REDUCER_KEY } from '~/@types/redux';

type InitialStateType = {
  connectionId: string | undefined;
};

const initialState: InitialStateType = {
  connectionId: undefined
};

export const connectionSlice = createSlice({
  name: REDUCER_KEY.CONNECTION,
  initialState,
  reducers: {
    socketConnection: (state, action: PayloadAction<string>) => {
      state.connectionId = action.payload;
    }
  }
});

export const { socketConnection } = connectionSlice.actions;

export default connectionSlice.reducer;
