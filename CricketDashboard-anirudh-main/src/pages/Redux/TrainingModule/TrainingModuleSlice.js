import { createSlice } from "@reduxjs/toolkit";

const initialMatchState = {
  matches: [],
  scores: [],
  loading: false,
  error: null,
};

const matchSlice = createSlice({
  name: "match",
  initialState: initialMatchState,
  reducers: {
    setMatchData: (state, action) => {
      state.matches = action.payload.matches;
      state.scores = action.payload.scores;
      state.loading = false;
      state.error = null;
      console.log(state.matches,state.scores,"hello");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetMatchData: () => initialMatchState,
  },
});

export const { setMatchData, setLoading, setError, resetMatchData } =
  matchSlice.actions;
export default matchSlice.reducer;
