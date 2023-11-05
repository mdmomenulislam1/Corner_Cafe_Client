import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = ({food}) => {
  const {_id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = food || {}

  return (
    <div>
      <div>
      <div>
        <h2 className="text-3xl text-center font-bold mt-10">Food Details </h2>
        <div className="max-w-[1300px] mx-auto lg:px-0 my-10">
          <div className="glass rounded-lg p-10">
            <div className="card w-full relative flex flex-row justify-around items-center ">
              <div>
                <img src={foodImage} className="rounded-lg shadow-2xl" alt="car!" />
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-4">Food Name: {foodName}</h2>
                <h2 className="text-2xl font-bold mb-4 text-red-700">Quantity: {foodQuantity}</h2>
                <p className="text-3xl font-bold my-3 text-green-700">Food Price: ${foodPrice}</p>
                

              </div>
            </div>
            <div className="py-10">
              <h2 className="text-4xl font-bold mb-4">Food Description</h2>
              <p className="text-justify font-semibold">{foodDescription}</p>

            </div>
            {/* <button onClick={handleAddToCart} className="p-5 bg-black text-white w-full font-bold rounded-full">Add to Cart</button> */}
          <Link to={`/purchase/${_id}`}>Purchase Now</Link>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default DetailsCard;