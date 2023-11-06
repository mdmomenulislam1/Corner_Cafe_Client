import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = food || {}

  return (


    <div key={food._id} className="flex justify-between items-center shadow-2xl gap-2 md:gap-4 lg:gap-5  h-[250px] bg-white text-yellow-800 rounded-2xl ">
      <div className=" border-l-8 w-2/3 border-yellow-700 h-full rounded-2xl px-2 md:px-3 lg:px-5">
        <div className="mt-6 md:mt-8 lg:mt-10">
        <p className=" font-bold text-3xl mb-1">Food: {foodName}</p>
        <p className=" font-bold "> Quantity: {foodQuantity}</p>
        <p className="font-bold"> Type: {foodType}</p>
        <p className="text-2xl font-bold mb-2">Price: ${foodPrice}</p>
        <div className="flex gap-3 ">
          <Link to={`/foods/${_id}`}>
            <button className="px-5 py-2 rounded-lg bg-orange-500 text-white text-xl font-bold">Details</button>
          </Link>

        </div>
        </div>
      </div>
      <div>
        <img src={foodImage} alt="Food Image" className="h-full w-full rounded-2xl" />
      </div>


    </div>


  );
};

export default FoodCard;