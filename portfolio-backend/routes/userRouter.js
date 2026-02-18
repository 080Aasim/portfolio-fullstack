import express from "express";
import { login, signUp } from "../controllers/userController.js";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const userRouter = express.Router();
userRouter.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.json({ success: false, message: "No token" });
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken.id).select("firstName");
    res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});
userRouter.post("/sign-up",signUp);
userRouter.post("/login",login);

export default userRouter;
