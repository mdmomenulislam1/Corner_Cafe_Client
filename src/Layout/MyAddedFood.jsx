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
    
      <div>
        <h2 className="text-3xl">THis Added Foods Page</h2>
        {
          food.length !== 0 ?

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
              {
                food?.map((foodItem) => <AddedFoodCard key={foodItem._id} foodItem={foodItem}></AddedFoodCard>)
              }
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