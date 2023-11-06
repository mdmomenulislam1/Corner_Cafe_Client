import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import OrderedCard from '../Components/OrderedCard';

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useContext(AuthContext);
  const orderedFood = useLoaderData();
  console.log(orderedFood);
  useEffect(() => {
    const findOrder = orderedFood?.filter((food) => food?.buyerEmail == user?.email);

    setOrder(findOrder);

  }, []);

  // const handleDeleteOrder = id => {
  //   const proceed = confirm('Are You sure you want to delete');
  //   // confirm(swal("Okay, Done!", "Are You sure you want to delete!", "error"))
  //   //  confirm('Are You sure you want to delete');
  //   if (proceed) {
  //     fetch(`http://localhost:5000/orderedfoods/${_id}`, {
  //       method: 'DELETE'
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           swal("Okay, Done!", "Order Deleted successfully!", "success");
  //           const remaining = orderedFood?.filter((food) => food._id !== id);            
  //           setOrder(remaining);
  //         }
  //       })
  //   }
  // }

  return (
    <div>
      <div>
        <h2 className="text-3xl">My Order Page</h2>
        {
          order.length !== 0 ?

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
              {
                order?.map((orderItem) => <OrderedCard key={orderItem._id}
                  orderItem={orderItem}
                  // handleDeleteOrder={handleDeleteOrder}
      
                ></OrderedCard>)
              }
            </div>
            :
            <div>
              No Food Available
            </div>
        }
      </div>
    </div>
  );
};

export default MyOrder;