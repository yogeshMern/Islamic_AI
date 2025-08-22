const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
      default: "Islamic Finance GPT Assistant",
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);

module.exports = { Report };
