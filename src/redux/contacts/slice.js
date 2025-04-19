import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations";
import { logout } from "../auth/operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    deleteItemId: null,
    editItemId: null,
  },
  reducers: {
    setDeleteContactId: (state, action) => {
      state.deleteItemId = action.payload;
    },
    setEditContactId: (state, action) => {
      state.editItemId = action.payload;
    },
  },
  extraReducers: (builder) => {
    buildReducers(builder, fetchContacts, (state, action) => {
      state.items = action.payload;
    });

    buildReducers(builder, addContact, (state, action) => {
      state.items.push(action.payload);
    });

    buildReducers(builder, deleteContact, (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    });

    buildReducers(builder, updateContact, (state, action) => {
      var updatedContact = action.payload;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id !== updatedContact.id) continue;

        state.items[i] = updatedContact;
        break;
      }
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.items = [];
    });
  },
});

function buildReducers(builder, operation, reducerFunc) {
  builder
    .addCase(operation.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(operation.fulfilled, (state, action) => {
      state.loading = false;
      reducerFunc(state, action);
    })
    .addCase(operation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
}

export default slice.reducer;

export const { setDeleteContactId, setEditContactId } = slice.actions;
