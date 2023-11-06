import React from 'react';
import Banner from '../Components/Banner';
import ServiceFeature from '../Components/ServiceFeature';

const HomePage = () => {
  return (
    <div className="mx-5 md:mx-8 lg:mx-12">
      <Banner/>
      <h1 className=" p-5 text-4xl font-bold border-l-8 text-yellow-600 rounded-l-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">Special Service Features</h1>
      <ServiceFeature/>
    </div>
  );
};

export default HomePage;