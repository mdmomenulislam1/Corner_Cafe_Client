import React, { useEffect, useState } from 'react';
import FoodCard from '../Components/FoodCard';

const AllFoodsPage = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/foods`)
      .then((response) => response.json())
      .then((data) => setFoods(data));
  }, []);
  console.log(foods);
  return (
    <div>
      <h2 className="text-3xl">THis Is All Foods Page</h2>
      {
        foods.length !== 0 ? 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
        {

          foods?.map((food) => <FoodCard key={food._id} food = {food}></FoodCard>)
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

export default AllFoodsPage;