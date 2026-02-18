import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "5d" });
};

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, password, email } = req.body;

    const emailNormalized = email.toLowerCase();
    const exists = await userModel.findOne({ email: emailNormalized });

    if (exists)
      return res.json({ success: false, message: "User Already Exists" });

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      firstName,
      lastName,
      password: hashedPassword,
      email: emailNormalized,
    });

    await newUser.save();
    const token = createToken(newUser._id);
    return res.json({ success: true, message: "Registered", token });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const Email = email.toLowerCase();
    const user = await userModel.findOne({ email: Email });

    if (!user) {
      return res.json({ success: false, message: "User does not exits" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createToken(user._id);
    res.json({ success: true, message: "Login successfully", token, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export { signUp, login };
