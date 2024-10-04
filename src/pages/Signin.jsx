import React, { useState } from "react";
import login from "../assets/login.png";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, );
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [passwordShow, setPasswordShow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailErr("*Email is Required");
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("*Invalid Email");
    }

    if (!password) {
      setPasswordErr("*Password is Required");
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential,) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          if (error.code.includes("auth/invalid-credential")) {
            setEmailErr("*Invalid-Credential");
          }
          console.log(errorCode);
        });
    }
  };

  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end mr-[70px] mt-[140px]">
        <div>
          <h2 className=" font-sans text-[#11175D] font-bold text-[33px]">
            Login to your account!
          </h2>

          <button onClick={handleGoogleLogin} className="mt-[10px]">
            <img src={google} alt="google" />
          </button>

          <div className=" relative mt-[30px]">
            <input
              onChange={handleEmail}
              className={`w-96 rounded-lg ${
                emailErr ? " border border-red-500" : "border border-[#bab9b9]"
              } outline-none py-[26px] px-[52px]`}
              type="Email"
              value={email}
              placeholder=" Enter Your Email"
            />
            {emailErr && (
              <p className=" font-bold text-[13px] text-red-500">{emailErr}</p>
            )}
            <p
              className={`absolute top-[-9px] left-[34px] px-[18px] bg-white font-nun text-[13px] font-semibold tracking-[1px] ${
                emailErr ? "text-red-500" : "text-[#707070]"
              }`}
            >
              Email Address
            </p>
          </div>

          <div className=" relative mt-[40px]">
            <input
              onChange={handlePassword}
              className={`w-96 rounded-lg ${
                emailErr ? " border border-red-500" : "border border-[#bab9b9]"
              } outline-none py-[26px] px-[52px]`}
              type={passwordShow ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password"
            />
            {passwordErr && (
              <p className=" font-bold text-[13px] text-red-500">
                {passwordErr}
              </p>
            )}
            <p
              className={`absolute top-[-9px] left-[34px] px-[18px] bg-white font-nun text-[13px] font-semibold tracking-[1px] ${
                passwordErr ? "text-red-500" : "text-[#707070]"
              }`}
            >
              Password
            </p>
            {passwordShow ? (
              <FaEye
                onClick={() => setPasswordShow(false)}
                className="text-2xl absolute top-[13%]  left-[90%] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordShow(true)}
                className="text-2xl absolute top-[13%]  left-[90%] cursor-pointer"
              />
            )}

            <div className=" w-96 text-center">
              <div className=" bg-primary rounded-full py-[20px] mt-[40px]">
                <button
                  onClick={handleSubmit}
                  className=" font-nun font-semibold text-[20px] text-white"
                >
                  Sign In
                </button>
              </div>

              <div className=" mt-[15px]">
                <p className=" font-sans text-[13px] ">
                  Already have an account ?{" "}
                  <Link
                    to="/Signup"
                    className="text-[13px] font-sans font-bold text-[#EA6C00]"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img className="h-screen w-full object-cover" src={login} alt="login" />
      </div>
    </div>
  );
};

export default Signin;
