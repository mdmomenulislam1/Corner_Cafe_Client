import React, { useEffect, useState } from 'react';
import FoodCard from '../Components/FoodCard';
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllFoodsPage = () => {
  const [foods, setFoods] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [asc, setAsc] = useState('false');

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
    fetch('https://assignment-11-server-site-pi.vercel.app/foodsCount')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  useEffect(() => {
    fetch(`https://assignment-11-server-site-pi.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => setFoods(data));
  }, [currentPage, itemsPerPage]);

  AOS.init({
    duration: 800,
    offset: 200,
    easing: 'ease',
  });

  return (
    <div className="my-10 mx-5 md:mx-10 lg:mx-14">
      <Helmet>
        <title>{'Corner Cafe | All Foods '}</title>
      </Helmet>
      <h1 data-aos="flip-up" className=" p-5 text-4xl font-bold text-right border-b-8 border-r-8 text-yellow-600 rounded-2xl mb-5 border-yellow-600 mt-8 md:mt-12 lg:mt-16 ">All Foods Page</h1>
      <div className="flex justify-between">
        
        <form>
          <input className='text-2xl font-bold text-yellow-600 bg-white border-2 border-yellow-600 p-3 rounded-lg'

            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Foods'
          />
        </form>
        <button
          onClick={() => setAsc(!asc)}
          className="text-2xl font-bold text-white bg-yellow-600 border-2 border-yellow-600 p-3 rounded-lg">
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>

      {
        foods.length !== 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {
              foods.filter((food) => {
                return search.toLowerCase() === ''
                  ? food
                  : food.foodName.toLowerCase().includes(search);
              })?.map((food, index) => <FoodCard key={index} food={food}></FoodCard>)
            }
          </div>
          :
          <h2 className="text-3xl text-center text-yellow-600 font-bold">No Food Available</h2>
      }
      <div className="text-center flex gap-5 justify-center items-center">
        <button className="text-2xl font-bold p-5 text-yellow-600 " onClick={handlePrevPage}><BsArrowBarLeft></BsArrowBarLeft></button>
        {
          pages?.map(page => <button
            className={currentPage === page ? "px-3 py-2 rounded-lg bg-yellow-600 text-white text-2xl font-bold" : "text-2xl font-bold"}
            onClick={() => setCurrentPage(page)}
            key={page}
          >{page}</button>)
        }
        <button className="text-2xl font-bold p-5 text-yellow-600 " onClick={handleNextPage}><BsArrowBarRight></BsArrowBarRight></button>
        <select value={itemsPerPage} onChange={handleItemsPerPage} name="items_per_page" className="w-[80px] mx-8 border-4 p-3 font-bold rounded-2xl border-yellow-600 text-yellow-600">
          <option selected value="9">9</option>
          <option value="15">15</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="36">36</option>
          <option value="45">45</option>
        </select>
      </div>

    </div>
  );
};

export default AllFoodsPage;