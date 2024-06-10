import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  characters: [],
  status: 'idle',
  next: null,
  previous: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (url = 'https://swapi.dev/api/people') => {
    const response = await axios.get(url);
    return response.data;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload.results;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default charactersSlice.reducer;
