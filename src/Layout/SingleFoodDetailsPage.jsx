import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleFoodDetailsPage = () => {

  const food = useLoaderData();
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = food || {}

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mt-10">Food Details </h2>
      <div className="max-w-[1300px] mx-auto lg:px-0 my-10">
        <div className="glass rounded-lg p-10">
          <div>
            <img src={foodImage} className="rounded-lg shadow-2xl w-full" alt="car!" />
          </div>
          <div className="card w-full relative flex flex-row justify-around items-center ">


            <div className="flex justify-between items-center my-10">
              <div className="w-2/3 border-l-8 px-3 rounded-2xl border-yellow-600">
                <h2 className="text-4xl font-bold mb-2">Food Name: {foodName}</h2>
                <h2 className="text-2xl font-bold mb-2">Category: {foodType}</h2>
                <h2 className="text-2xl font-bold mb-2">Maker: {foodMakerName}</h2>
                <h2 className="text-2xl font-bold mb-2">Origin (country): {foodOrigin}</h2>
                <h2 className="text-2xl font-bold mb-4 text-black">Quantity: {foodQuantity}</h2>
                <p className="text-3xl font-bold my-3 text-yellow-600">Food Price: ${foodPrice}</p>
              </div>

              <div className="w-1/3">
                <h2 className="text-4xl font-bold mb-4">Food Description</h2>
                <p className="text-justify font-semibold">{foodDescription}</p>

              </div>
            </div>
          </div> <Link to={`/purchase/${_id}`} >
          <div className="w-full bg-black text-white mx-auto text-center p-5 font-bold rounded-full">


           Order Now
          </div> </Link>
          </div>
      </div>

    </div>


  );
};

export default SingleFoodDetailsPage;