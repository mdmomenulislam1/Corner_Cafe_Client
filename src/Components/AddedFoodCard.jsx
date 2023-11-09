import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Link } from 'react-router-dom';

const AddedFoodCard = ({ foodItem }) => {
  const { _id, foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription } = foodItem || {}
  const { user } = useContext(AuthContext)

  // const handleUpdateFood = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const foodName = form.food_name.value;
  //   const foodImage = form.food_image.value;
  //   const foodQuantity = form.food_quantity.value;
  //   const foodType = form.food_type.value;
  //   const foodMakerName = form.food_maker_name.value;
  //   const foodMakerEmail = form.food_maker_email.value;
  //   const foodOrigin = form.food_origin.value;
  //   const foodPrice = form.food_price.value;
  //   const foodDescription = form.food_description.value;


  //   console.log(foodName, foodImage, foodQuantity, foodType, foodMakerName, foodMakerEmail, foodOrigin, foodPrice, foodDescription);
  //   const foodData = {
  //     foodName,
  //     foodImage,
  //     foodQuantity,
  //     foodType,
  //     foodMakerName,
  //     foodMakerEmail,
  //     foodOrigin,
  //     foodPrice,
  //     foodDescription
  //   }
  //   fetch(`http://localhost:5000/foods/${_id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(foodData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.acknowledged) {
  //         swal("Okay, Done!", "Food Updated successfully!", "success");

  //       }
  //     });

  // }


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
      <td className="border-2 border-yellow-600 ">
        <Link to={`/foodItem/${_id}`}>
          <button className="bg-yellow-600 hover:bg-yellow-800 p-2 text-white font-semibold rounded-lg" type="submit">Update</button>
        </Link>
      </td>
    </tr>
  );
};

export default AddedFoodCard;