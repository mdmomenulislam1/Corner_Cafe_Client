import { Link, NavLink } from "react-router-dom";
import { BsPersonAdd, BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  const links = <>
    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-black text-white hover:bg-green-900 hover:text-white  font-bold" : "text-black bg-white  font-bold"}>Home </NavLink></li>
    <li><NavLink to="/addCard" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-black text-white hover:bg-green-900 hover:text-white  font-bold" : "text-black bg-white  font-bold"}>Add Product</NavLink></li>
    <li><NavLink to="/myCard" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-black text-white hover:bg-green-900 hover:text-white  font-bold" : "text-black bg-white  font-bold"}>My Card</NavLink></li>
    <li><NavLink to="/logIn" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-black text-white hover:bg-green-900 hover:text-white  font-bold" : "text-black bg-white  font-bold"}>Log In</NavLink></li>
    <li><NavLink to="/registration" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-black text-white hover:bg-green-900 hover:text-white  font-bold" : "text-black bg-white  font-bold"}>Registration</NavLink></li>
    <li><NavLink to="/AboutUs" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-black text-white hover:bg-green-900 hover:text-white  font-bold" : "text-black bg-white  font-bold"}>About Us </NavLink></li>
  </>

  return (
    <div className="navbar bg-purple-800 shadow-xl lg:px-16 lg:py-5">
      <div className="navbar-start">
        <div className=" text-white dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>

        <img className="h-[70px]" src="https://i.ibb.co/LQs8Nqw/image.png" alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <div className="flex flex-col justify-center items-center md:flex-row">
              <p className="text-white font-bold">{user.displayName}</p>
              <img src={user.photoURL} alt="" className="w-[50px] h-[50px] rounded-full m-5" />
              <button onClick={handleSignOut} className="px-5 py-1 lg:py-2 font-bold rounded-full bg-red-900 text-white">Log Out</button>

              
              


            </div>
            :
            <div>
              
              <Link to={"/login"} className="flex ">
                <BsPersonCircle className="text-5xl text-white font-bold mx-3"></BsPersonCircle>
                <button className="px-5 py-1 lg:py-2 font-bold rounded-full bg-red-900 text-white">Log In</button>
              </Link>



              
            </div>
        }

      </div>
    </div>
  );
};

export default Navbar;