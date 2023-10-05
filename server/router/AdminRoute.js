import express from "express";
import {
  register,
  login,
  logout,
  admindetails,
  addDailySaveing,
  addMonthlySaveing,
  addDailyPaidLoan,
  addMonthlyPaidLoan,
  addWidraw,
  addTotalLoan,
  admininvestmentadd,
  totalUserSaveing,
  totalLoanDetails,
  AddProfitToInvest,
  contact,
  getMessage,
  deleteMessage,
  adminNote,
  getNotes,
  deleteNote,
} from "../controller/adminControler.js";
import { isAuthenticate } from "../middelware/auth.js";

export const adminRotuer = express.Router();

adminRotuer.route("/adminregister").post(register);
adminRotuer.route("/adminlogin").post(login);
adminRotuer.route("/logout").get(isAuthenticate, logout);
adminRotuer.route("/admindetails").get(isAuthenticate, admindetails);
adminRotuer
  .route("/admininvestmentadd")
  .post(isAuthenticate, admininvestmentadd);
adminRotuer.route("/dailysaveingadd/:id").post(isAuthenticate, addDailySaveing);
adminRotuer
  .route("/addmonthlysaveing/:id")
  .post(isAuthenticate, addMonthlySaveing);

adminRotuer
  .route("/dailypaidloanadd/:id")
  .post(isAuthenticate, addDailyPaidLoan);
adminRotuer
  .route("/addmonthlypaidloan/:id")
  .post(isAuthenticate, addMonthlyPaidLoan);
adminRotuer.route("/addwidraw/:id").post(isAuthenticate, addWidraw);
adminRotuer.route("/addtotalloan/:id").post(isAuthenticate, addTotalLoan);
adminRotuer.route("/totalusersaveing").get(isAuthenticate, totalUserSaveing);
adminRotuer
  .route("/totalusersloandetails")
  .get(isAuthenticate, totalLoanDetails);
adminRotuer.route("/addprofittoinvest").get(isAuthenticate, AddProfitToInvest);
adminRotuer.route("/contact").post(contact);
adminRotuer.route("/getmessage").get(getMessage);
adminRotuer.route("/deletemessage/:id").delete(deleteMessage);
adminRotuer.route("/adminnote").post(adminNote);
adminRotuer.route("/getnotes").get(getNotes);
adminRotuer.route("/deletenote/:id").delete(deleteNote);
