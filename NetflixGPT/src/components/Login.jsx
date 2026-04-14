import { checkValidate } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  const handleClick = () => {
    const message = checkValidate(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="relative w-screen h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_small.jpg"
          alt="logo"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-4/12 p-12 bg-black bg-opacity-80 text-white rounded-lg">
          <h1 className="text-3xl font-bold py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-800"
            ref={emailRef}
          />
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-800"
              ref={nameRef}
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-800"
            ref={passwordRef}
          />
          <p className="text-red-500 text-lg p-2">{errorMessage}</p>
          <button
            className="rounded-xl bg-red-600 p-2 m-2"
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p>
            {isSignIn ? "New to Netflix?" : "Already have an account?"}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleSignIn}
            >
              {isSignIn ? " Sign up now." : " Sign in."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
