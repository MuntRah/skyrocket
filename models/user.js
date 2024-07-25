const mongoose = require("mongoose");

const applicatonSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    title: String,
    status: {
      type: String,
      enum: ["interested", "applied", "interviewing", "rejected", "accepted"], // it has to be one of these (security things)
    },
    data: Date,
    notes: String,
    postingLink: String,
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicatonSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;