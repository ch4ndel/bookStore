import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  role:{
    type:String,
    default:"user"
  }
  },
  { timestamps: true }
);

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userId: this._id.toString(),
      role:this.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const User = mongoose.model("User", userSchema);
export default User;