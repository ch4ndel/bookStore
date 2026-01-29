import React from "react";

import BannerImg from "../assets/images/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="  flex flex-col md:flex-row max-w-screen-2xl  mx-auto md:px-20 px-4  mt-16">
        <div className="w-full md:w-1/2 mt-10 md:mt-16 lg:mt-32 order-2 md:order-1">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold mt-6 md:mt-12">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="mt-4 md:mt-12 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              in error et dolores nostrum minus unde perspiciatis non? Vel quo
              nemo alias velit
            </p>
            <label className="input validator focus-within:outline-none">
              <svg
                className="h-[1em] opacity-50 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required  />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary ">Secondary</button>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 md:pt-20 ">
          <img src={BannerImg} className="w-full block object-cover" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
