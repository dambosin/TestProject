import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PlayersPage } from '../../api/models';

type Status = 'success' | 'processing' | 'error' | 'idle';

type RootState = {
  page: PlayersPage;
  status: Status;
}

export type ResponsePayload = {
  page?: PlayersPage;
  error?: string;
}

const emptyPage: PlayersPage = {
  players: [],
  total: 0,
};

const initialState: RootState = {
  page: emptyPage,
  status: 'idle',
};
export const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    fetchPlayer: (_state, _action: PayloadAction<boolean>) => { },
    fetchRequest: (state, action: PayloadAction<ResponsePayload>) => {
      state.page = action?.payload?.page ?? emptyPage;
    },
    fetchStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    error: (state, action: PayloadAction<string>) => console.log(action.payload),
  },
})

// Action creators are generated for each case reducer function
export const { fetchPlayer, fetchRequest, fetchStatus, error } = playerSlice.actions

export const playerReducer = playerSlice.reducer;

