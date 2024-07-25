import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    notes: []  // Start with an empty array
};

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const note = {
                id: nanoid(),
                title: action.payload.title,
                text: action.payload.text,
                timestamp: Date.now()
            };
            state.notes.push(note); 
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },
        updateNote: (state, action) => {
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return { ...note, title: action.payload.title, text: action.payload.text };
                }
                return note;
            });
        }
    }
});

export const { addNote, removeNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
