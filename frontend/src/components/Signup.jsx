import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/user/signup",
        userInfo
      );

      console.log(res.data);

      if (res.data) {
        toast.success("Signup successful! Please login.");
        reset();
        navigate("/login"); // signup ke baad login page pe redirect
      }
    } catch (err) {
      toast.error("Error: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 p-6 rounded-md w-96">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Signup</h3>
          <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="block">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button type="submit" className="btn btn-secondary">
              Signup
            </button>
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
