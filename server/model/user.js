import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  trxid: {
    type: Number,
  },
  name: {
    type: String,
    required: [true, "Please provide your name "],
    minLength: [4, "name should up to 4 carecters"],
    maxLength: [20, "name should be 20 carecters"],
  },
  email: {
    type: String,
    required: [true, "email must provide"],
    unique: true,
    validate: [validator.isEmail, "enter a valid email"],
  },
  number: {
    type: Number,
    required: [true, "Number must provide"],
    minLength: [9, "provide with your country code"],
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  nationalid: {
    type: Number,
    required: true,
    minLength: [10, "please provide NID Number"],
  },
  totalsaveing: {
    type: Number,
    default: 0,
  },
  totalloan: {
    type: Number,
    default: 0,
  },
  totalpaidloan: {
    type: Number,
    default: 0,
  },
  totaldueloan: {
    type: Number,
    default: 0,
  },
  totalprofitbyloan: {
    type: Number,
    default: 0,
  },
  daily_saveing: [
    {
      amount: {
        type: Number,
        default: 0,
      },
      day: {
        type: String, // Use String type to store formatted date as a string
        default: function () {
          return new Date().toLocaleDateString("en-US"); // Use toLocaleDateString to format the date
        },
      },
    },
  ],
  monthly_saveing: [
    {
      amount: {
        type: Number,
        default: 0,
      },
      month: {
        type: String, // Use String type to store formatted date as a string
        default: function () {
          return new Date().toLocaleDateString("en-US"); // Use toLocaleDateString to format the date
        },
      },
    },
  ],
  daily_paid_loan: [
    {
      amount: {
        type: Number,
        default: 0,
      },
      day: {
        type: String, // Use String type to store formatted date as a string
        default: function () {
          return new Date().toLocaleDateString("en-US"); // Use toLocaleDateString to format the date
        },
      },
    },
  ],
  monthly_paid_loan: [
    {
      amount: {
        type: Number,
        default: 0,
      },
      month: {
        type: String, // Use String type to store formatted date as a string
        default: function () {
          return new Date().toLocaleDateString("en-US"); // Use toLocaleDateString to format the date
        },
      },
    },
  ],
  widraw: [
    {
      amount: {
        type: Number,
        default: 0,
      },
      date: {
        type: String, // Use String type to store formatted date as a string
        default: function () {
          return new Date().toLocaleDateString("en-US"); // Use toLocaleDateString to format the date
        },
      },
    },
  ],
  perday: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
