import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Navbar/>
   <div className="max-w-screen-2xl mx-auto md:px-20 px-6 py-16">
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">
      About <span className="text-primary">bookStore</span>
    </h1>
    <p className="max-w-2xl mx-auto ">
      Your one-stop destination for discovering, learning, and growing through books.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-2xl font-semibold mb-4 ">
        Who We Are
      </h2>
      <p className="mb-4 ">
        <strong>bookStore</strong> is an online platform built for book lovers, learners, and curious minds. We believe that books have the power to inspire, educate, and transform lives.
      </p>
      <p className="mb-4 ">
        Whether you’re looking for technical courses, academic resources, or casual reading, bookStore helps you find the right content easily and quickly.
      </p>
    </div>

    {/* Right Content */}
    <div className="bg-base-200 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 ">
        What We Offer
      </h2>
      <ul className="space-y-3 ">
        <li>📚 Wide collection of books & courses</li>
        <li>🔐 Secure user authentication</li>
        <li>🌙 Light & dark mode support</li>
        <li>⚡ Fast and user-friendly experience</li>
        <li>🎓 Learning-focused content</li>
      </ul>
    </div>
  </div>

  {/* Mission Section */}
  <div className="mt-16 text-center">
    <h2 className="text-2xl font-semibold mb-4 ">
      Our Mission
    </h2>
    <p className="max-w-3xl mx-auto ">
      Our mission is to make knowledge accessible to everyone by providing a modern, easy-to-use platform where users can explore books and courses that truly matter.
    </p>
  </div>
</div>
<Footer/>

    </>
  );
}

export default About;
