const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const employerSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password shouldnt contain the word password");
        }
      },
    },
  },
  {
    versionKey: false,
  }
);


employerSchema.methods.toJSON = function () {
  const employer = this;
  const employerObject = employer.toObject();

  delete employerObject.password;

  return employerObject;
};

employerSchema.statics.findByCredentials = async (email, password) => {
  const employer = await Employer.findOne({ email });

  if (!employer) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, employer.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return employer;
};

employerSchema.pre("save", async function (next) {
  const employer = this;

  if (employer.isModified("password")) {
    employer.password = await bcrypt.hash(employer.password, 8);
  }

  next();
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
