import mongoose from "mongoose";
import usersSchema from "../schema/usersSchema.js";
const userModel = mongoose.model("User", usersSchema);
export default userModel;
