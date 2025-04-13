import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
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
