import { BsEye, BsEyeSlash, BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from "../Firebase/AuthProvider";
import { GoogleAuthProvider, getAuth, sendEmailVerification, signInWithPopup } from "firebase/auth";
// import auth from "../Firebase/firebase.config";
import app from "../firebase/firebase.config";
import swal from "sweetalert";



const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, user } = useContext(AuthContext);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                swal("Welcome!", "Log In successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                // swal("Sorry!", "Try again!", "error");
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        setShowPassword(password);
        console.log(name, email, password);

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            swal("Ohh Nooooo!", "Minimum 8 characters with minimum a CAPITAL letter, a small letter, a number and a special Character!", "error");
        }
        else {
            swal("Go ahead!", "You are in right track!", "success");
            
            createUser(email, password)
                .then((result) => {
                    console.log(result.user)
                    swal("Congratulations!", "Created successfully!", "success");
                    navigate(location?.state ? location.state : '/');
                    sendEmailVerification(result.currentUser)
                        .then(() => {
                            swal("Welcome!", "Check your mail!", "success");
                        });
                });
        }


    }


    return (
        <div className="px-14 mx-auto my-10">

            {
                user ? <div className="py-10 text-center font-bold">

                    <img src={user?.photoURL} alt="" className="rounded-full mx-auto my-3" />
                    <img className="rounded-full mx-auto my-3" src="https://i.ibb.co/8cbwwGw/welcome-poster-blue-design-template-b92f38c3b08a5ed4efd360e12f1aef7b-screen.jpg" alt="" />
                    <p className="my-3">Welcome to our World</p>
                    <p className="my-3">Name: {user?.displayName}</p>
                    <p className="my-3">Email: {user?.email}</p>
                </div> :
                    <div className="w-3/4 mx-auto border-4 p-5 rounded-lg border-purple-700">
                        <h2 className="text-3xl font-extrabold  text-center my-5">Registration </h2>
                        <form onSubmit={handleRegister} className="w-full">
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-black text-2xl font-bold">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Name" className="input input-bordered border-purple-700 text-black" required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text text-black text-2xl font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered border-purple-700 text-black" required />
                            </div>
                            <div className="form-control relative mb-3">
                                <label className="label">
                                    <span className="label-text text-black text-2xl font-bold">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered border-purple-700 text-black" required />
                                <span className="absolute text-4xl right-2 bottom-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>
                                    }
                                </span>
                            </div>
                            <input type="checkbox" name="terms" id="terms" required /> Accept terms and conditions
                            <div className="form-control mt-6">
                                <button className="bg-purple-700 font-bold text-center text-white p-3 rounded-lg">Registration</button>
                            </div>
                        </form>
                        <p className="flex p-2 font-semibold"> Are you old user? Please <Link to="/login" className="px-2 text-purple-600 font-extrabold"><span> Log In</span></Link></p>
                        <h3 className="text-center text-3xl p-3 font-bold"> Or </h3>
                        <div className="flex justify-center items-center pb-5">

                            <Link onClick={handleGoogleSignIn} className=" gap-2 flex justify-center items-center">
                                <button className="text-2xl font-bold px-5 bg-purple-700 rounded-2xl py-3 text-white"><BsGoogle className="text-yellow-400 inline mx-3"></BsGoogle> Google</button>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Registration;