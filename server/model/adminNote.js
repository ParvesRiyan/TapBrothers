import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must provide"],
  },
  date: {
    type: String, // Use String type to store formatted date as a string
    default: function () {
      return new Date().toLocaleDateString("en-US"); // Use toLocaleDateString to format the date
    },
  },
  message: {
    type: String,
    required: [true, "message must provide"],
  },
});

export const AdminNote = mongoose.model("AdminNote", NoteSchema);
