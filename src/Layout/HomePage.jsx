import React, { useState } from 'react';
import Banner from '../Components/Banner';
import ServiceFeature from '../Components/ServiceFeature';
import MeetUp from '../Components/MeetUp';
import { Link, useLoaderData } from 'react-router-dom';
import HotFoodCard from '../Components/HotFoodCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';




const HomePage = () => {
  const hotFoodItems = useLoaderData();

  AOS.init({
    duration: 800,
    offset: 200,
    easing: 'ease',
  });

  return (
    <div className="mx-5 md:mx-8 lg:mx-12">
      <Helmet>
        <title>{'Corner Cafe | Home '}</title>
      </Helmet>
      <Banner />

      <h1 data-aos="fade-up" className=" p-5 text-4xl font-bold text-right border-r-8 text-yellow-600 border-b-8 rounded-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Hot Items</h1>

      {
        hotFoodItems.length !== 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 md:gap-8 lg:gap-10 my-10">
            {
              hotFoodItems?.slice(0, 6)?.map((food) => <HotFoodCard key={food._id} food={food}></HotFoodCard>)
            }
          </div>
          :
          <h2 className="text-3xl text-center text-red-800  font-bold">No Food Available</h2>
      }
      <Link to="/allFoods" className="grid justify-end">
        <button data-aos="fade-up" className="text-yellow-600 font-bold border-4 border-yellow-600 hover:bg-yellow-800 p-3 rounded-2xl hover:text-white">See All Items</button>

      </Link>
      <h1 data-aos="zoom-out" className=" p-5 text-4xl font-bold border-l-8 border-b-8 text-yellow-600 rounded-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Special Service Features</h1>
      <ServiceFeature />
      <h1 data-aos="flip-up" className=" p-5 text-4xl font-bold border-b-8 text-right border-r-8 text-yellow-600 rounded-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Meet Up</h1>
      <MeetUp />
    </div >
  );
};

export default HomePage;