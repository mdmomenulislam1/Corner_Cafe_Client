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
    <div className="my-10 mx-5 md:mx-10 lg:mx-14">
       <h1 className=" p-5 text-4xl font-bold text-right border-r-8 text-yellow-600 rounded-r-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">All Foods Page</h1>
     
     <form action="" className="w-full text-center">
      <input type="text" placeholder="Search" name="search_food" className=" text-2xl font-bold text-yellow-600 border-2 border-yellow-600 p-5 w-1/3 mx-5 rounded-lg" />
      <button type="search" name="search_btn" className="text-2xl font-bold text-white bg-yellow-600 border-2 border-yellow-600 p-5 w-1/3 mx-5 rounded-lg" >Search</button>
     </form>
      {/* <h2 className="text-3xl text-center  font-bold">All Foods Page</h2> */}
      {
        foods.length !== 0 ? 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {

          foods?.map((food) => <FoodCard key={food._id} food = {food}></FoodCard>)
        }
      </div>
      :
      <h2 className="text-3xl text-center  font-bold">No Food Available</h2>
      }
    </div>
  );
};

export default AllFoodsPage;