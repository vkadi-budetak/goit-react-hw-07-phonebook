import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsReduсer';

export const store = configureStore({
  reducer: contactsReducer,
});
