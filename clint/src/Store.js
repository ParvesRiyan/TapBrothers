import { configureStore } from "@reduxjs/toolkit";
import { AdminReducer } from "./Reducer/AdminReducer.js";
import {
  GetAllUsers,
  UserDetails,
  UserReducer,
  UserAddition,
  DeleteUser,
  UsersLoanDetails,
  UsersSaveing,
  contact,
} from "./Reducer/UserReducer.js";
import { adminNote } from "./Reducer/AdminNoteReducer.js";

const store = configureStore({
  reducer: {
    admin: AdminReducer,
    user: UserReducer,
    userProfile: UserDetails,
    users: GetAllUsers,
    additionAmount: UserAddition,
    userDelete: DeleteUser,
    usersSaveing: UsersSaveing,
    usersLoanDetails: UsersLoanDetails,
    contact: contact,
    adminNote: adminNote,
  },
});

export default store;
