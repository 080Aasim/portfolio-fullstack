import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"


const authMiddleware = async (req,res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.json({
                success: false,
                message: "AUthentication token missing"
            })
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await userModel.findById(decode.id).select("-password")
        if(!req.user) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export default authMiddleware