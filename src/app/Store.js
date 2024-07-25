import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../features/note/noteSlice.js';
import { loadState, saveState } from '../features/note/localStorage.js';


const preloadedState = loadState();


export const Store = configureStore({
    reducer: noteReducer,
    preloadedState
})

Store.subscribe(() => {
    saveState(Store.getState());
  });