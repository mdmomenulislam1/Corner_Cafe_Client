import React, { useState } from 'react';
import Banner from '../Components/Banner';
import ServiceFeature from '../Components/ServiceFeature';
import MeetUp from '../Components/MeetUp';
import { Link, useLoaderData } from 'react-router-dom';
import HotFoodCard from '../Components/HotFoodCard';

const HomePage = () => {
  // const [food, setFood] = useState([]);
  // const [sortFood, setSortFood] = useState('asc');
  const  hotFoodItems = useLoaderData();

  // const sortedFood = [...food];

  // sortedFood.sort((a, b) => a.orderedFoodQuantity - b.orderedFoodQuantity);

  // setFood(sortedFood);
      

  // console.log(sortFood);
  return (
    <div className="mx-5 md:mx-8 lg:mx-12">
      <Banner />
      <h1 className=" p-5 text-4xl font-bold text-right border-r-8 text-yellow-600 rounded-r-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Hot Items</h1>

      {
        hotFoodItems.length !== 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 my-10">
            {/* {
              hotFoodItems?.slice(0, 6)?.map((food) => <HotFoodCard key={food._id} food={food}></HotFoodCard>)
            } */}
          </div>
          :
          <h2 className="text-3xl text-center  font-bold">No Food Available</h2>
      }
      <Link to="/allFoods" className="grid justify-end">
        <button className="text-yellow-600 font-bold border-4 border-yellow-600 hover:bg-yellow-800 p-3 rounded-2xl hover:text-white">See All Items</button>

      </Link>
      <h1 className=" p-5 text-4xl font-bold border-l-8 text-yellow-600 rounded-l-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Special Service Features</h1>
      <ServiceFeature />
      <h1 className=" p-5 text-4xl font-bold text-right border-r-8 text-yellow-600 rounded-r-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Meet Up</h1>
      <MeetUp />
    </div>
  );
};

export default HomePage;