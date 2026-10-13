import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    
const [isSignInForm, setIsSignInForm] = useState(true);
const toggleSignInForm = () => { 
    setIsSignInForm(!isSignInForm);
}
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen w-screen">
        <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f0b42cac-9ced-425f-8677-777eadbdbe2f/web/IN-en-20261005-TRIFECTA-perspective_14c6dcd8-c058-4841-a0e5-1d0d70b35836_large.jpg"
          alt="Netflix Background"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 flex w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-black/75 p-8">
      <h1 className="mb-2 text-2xl text-white">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <input type="text" placeholder="Email" className="w-full rounded-xl bg-gray-700 p-3 text-white" />
        {!isSignInForm && <input type="text" placeholder="Full Name" className="w-full rounded-xl bg-gray-700 p-3 text-white" />}
        <input type="password" placeholder="Password" className="w-full rounded-xl bg-gray-700 p-3 text-white" /> 
        <button type="submit" className="w-full rounded bg-red-600 p-3 text-white">
          {isSignInForm ? 'Sign IN' : 'Sign Up'}
        </button>
        {isSignInForm ?<p className="text-white">
          New to Netflix? <a href="#" onClick={toggleSignInForm} className="text-blue-500 hover:underline">Sign up now</a>.
        </p> : <p className="text-white">
          Already have an account? <a href="#" onClick={toggleSignInForm} className="text-blue-500 hover:underline">Sign in now</a>.
        </p>}
      </form>
    </div>
  );
};

export default Login;
