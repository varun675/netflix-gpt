import React from "react";
import Header from "./Header";
import { app } from "../utils/firebase";
import { useState } from "react";
import { useRef } from "react";
import { validateForm } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };


  const handleButtonClick = (e) => {
    setSuccessMessage(null);
    const userEmail = email.current.value.trim();
    const message = validateForm(userEmail, password.current.value);
    setErrorMessage(message);
    if (message ) return;
if(!isSignInForm){
    const username = name.current.value.trim();

    if (!username) {
      setErrorMessage("Name is required.");
      return;
    }
  }

if (!isSignInForm) {
      const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, userEmail, password.current.value)
      .then(() => {
        setSuccessMessage("User created successfully.");
      })
      .catch((error) => {
        console.error("Failed to create user record:", error);
        setErrorMessage("Unable to create user. Please try again.");
      });
    } else {
          const auth = getAuth(app);
      signInWithEmailAndPassword(auth, userEmail, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
  };
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute top-1/2 left-1/2 flex w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-black/75 p-8"
      >
        <h1 className="mb-2 text-2xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full rounded-xl bg-gray-700 p-3 text-white"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-gray-700 p-3 text-white"
          />
        )}
        
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full rounded-xl bg-gray-700 p-3 text-white"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button
          type="submit"
          className="w-full rounded bg-red-600 p-3 text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="text-white">
            New to Netflix?{" "}
            <a
              href="#"
              onClick={(e) => {  toggleSignInForm();
              }}
              className="text-blue-500 hover:underline"
            >
              Sign up now
            </a>
            .
          </p>
        ) : (
          <p className="text-white">
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleSignInForm();
              }}
              className="text-blue-500 hover:underline"
            >
              Sign in now
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
