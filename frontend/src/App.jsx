import React, { useState } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateBook from "./components/CreateBook";

function App() {
  const { authUser } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <h1 className=" text-9xl text-center mt-40">404 not found</h1>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {authUser?.role === "admin" && (
          <Route path="/admin" element={<AdminPanel />} />
        )}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
