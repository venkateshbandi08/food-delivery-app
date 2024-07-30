import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Doesn't exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = createToken(user._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in Login" });
  }
};

// register user

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking is user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists!" });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // password checking
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password, with minimum of 8 characters",
      });
    }

    // hasing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in registering" });
  }
};

export { loginUser, registerUser };
