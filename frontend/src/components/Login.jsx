import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { storeToken } = useAuth();
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3001/user/login",
        userInfo,
      );

      console.log(res.data);

      if (res.data) {
        storeToken(res.data.token);
        toast.success("Login successful");
        dialogRef.current.close();
        
        // Navigate to where user was trying to go, or course page
        const from = location.state?.from?.pathname || "/course";
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error(
        "Error: " + (err.response?.data?.message || err.message)
      );
    }
    reset();
  };

  useEffect(() => {
    // modal only open if current route is /login
    if (location.pathname === "/login") {
      dialogRef.current?.showModal();
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal" ref={dialogRef}>
          <div className="modal-box">
            <form method="" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  dialogRef.current.close();
                  navigate("/");
                }}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <br />

              <div>
                <span>Email:</span>
                <br />
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />{" "}
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <br />
                <span>Password:</span>
                <br />
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
                <p className="mt-2">
                  Not registered?{" "}
                  <Link to="/signup" className="underline text-blue-500">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;