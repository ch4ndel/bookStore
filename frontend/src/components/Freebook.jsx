import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:3001/book/");
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  const filterData = book.filter((data) => data.category === "Free" ||"free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl  mx-auto md:px-20 px-4 mt-12 ">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla
          optio illum amet consequatur exercitationem voluptatum ex quos
          repudiandae omnis.
        </p>
        <div>
          <div className="slider-container mt-8">
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item._id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
