import React, { useState } from "react";
import registration from "../assets/registration.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Circles } from "react-loader-spinner";

const Signup = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [passwordShow, setPasswordShow] = useState(false);
  let [loader, setLoader] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameErr("");
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
    if (!fullName) {
      setFullNameErr("*FullName is Required");
    }
    if (!password) {
      setPasswordErr("*Password is Required");
    }
    if (email && fullName && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/");
            const user = userCredential.user;
            confirm.log(user);
          }, 2000);
        })
        .catch((error) => {
          setTimeout(() => {
            setLoader(false);
            error.code.includes("auth/email-already-in-use") &&
              setEmailErr("*This email is already used");
            console.log(error);
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
          }, 2000);
        });
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end mr-[70px] mt-[140px]">
        <div>
          <h2 className=" font-nun text-[#11175D] font-bold text-[34px]">
            Get started with easily register
          </h2>
          <p className=" font-nun text-[20px] text-[#808080]">
            Free register and you can enjoy it
          </p>

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
              onChange={handleFullName}
              className={`w-96 rounded-lg ${
                emailErr ? " border border-red-500" : "border border-[#bab9b9]"
              } outline-none py-[26px] px-[52px]`}
              type="text"
              value={fullName}
              placeholder="Enter Your FullName"
            />
            {fullNameErr && (
              <p className=" font-bold text-[13px] text-red-500">
                {fullNameErr}
              </p>
            )}
            <p
              className={`absolute top-[-9px] left-[34px] px-[18px] bg-white font-nun text-[13px] font-semibold tracking-[1px] ${
                fullNameErr ? "text-red-500" : "text-[#707070]"
              }`}
            >
              Ful Name
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
                className="text-2xl absolute top-[13%]  left-[70%] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordShow(true)}
                className="text-2xl absolute top-[13%]  left-[70%] cursor-pointer"
              />
            )}

            <div className=" w-96 text-center">
              {loader ? (
                <div className=" mt-[15px] flex justify-center">
                  <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              ) : (
                <div className=" bg-primary rounded-full py-[20px] mt-[40px]">
                  <button
                    onClick={handleSubmit}
                    className=" font-nun font-semibold text-[20px] text-white"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              <div className=" mt-[15px]">
                <p className=" font-sans text-[13px] ">
                  Already have an account ?{" "}
                  <Link
                    to="/"
                    className="text-[13px] font-sans font-bold text-[#EA6C00]"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="h-screen w-full object-cover"
          src={registration}
          alt="registration"
        />
      </div>
    </div>
  );
};

export default Signup;
