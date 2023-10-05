import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const AdminReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.admin = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  AdminInvestmentAddRequest: (state) => {
    state.loading = true;
  },
  AdminInvestmentAddSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AdminInvestmentAddFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  RegisterAdminRequest: (state) => {
    state.loading = true;
  },
  RegisterAdminSuccess: (state, action) => {
    state.loading = false;
    state.admin = action.payload;
  },
  RegisterAdminFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LogoutAdminRequest: (state) => {
    state.loading = true;
  },
  LogoutAdminSuccess: (state, action) => {
    state.loading = false;
    state.admin = null;
    state.isAuthenticated = false;
  },
  GetAdminRequest: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  GetAdminSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.admin = action.payload;
  },
  GetAdminFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  ClearError: (state) => {
    state.error = null;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
});
