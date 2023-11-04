import { createSelector } from "@reduxjs/toolkit";

const selectContactsStore = state => state;

export const selectContacts = createSelector(
    selectContactsStore,
  state => state.contacts.items
);
export const selectContactsisLoading = createSelector(
    selectContactsStore,
    state => state.contacts.isLoading
);
export const selectContactsError = createSelector(
    selectContactsStore,
    state => state.contacts.error
);
export const selectContactsFilter = createSelector(
    selectContactsStore,
    state => state.filter
);
