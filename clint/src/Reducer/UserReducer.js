import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const UserReducer = createReducer(initialState, {
  UserCreatedRequest: (state) => {
    state.loading = true;
  },
  UserCreatedSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  UserCreatedFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UpdateUserRequest: (state) => {
    state.loading = true;
  },
  UpdateUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  UpdateUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
  ClearError: (state) => {
    state.error = null;
  },
});

export const UserDetails = createReducer(initialState, {
  GetUserDetailsRequest: (state) => {
    state.loading = true;
  },
  GetUserDetailsSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  GetUserDetailsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
  ClearError: (state) => {
    state.error = null;
  },
});

export const GetAllUsers = createReducer(initialState, {
  GetAllUsersRequest: (state) => {
    state.loading = true;
  },
  GetAllUsersSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  GetAllUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
  ClearError: (state) => {
    state.error = null;
  },
});

export const UserAddition = createReducer(initialState, {
  AddWidrawRequest: (state) => {
    state.loading = true;
  },
  AddWidrawSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddWidrawFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DailySaveingAddRequest: (state) => {
    state.loading = true;
  },
  DailySaveingAddSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DailySaveingAddFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  MonthlySaveingAddRequest: (state) => {
    state.loading = true;
  },
  MonthlySaveingAddSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  MonthlySaveingAddFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  AddTotalLoanRequest: (state) => {
    state.loading = true;
  },
  AddTotalLoanSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddTotalLoanFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DailyPaidLoanAddRequest: (state) => {
    state.loading = true;
  },
  DailyPaidLoanAddSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DailyPaidLoanAddFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  MonthlyPaidLoanAddRequest: (state) => {
    state.loading = true;
  },
  MonthlyPaidLoanAddSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  MonthlyPaidLoanAddFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  AddProfitToInvestRequest: (state) => {
    state.loading = true;
  },
  AddProfitToInvestSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddProfitToInvestFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
  ClearError: (state) => {
    state.error = null;
  },
});

export const DeleteUser = createReducer(initialState, {
  DeleteUserRequest: (state) => {
    state.loading = true;
  },
  DeleteUserSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DeleteUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearMessage: (state) => {
    state.message = null;
  },
  ClearError: (state) => {
    state.error = null;
  },
});

export const UsersSaveing = createReducer(initialState, {
  GetTotalUserSaveingRequest: (state) => {
    state.loading = true;
  },
  GetTotalUserSaveingSuccess: (state, action) => {
    state.loading = false;
    state.totalsaveing = action.payload;
  },
  GetTotalUserSaveingFailure: (state, action) => {
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

export const UsersLoanDetails = createReducer(initialState, {
  GetTotalUserLoanDetailsRequest: (state) => {
    state.loading = true;
  },
  GetTotalUserLoanDetailsSuccess: (state, action) => {
    state.loading = false;
    state.loanDetails = action.payload;
  },
  GetTotalUserLoanDetailsFailure: (state, action) => {
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

export const contact = createReducer(initialState, {
  CreateUserContactRequest: (state) => {
    state.loading = true;
  },
  CreateUserContactSuccess: (state, action) => {
    state.loading = false;
    state.contact = action.payload;
  },
  CreateUserContactFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetUserMessageRequest: (state) => {
    state.loading = true;
  },
  GetUserMessageSuccess: (state, action) => {
    state.loading = false;
    state.messages = action.payload;
  },
  GetUserMessageFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DeleteUserMessageRequest: (state) => {
    state.loading = true;
  },
  DeleteUserMessageSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DeleteUserMessageFailure: (state, action) => {
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
