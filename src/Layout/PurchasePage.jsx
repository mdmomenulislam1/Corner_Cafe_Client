import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';

const PurchasePage = () => {
  const food = useLoaderData();
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = food || {}
  const { user } = useContext(AuthContext);

  console.log(_id, foodName);

  const today = new Date();
  const handlePurchaseFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const orderedFoodName = form.ordered_food_name.value;
    const orderedFoodQuantity = form.ordered_food_quantity.value;
    const buyerName = form.buyer_name.value;
    const buyerEmail = form.buyer_email.value;
    const orderedFoodPrice = form.ordered_food_price.value;
    const orderedDate = form.ordered_date.value;

    console.log(orderedFoodName, orderedFoodQuantity, buyerName, buyerEmail, orderedFoodPrice, orderedDate);
    const orderedFoodData = {
      orderedFoodName, orderedFoodQuantity, buyerName, buyerEmail, orderedFoodPrice, orderedDate
    }
    fetch('http://localhost:5000/orderedFoods', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderedFoodData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Okay, Done!", "Order successfully!", "success");

        }
      });
  }

  return (
    <div className="mx-5 md:mx-10 lg:mx-15 my-10 text-yellow-600">
      <h1 className=" p-5 text-4xl font-bold border-l-8 text-yellow-600 rounded-l-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Purchase Food Item</h1>

      <form onSubmit={handlePurchaseFood} action="" method="post" className="w-full text-center">

        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center w-full">
            <p className="text-yellow-600 font-bold w-[200px]">Food Name</p>

            <input type="text" name="ordered_food_name" id="" defaultValue={foodName} disabled placeholder="Food Name" required className="m-3 w-3/4 p-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-yellow-600 font-bold w-[200px]">Food Quantity</p>
            <input type="number" min="1" required name="ordered_food_quantity" id="" placeholder="Food Quantity" className="m-3 w-3/4 p-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-yellow-600 font-bold w-[200px]">Buyer Name</p>
            <input type="text" name="buyer_name" id="" defaultValue={user?.displayName} disabled className="m-3 w-3/4 p-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-yellow-600 font-bold w-[200px]">Buyer Email</p>
            <input type="text" name="buyer_email" id="" defaultValue={user?.email} disabled className="m-3 w-3/4 p-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-yellow-600 font-bold w-[200px]">Food Price</p>
            <input type="number" step="0.01" name="ordered_food_price" id="" defaultValue={foodPrice} disabled required placeholder="Food Price" className="m-3 w-3/4 p-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-yellow-600 font-bold w-[200px]">Date</p>
            <input type="Date" step="0.01" name="ordered_date" id="" defaultValue={today} required placeholder="Date" className="m-3 w-3/4 p-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg" />
          </div>

          <br />
        </div>
        <button className="bg-yellow-600 m-3 w-3/4 p-3 hover:bg-yellow-900 text-white font-bold border border-yellow-600 rounded-lg" type="submit">Purchase Now</button>
      </form>
    </div>
  );
};

export default PurchasePage;