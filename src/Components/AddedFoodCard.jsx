import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const AddedFoodCard = ({ foodItem }) => {
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = foodItem || {}
  const {user } = useContext(AuthContext)

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
    fetch(`http://localhost:5000/foods/${_id}`, {
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
    <div key={foodItem._id} className="flex justify-around items-center shadow-2xl gap-2 md:gap-4 lg:gap-5 h-[250px] bg-green-800 text-white rounded-lg ">
      <div>
        <img src={foodImage} alt="" className="px-1 md:px-2 lg:px-3 h-[200px] w-[200px] rounded-3xl" />
      </div>
      <div className="mt-2 md:mt-3 lg:mt-5 px-2 md:px-3 lg:px-5">
        <p className=" font-bold mt-2">food: {foodName}</p>
        <p className=" font-semibold  text-red-300"> Quantity: {foodQuantity}</p>
        <p className="font-bold mb-2"> Type: {foodType}</p>
        <p className="text-2xl text-gray-200 font-bold">Price: ${foodPrice}</p>
        <div className="flex gap-3 my-4">

          {/* The button to open modal */}
          
            <label htmlFor="my_modal_6" className="btn">Update Food</label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form onSubmit={handleUpdateFood} action="" method="post" className="w-full">
                <h2 className="text-2xl font-bold">Update Food </h2>
                <div className="grid grid-cols-1">
                  <div className="flex justify-center items-center w-full">
                    <p className="text-black font-bold w-[200px]">Food Name</p>

                    <input type="text" name="food_name" id="" defaultValue={foodName}  placeholder="Food Name" required className="m-3 w-3/4 p-3 text-black font-semibold border rounded-lg" />
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
                <button className="btn bg-purple-900 m-3 w-full p-3 text-white font-bold border rounded-lg" type="submit">Update Food</button>
              </form>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn mx-auto">Close</label>
              </div>
            </div>
          </div>

          {/* <button className="px-5 py-2 rounded-lg bg-yellow-800 text-white text-xl font-bold">Update</button> */}


        </div>
      </div>

    </div>
  );
};

export default AddedFoodCard;