// HotFoodCard.js

import React from 'react';

const HotFoodCard = ({ food, totalQuantityMap }) => {
  const {
    _id,
    orderedFoodName,
    orderedFoodImage,
    orderedFoodType,
    buyerName,
    buyerEmail,
    orderedFoodPrice,
    orderedDate,
  } = food || {};

  const totalOrderedFoodQuantity = totalQuantityMap[orderedFoodName] || 0;

  return (
    <div data-aos="fade-down" key={_id} className="shadow-2xl h-[400px] bg-white text-yellow-800 rounded-2xl ">
      <div className=" border-l-8 px-3 border-yellow-600 rounded-t-2xl text-left w-full">
        <div className="">
          <p className=" font-bold text-3xl mb-1">Food: {orderedFoodName}</p>
          <p className=" font-bold "> Sale: {totalOrderedFoodQuantity}</p>
          <p className="font-bold"> Category: {orderedFoodType}</p>
          <p className="text-2xl font-bold mb-2">Price: ${orderedFoodPrice}</p>
          <div className=" ">{/* Additional content here */}</div>
        </div>
      </div>
      <div className="h-[280px] w-full rounded-b-2xl">
        <img src={orderedFoodImage} alt="Food Image" className="h-full w-full rounded-b-2xl" />
      </div>
    </div>
  );
};

export default HotFoodCard;
