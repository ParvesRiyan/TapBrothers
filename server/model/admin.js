import mongoose from "mongoose";
import validator from "validator";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must provide"],
  },
  email: {
    type: String,
    required: [true, "provide email bro"],
    validate: [validator.isEmail, "provide a valide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "provide a strong password"],
    minLength: [6, "password should be in 6 carecters"],
    select: false,
  },
  number: {
    type: Number,
    required: [true, "enter your Number with country code"],
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
  totalusersaveing: {
    type: Number,
    default: 0,
  },
  totaluserloan: {
    type: Number,
    default: 0,
  },
  totaluserpaidloan: {
    type: Number,
    default: 0,
  },
  totaluserdueloan: {
    type: Number,
    default: 0,
  },
  totalprofitbyuser: {
    type: Number,
    default: 0,
  },
  profitatthismonth: {
    type: Number,
    default: 0,
  },
  admininvestment: [
    {
      name: String,
      amount: Number,
    },
  ],
  totalinvestment: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default: "Admin",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

adminSchema.methods.generateToken = async function () {
  return await Jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

export const Admin = mongoose.model("Admin", adminSchema);
