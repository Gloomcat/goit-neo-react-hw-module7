import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const selectContacts = state => {
  return state.contacts.items;
};

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
