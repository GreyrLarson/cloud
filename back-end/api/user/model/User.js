const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"]
  },
  email: {
    type: String,
    required: [true, "Please enter your email"]
  },
  password: {
    type: String,
    required: [true, "Please enter your password"]
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

// method to hash the password before saving the user model in the database
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// method to generate an auth token for the user
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, username: user.username, email: user.email },
  "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// method to find User by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;