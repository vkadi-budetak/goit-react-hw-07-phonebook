import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();

      return contacts; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const addContact = await requestAddContact(contact);

      return addContact; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deleteContact = await requestDeleteContact(contactId);

      return deleteContact; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
