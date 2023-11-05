import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';

const PurchasePage = () => {

  const {_id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = useParams();
  const { user} = useContext(AuthContext);
  

  const handlePurchaseFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const orderedFoodName = form.ordered_food_name.value;
    const orderedFoodQuantity = form.ordered_food_quantity.value;
    const buyerName = form.buyer_name.value;
    const buyerEmail = form.buyer_email.value;
    const orderedFoodPrice = form.ordered_food_price.value;
    const orderedDate = form.ordered_date.value;


    console.log(orderedFoodName, orderedFoodQuantity, buyerName, buyerEmail, orderedFoodPrice, orderedDate );
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
    <div className="mx-12 text-center my-5">

      <form onSubmit={handlePurchaseFood} action="" method="post" className="w-full">
        <h2 className="text-2xl font-bold">Add Food </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center w-full">
            <p className="text-black font-bold w-[200px]">Food Name</p>

            <input type="text" name="food_name" id="" defaultValue={foodName} placeholder="Food Name" required className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-black font-bold w-[200px]">Food Quantity</p>
            <input type="number" min="1" required name="food_quantity" id="" placeholder="Food Quantity" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-black font-bold w-[200px]">Buyer Name</p>
            <input type="text" name="buyer_name" id="" defaultValue={user?.displayName} disabled className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-black font-bold w-[200px]">Buyer Email</p>
            <input type="text" name="buyer_email" id="" defaultValue={user?.email} disabled className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
          </div>


          <div className="flex justify-center items-center w-full">
            <p className=" text-black font-bold w-[200px]">Food Price</p>
            <input type="number" step="0.01" name="food_price" id="" defaultValue={foodPrice} required placeholder="Food Price" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
          </div>

          <div className="flex justify-center items-center w-full">
            <p className=" text-black font-bold w-[200px]">Date</p>
            <input type="Date" step="0.01" name="food_price" id="" required placeholder="Date" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
          </div>

          <br />
        </div>
        <button className="btn bg-purple-900 m-3 w-3/4 p-3 text-white font-bold border rounded-lg" type="submit">Order Now</button>
      </form>
    </div>
  );
};

export default PurchasePage;