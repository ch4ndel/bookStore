import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset();
  };

  return (
    <>
      <Navbar />

      <div className=" flex items-center justify-center pt-30 m-6">
        <div className="border rounded-lg p-6 w-full max-w-md">

          <h2 className="text-2xl font-bold text-center mb-4">
            Contact Us
          </h2>

          <p className="text-sm text-center mb-6">
            Have a question about books or orders? We’d love to hear from you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">
                  Name is required
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  Email is required
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-xs text-red-500">
                  Message is required
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full border py-2 rounded-md"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
