import React, { useContext, useEffect, useState } from 'react';
import AddedFoodCard from '../Components/AddedFoodCard';
import { AuthContext } from '../Firebase/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import {BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const MyAddedFood = () => {
  const [food, setFood] = useState([]);
  const { user } = useContext(AuthContext);
  const foods = useLoaderData();
  console.log(foods);

  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0)

  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = e => {
    console.log(e.target.value);
    const intValue = parseInt(e.target.value);
    setItemsPerPage(intValue);
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    };
  };

  useEffect(() => {
    const findFood = foods?.filter((food) => food?.foodMakerEmail === user?.email);
    setFood(findFood);
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/AddedFoodsCount')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/AddedFoods?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => setFood(data));
  }, [currentPage, itemsPerPage]);
 
  return (

    <div className="mx-5 md:mx-10 lg:mx-15 my-10 text-yellow-600">

      <h1 className=" p-5 text-4xl font-bold border-b-8 border-r-8 text-yellow-600 text-right rounded-2xl border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">My Added Items</h1>

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
      <div className="text-center flex gap-5 justify-center items-center">
        <button className="text-2xl font-bold p-5 text-yellow-600 " onClick={handlePrevPage}><BsArrowBarLeft></BsArrowBarLeft></button>
        {
          pages?.map(page => <button
            className={currentPage === page ? "btn btn-lg bg-yellow-600 text-white text-2xl font-bold" : "text-2xl font-bold"}
            onClick={() => setCurrentPage(page)}
            key={page}
          >{page}</button>)
        }
        <button className="text-2xl font-bold p-5 text-yellow-600 " onClick={handleNextPage}><BsArrowBarRight></BsArrowBarRight></button>
        <select value={itemsPerPage} onChange={handleItemsPerPage} name="items_per_page" className="w-[80px] mx-8 border-4 p-3 font-bold rounded-2xl border-yellow-600 text-yellow-600">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
      </div>
    </div>

  );
};

export default MyAddedFood;