import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must provide"],
  },
  email: {
    type: String,
    required: [true, "email must provide"],
  },
  message: {
    type: String,
    required: [true, "message must provide"],
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
