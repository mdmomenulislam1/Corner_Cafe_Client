import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout.jsx';
import ErrorPage from './Layout/ErrorPage.jsx';
import HomePage from './Layout/HomePage.jsx';
import AuthProvider from './Firebase/AuthProvider.jsx';
import LoginPage from './Layout/LoginPage.jsx';
import Registration from './Layout/RegistrationPage.jsx';
import AllFoodsPage from './Layout/AllFoodsPage.jsx';
import BlogPage from './Layout/BlogPage.jsx';
import AddFoodItem from './Layout/AddFoodItem.jsx';
import MyAddedFood from './Layout/MyAddedFood.jsx';
import MyOrder from './Layout/MyOrder.jsx';
import SingleFoodDetailsPage from './Layout/SingleFoodDetailsPage.jsx';
import PurchasePage from './Layout/PurchasePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>        
      },
      {
        path:"/allFoods",
        element: <AllFoodsPage/>
      },
      {
        path: "/blogs",
        element: <BlogPage/>
      },
      {
        path: "/addFoodItem",
        element: <AddFoodItem/>
      },
      {
        path: "/addedItems",
        element: <MyAddedFood/>
      },
      {
        path: "/order",
        element: <MyOrder/>
      },
      {
        path: "/food/:_id",
        element: <SingleFoodDetailsPage/>,
        loader: () => fetch(`http://localhost:5000/foods`)
      },
      {
        path: "/purchase/:_id",
        element: <PurchasePage/>,
        loader: () => fetch(`http://localhost:5000/foods`)
      },
      // {
      //   path: "/addCard",
      //   element: <PrivateRoute><AddCard></AddCard></PrivateRoute>
      // },
      {
        path: "/logIn",
        element: <LoginPage/>
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      // {
      //   path: "/myCard",
      //   element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      // },
      // {
      //   path: "/aboutUs",
      //   element: <AboutUs></AboutUs>
      // },
      // {
      //   path: "/brands/:brand",
      //   element: <Product></Product>,
      //   loader: () => fetch(`https://assignment-10-server-site-npwfqb83r-brand-shop-a10s-projects.vercel.app/products`)
      // },
      // {
      //   path: "/prod/:_id",
      //   element: <PrivateRoute><Details></Details></PrivateRoute>,
      //   loader: () => fetch(`https://assignment-10-server-site-npwfqb83r-brand-shop-a10s-projects.vercel.app/products`)
      // },
      // {
      //   path: "/products/:_id",
      //   element: <PrivateRoute><Updated></Updated></PrivateRoute>,
      //   loader: ({ params }) => {
      //     console.log(params);
      //     return fetch(`https://assignment-10-server-site-npwfqb83r-brand-shop-a10s-projects.vercel.app/products/${params._id}`)
      //   }
      // }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    
  </React.StrictMode>,
)
