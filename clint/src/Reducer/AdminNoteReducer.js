import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const adminNote = createReducer(initialState, {
  CreateAdminNoteRequest: (state) => {
    state.loading = true;
  },
  CreateAdminNoteSuccess: (state, action) => {
    state.loading = false;
    state.adminNote = action.payload;
  },
  CreateAdminNoteFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetAdminNoteRequest: (state) => {
    state.loading = true;
  },
  GetAdminNoteSuccess: (state, action) => {
    state.loading = false;
    state.notes = action.payload;
  },
  GetAdminNoteFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DeleteAdminNoteRequest: (state) => {
    state.loading = true;
  },
  DeleteAdminNoteSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DeleteAdminNoteFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearError: (state) => {
    state.error = null;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
});
