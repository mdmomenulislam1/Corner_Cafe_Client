import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import swal from 'sweetalert';
import { Helmet } from 'react-helmet';


const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useContext(AuthContext);
  const ordered = useLoaderData();
  console.log(ordered);

  useEffect(() => {
    const findOrder = ordered.filter((order) => order.buyerEmail === user.email);
    setOrder(findOrder);
  }, [])

  const handleDeleteOrder = id => {
    const proceed = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Your file is safe.', 'error');
        }
      });
    };

    if (proceed) {
      fetch(`https://assignment-11-server-site-pi.vercel.app/foodsOrder/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            swal("Okay, Done!", "Order Cancel successfully!", "success");
            const remaining = order.filter(booking => booking._id !== id);
            setOrder(remaining);
          }
        })
    }
  }

  return (
    <div className="mx-5 md:mx-10 lg:mx-15 my-10">
      <Helmet>
        <title>{'Corner Cafe | My Orders'}</title>
      </Helmet>
      <h1 className=" p-5 text-4xl font-bold border-l-8 text-yellow-600 rounded-2xl border-b-8 border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">My Ordered Food Item</h1>
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
                  order?.map((orderItem) => (<tr key={orderItem._id} className="text-[16px] font-semibold">
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
                      <button onClick={() => handleDeleteOrder(orderItem._id)} className="bg-yellow-600 hover:bg-yellow-800 p-2 text-white font-semibold rounded-lg" type="submit">Delete</button>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
          :
          <div className="text-2xl text-red-800 font-bold text-center my-10">
            No Order Available
          </div>
      }
    
    </div >
  );
};

export default MyOrder;