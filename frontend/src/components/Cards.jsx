import React from "react";

function Cards({ item }) {
 
  return (
    <>
      <div className="mt-4  p-3" >
        <div className="card pt-12 bg-base-100 w-86 shadow-md border  hover:scale-105 duration-200 transition-all ease-in dark:border-white shadow-gray-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
              {item.title}
            </p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 cursor-pointer ">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
