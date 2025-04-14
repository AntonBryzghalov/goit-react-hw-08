import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const genericErrorMessage =
  "There was an error. Try to update page a bit later";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = generateThunk("contacts/fetchAll", () => {
  return axios.get("/contacts");
});

export const addContact = generateThunk("contacts/add", (contact) => {
  return axios.post("/contacts", contact);
});

export const deleteContact = generateThunk("contacts/delete", (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
});

export const updateContact = generateThunk("contacts/update", (contact) => {
  const data = { name: contact.name, number: contact.number };
  return axios.patch(`/contacts/${contact.id}`, data);
});

function generateThunk(name, requestFunc) {
  return createAsyncThunk(name, async (arg, thunkAPI) => {
    try {
      const response = await requestFunc(arg);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });
}
