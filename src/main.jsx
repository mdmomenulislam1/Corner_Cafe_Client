import React from 'react'
import ReactDOM from 'react-dom/client'
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
import PrivateRoute from './Firebase/PrivateRoute.jsx';
import Modal from './Components/Modal.jsx';
import HotSingleDetailsPage from './Layout/HotSingleDetailsPage.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch(`https://assignment-11-server-site-pi.vercel.app/foodsOrder`)
      },
      {
        path: "/allFoods",
        element: <AllFoodsPage />
      },
      {
        path: "/blogs",
        element: <BlogPage />
      },
      {
        path: "/addFoodItem",
        element: <PrivateRoute><AddFoodItem /></PrivateRoute>
      },
      {
        path: "/addedItems",
        element: <PrivateRoute> <MyAddedFood /> </PrivateRoute>,
        loader: () => fetch(`https://assignment-11-server-site-pi.vercel.app/foods`)
      },
      {
        path: "/foodItem/:_id",
        element:<PrivateRoute><Modal /></PrivateRoute> ,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`https://assignment-11-server-site-pi.vercel.app/foods/${params._id}`)
        }

      },
      {
        path: "/order",
        element: <PrivateRoute> <MyOrder /> </PrivateRoute>,
        loader: () => fetch(`https://assignment-11-server-site-pi.vercel.app/foodsOrder`)
      },
      {
        path: "/foods/:_id",
        element: <PrivateRoute> <SingleFoodDetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-site-pi.vercel.app/foods/${params._id}`)
      },

      {
        path: "/hotFood/:_id",
        element: <PrivateRoute> <HotSingleDetailsPage/> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-site-pi.vercel.app/foodsOrder/${params._id}`)
      },

      {
        path: "/purchase/:_id",
        element: <PrivateRoute><PurchasePage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-site-pi.vercel.app/foods/${params._id}`)
      },
      {
        path: "/logIn",
        element: <LoginPage />
      },
      {
        path: "/registration",
        element: <Registration />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider><RouterProvider router={router} /></AuthProvider>

  </React.StrictMode>,
)
