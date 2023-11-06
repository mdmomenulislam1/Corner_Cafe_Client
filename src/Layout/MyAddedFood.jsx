import React, { useContext, useEffect, useState } from 'react';
import AddedFoodCard from '../Components/AddedFoodCard';
import { AuthContext } from '../Firebase/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyAddedFood = () => {
  const [food, setFood] = useState([]);
  const { user } = useContext(AuthContext);
  const foods = useLoaderData();
  console.log(foods);

  useEffect(() => {
    const findFood = foods?.filter((food) => food?.foodMakerEmail === user?.email);

    setFood(findFood);

  }, []);
  console.log(foods);
  console.log(typeof (foods));
  return (

    <div className="mx-5 md:mx-10 lg:mx-15 my-10 text-yellow-600">

      <h1 className=" p-5 text-4xl font-bold border-r-8 text-yellow-600 text-right rounded-r-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">My Added Items</h1>

      {
        food.length !== 0 ?
          <div className="overflow-x-auto my-5 md:my-10 lg:my-15">
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="font-bold text-2xl text-yellow-600">
                  
                  <th className="border-2 border-yellow-600 ">Name</th>
                  <th className="border-2 border-yellow-600 ">Image</th>
                  <th className="border-2 border-yellow-600 ">Category</th>
                  <th className="border-2 border-yellow-600 ">Quantity</th>
                  <th className="border-2 border-yellow-600 ">Origin</th>
                  <th className="border-2 border-yellow-600 ">Price</th>
                  <th className="border-2 border-yellow-600 ">Update</th>
                </tr>
              </thead>
              <tbody>
                
                  {
                    food?.map((foodItem) => <AddedFoodCard key={foodItem._id} foodItem={foodItem}></AddedFoodCard>)
                  }
                   </tbody>
            </table>
          </div>
          :
          <div>
            No Food Available
          </div>
      }
    </div>

  );
};

export default MyAddedFood;