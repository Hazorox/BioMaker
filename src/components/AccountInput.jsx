import googleicon from "../assets/googleicon.svg";
import passlogo from "../assets/passlogo.svg";
import maillogo from "../assets/maillogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  transparent,
  anchorstyle,
  inputstyle,
  buttonstyle,
} from "../variables";
import Input from "./input";
const AccountInput = ({ newUser }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    console.log(inputs);
  };

  return (
    <div
      className={
        `flex flex-col justify-center ` +
        transparent +
        ` p-8 sm:w-[250px] h-[350px] md:${
          newUser ? "h-[1000px]" : "h-[450px]"
        } md:mx-auto md:w-[450px] ${newUser ? "gap-2" : "gap-5"} `
      }
    >
      <div className={"flex flex-col gap-5"}>
        <Input
          logo={maillogo}
          handleChange={handleChange}
          name="email"
          type="email"
          placeholder="Your Email Address"
        />

        <Input
          logo={passlogo}
          handleChange={handleChange}
          name="password"
          type="password"
          placeholder="Your Password"
        />
        {newUser && (
          <div>
            <input
              onChange={handleChange}
              className={transparent + inputstyle}
              name="confirm"
              type="password"
              placeholder="Confirm Your Password"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <button
          className={
            "bg-[#2c9956] py-2.5 px-4 rounded-lg text-white " + buttonstyle
          }
        >
          {newUser ? "Sign Up" : "Log In"}
        </button>
        <button
          className={
            "flex gap-5 align-middle  w-full justify-center bg-white py-2 px-4 rounded-lg shadow-md " +
            buttonstyle
          }
        >
          <img src={googleicon} className="w-10 h-7" alt="Google Icon" />
          <span className="text-secondary mt-auto">
            {newUser ? "Sign Up with Google" : "Log In with Google"}
          </span>
        </button>
      </div>
      <span className="text-center ">
        {newUser ? (
          <>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className={anchorstyle}>Log In</span>
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span className={anchorstyle}>Sign Up</span>
            </Link>
          </>
        )}
      </span>
    </div>
  );
};

export default AccountInput;
