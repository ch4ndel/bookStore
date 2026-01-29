import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:3001/book/");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl  mx-auto md:px-20 px-4">
        <div className="mt-28  items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ullam quasi molestias laudantium, unde tenetur, quaerat ut voluptas
            blanditiis aliquid consequatur asperiores nostrum distinctio sit
            alias quis modi odio fugit.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              back
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
