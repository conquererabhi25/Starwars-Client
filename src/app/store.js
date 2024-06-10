import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../features/characters/charactersSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    auth: authReducer,
  },
});
