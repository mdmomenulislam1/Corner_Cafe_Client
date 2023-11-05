import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,        
      },
      // {
      //   path: "/addCard",
      //   element: <PrivateRoute><AddCard></AddCard></PrivateRoute>
      // },
      // {
      //   path: "/logIn",
      //   element: <Login></Login>
      // },
      // {
      //   path: "/registration",
      //   element: <Registration></Registration>
      // },
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
    <App />
  </React.StrictMode>,
)
