import { createSelector } from "@reduxjs/toolkit";
import { selectFilterByName } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterByName],
  (contacts, filterValue) => {
    const loweredFilterValue = filterValue.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(loweredFilterValue) ||
        contact.number.includes(loweredFilterValue)
    );
  }
);
