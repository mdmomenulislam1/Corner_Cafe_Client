import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';


const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useContext(AuthContext);
  const orderedFood = useLoaderData();
  console.log(orderedFood);


  const url = `http://localhost:5000/orderedfoods?buyerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        const findOrder = data?.filter((food) => food?.buyerEmail == user?.email);
        setOrder(findOrder);
      })
  }, [url])

  const handleDeleteOrder = _id => {
    const proceed = confirm('Are You sure you want to delete');
    // confirm(swal("Okay, Done!", "Are You sure you want to delete!", "error"))
    //  confirm('Are You sure you want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/orderedfoods/${_id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            swal("Okay, Done!", "Order Deleted successfully!", "success");
            // const findOrder = orderedFood?.filter((food) => food?.buyerEmail == user?.email);
            const remaining = findOrder?.filter((food) => food._id !== id);
            setOrder(remaining);
          }
        })
    }
  }

  return (

    <div className="mx-5 md:mx-10 lg:mx-15 my-10">
      <h1 className=" p-5 text-4xl font-bold border-l-8 text-yellow-600 rounded-l-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">My Ordered Food Item</h1>


      {
        order.length !== 0 ?
          <div className="overflow-x-auto my-5 md:my-10 lg:my-15">
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="font-bold text-[20px] text-yellow-600">
                  <th className="border-2 border-yellow-600 ">Food Name</th>
                  <th className="border-2 border-yellow-600 ">Food Quantity</th>
                  <th className="border-2 border-yellow-600 ">Buyer Name</th>
                  <th className="border-2 border-yellow-600 ">Buyer Email</th>
                  <th className="border-2 border-yellow-600 ">Order Date</th>
                  <th className="border-2 border-yellow-600 ">Food Price</th>
                  <th className="border-2 border-yellow-600 ">Delete</th>
                </tr>
              </thead>
              <tbody>

                {
                  order?.map((orderItem) => ( <tr key={orderItem._id} className="text-[16px] font-semibold">
                  <td className="border-2 border-yellow-600 ">
                    {orderItem.orderedFoodName}
                  </td>
                  <td className="border-2 border-yellow-600">
                    {orderItem.orderedFoodQuantity}
                  </td>
                  <td className="border-2 border-yellow-600">
                    {orderItem.buyerName}
                  </td>
                  <td className="border-2 border-yellow-600">
                    {orderItem.buyerEmail}
                  </td>
            
                  <td className="border-2 border-yellow-600">
                    {orderItem.orderedDate}
                  </td>
            
                  <td className="border-2 border-yellow-600">
                    {orderItem.orderedFoodPrice}
                  </td>
            
                  <td className="border-2 border-yellow-600">
                    <button onClick={() => handleDeleteOrder(_id)} className="bg-yellow-600 hover:bg-yellow-800 p-2 text-white font-semibold rounded-lg" type="submit">Delete</button>
            
                  </td>
            
            
            
                </tr>))}
              </tbody>
            </table>
          </div>
          :
          <div>
            No Food Available
          </div>
      }
    </div >

  );
};

export default MyOrder;