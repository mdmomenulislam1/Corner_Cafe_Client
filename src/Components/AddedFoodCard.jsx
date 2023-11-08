import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const AddedFoodCard = ({ foodItem }) => {
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = foodItem || {}
  const { user } = useContext(AuthContext)

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const foodQuantity = form.food_quantity.value;
    const foodType = form.food_type.value;
    const foodMakerName = form.food_maker_name.value;
    const foodMakerEmail = form.food_maker_email.value;
    const foodOrigin = form.food_origin.value;
    const foodPrice = form.food_price.value;
    const foodDescription = form.food_description.value;


    console.log(foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription);
    const foodData = {
      foodName,
      foodImage,
      foodQuantity,
      foodType,
      foodMakerName,
      foodMakerEmail,
      foodOrigin,
      foodPrice,
      foodDescription
    }
    fetch(`https://assignment-11-server-site-bfqfoqtgp-brand-shop-a10s-projects.vercel.app/foods/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Okay, Done!", "Food Updated successfully!", "success");

        }
      });

  }


  return (
    <tr key={foodItem._id} className="text-xl text-slate-500 font-semibold">

    
      <td className="border-2 border-yellow-600 ">{foodName}</td>
      <td className="border-2 border-yellow-600 ">
        <img src={foodImage} alt="Food Image" className="rounded-lg h-[50px] w-[100px]" />
      </td>
      <td className="border-2 border-yellow-600 ">{foodType}</td>
      <td className="border-2 border-yellow-600 ">{foodQuantity}</td>
      <td className="border-2 border-yellow-600 ">{foodOrigin}</td>
      <td className="border-2 border-yellow-600 ">{foodPrice}</td>
      <td className="border-2 border-yellow-600 ">{/* The button to open modal */}

        <label htmlFor="my_modal_6" className="bg-yellow-600 hover:bg-yellow-800 p-2 text-[15px] font-semibold text-white font-bold border rounded-lg">Update Food</label>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
          <h2 className="text-2xl border-t-4 rounded-3xl p-3 text-center border-yellow-600 font-bold">Update Food </h2>
            <form onSubmit={handleUpdateFood} action="" method="post" className="border-2 rounded-2xl border-yellow-600 p-2 w-full">
              <div className="grid grid-cols-1">
                <div className="flex justify-center items-center w-full">
                  <p className="text-black font-bold w-[200px]">Food Name</p>
                  <input type="text" name="food_name" id="" defaultValue={foodName} placeholder="Food Name" required className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Photo URL</p>
                  <input type="text" name="food_image" id="" defaultValue={foodImage} placeholder="Food Image URL" required className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Quantity</p>
                  <input type="number" min="1" required name="food_quantity" defaultValue={foodQuantity} id="" placeholder="Food Quantity" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Category</p>
                  <input type="text" name="food_type" id="" defaultValue={foodType} placeholder="Food Category" required className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Maker Name</p>
                  <input type="text" name="food_maker_name" id="" defaultValue={user?.displayName} disabled className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Maker Email</p>
                  <input type="text" name="food_maker_email" id="" defaultValue={user?.email} disabled className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Origin(Country)</p>
                  <input type="text" name="food_origin" id="" defaultValue={foodOrigin} placeholder="Food Origin(Country)" required className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Price</p>
                  <input type="number" step="0.01" name="food_price" id="" defaultValue={foodPrice} required placeholder="Food Price" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <div className="flex justify-center items-center w-full">
                  <p className=" text-black font-bold w-[200px]">Food Description</p>
                  <input type="text" name="food_description" id="" defaultValue={foodDescription} required placeholder="Food Description" className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
                </div>
                <br />
              </div>
              <button className="hover:bg-yellow-800 bg-yellow-600 w-full p-3 text-white font-bold border rounded-lg" type="submit">Update Food</button>
            </form>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="bg-yellow-600 hover:bg-yellow-800 p-5 rounded-2xl text-white mx-auto">Close</label>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AddedFoodCard;