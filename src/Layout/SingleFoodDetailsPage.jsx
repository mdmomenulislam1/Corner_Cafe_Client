import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from '../Components/DetailsCard';

const SingleFoodDetailsPage = () => {
  const [food, setFood] = useState({});
    
    const {_id} = useParams();

    const foods = useLoaderData();
    
    useEffect(() => {
        const findFood = foods?.find((food) => food._id == _id);
       
        console.log(findFood);
        setFood(findFood)
       
      }, [_id, foods]);

  return (
    <div>
      <DetailsCard food={food}></DetailsCard>
      
    </div>
  );
};

export default SingleFoodDetailsPage;