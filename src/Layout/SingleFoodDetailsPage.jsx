import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleFoodDetailsPage = () => {
  
  const food = useLoaderData();
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = food || {}

  return (
    <div className="mx-5 md:mx-10 lg:mx-15 my-4 md:my-8 lg:my-12">
      <Helmet>
        <title>{'Corner Cafe | Food Details'}</title>
      </Helmet>
      <h1 data-aos="zoom-in" className=" p-5 text-4xl font-bold text-center border-t-8 text-yellow-600 rounded-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Food Details Page</h1>
      <div className="border-2 border-b-2 rounded-2xl border-yellow-600">
        <div className="">
          <div>
            <img src={foodImage} className="rounded-t-lg h-[600px] shadow-2xl w-full" alt="car!" />
          </div>
          <div className="card w-full relative flex flex-row justify-around items-center p-10 ">
            <div className="flex justify-between items-center my-10">
              <div data-aos="flip-left" className="w-1/2 border-l-8 px-3 rounded-2xl border-yellow-600">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">Food Name: {foodName}</h2>
                <h2 className="text-2xl font-bold mb-2">Category: {foodType}</h2>
                <h2 className="text-2xl font-bold mb-2">Chef: {foodMakerName}</h2>
                <h2 className="text-2xl font-bold mb-2">Origin: {foodOrigin}</h2>
                <h2 className="text-2xl font-bold mb-4 text-black">Quantity: {foodQuantity}</h2>
                <p className="text-3xl font-bold my-3 text-yellow-600">Food Price: ${foodPrice}</p>
              </div>

              <div data-aos="flip-right" className="w-1/2">
                <h2 className="text-4xl font-bold mb-4">Food Description</h2>
                <p className="text-justify font-semibold">{foodDescription}</p>
                <Link to={`/purchase/${_id}`} >
                  <div className="w-full bg-yellow-600 text-white mx-auto text-center my-5 p-5 font-bold rounded-full">
                    Order Now
                  </div>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>


  );
};

export default SingleFoodDetailsPage;