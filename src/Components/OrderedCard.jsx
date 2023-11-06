import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const OrderedCard = ({ orderItem, handleDeleteOrder }) => {
  const { _id, orderedFoodName, orderedFoodQuantity, buyerName, buyerEmail, orderedFoodPrice, orderedDate } = orderItem || {}
  const { user } = useContext(AuthContext);


  // const handleDeleteOrder = id => {
  //   const proceed = confirm('Are You sure you want to delete');
  //   if (proceed) {
  //     fetch(`http://localhost:5000/orderedfoods/${_id}`, {
  //       method: 'DELETE'
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           swal("Okay, Done!", "Order Deleted successfully!", "success");
  //           const remaining = orderItem.filter(order => order._id !== id);
  //           setOrder(remaining);
  //         }
  //       })
  //   }
  // }

  return (
    <div key={orderItem._id} className="flex justify-around items-center shadow-2xl gap-2 md:gap-4 lg:gap-5 h-[250px] bg-green-800 text-white rounded-lg ">
      <div>
        <img src={user?.photoURL} alt="" className="px-1 md:px-2 lg:px-3 h-[200px] w-[200px] rounded-3xl" />
      </div>
      <div className="mt-2 md:mt-3 lg:mt-5 px-2 md:px-3 lg:px-5">
        <p className=" font-bold mt-2">food: {orderedFoodName}</p>
        <p className=" font-semibold  text-red-300"> Quantity: {orderedFoodQuantity}</p>
        <p className="font-bold mb-2"> buyer name: {buyerName}</p>
        <p className="text-2xl text-gray-200 font-bold">Price: ${orderedFoodPrice}</p>
        <div className="flex gap-3 my-4">
          <button onClick={() => handleDeleteOrder(_id)} className="btn bg-purple-900 m-3 w-full p-3 text-white font-bold border rounded-lg" type="submit">Delete</button>
        </div>
      </div>

    </div>
  );
};

export default OrderedCard;