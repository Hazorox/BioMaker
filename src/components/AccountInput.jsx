import googleicon from "../assets/googleicon.svg";
import passlogo from "../assets/passlogo.svg";
import maillogo from "../assets/maillogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  transparent,
  anchorstyle,
  inputstyle,
  buttonstyle,
} from "../variables";
import Input from "./input";
import { createUser } from "../hooks/createUser";
import { loginUser } from "../hooks/loginUser";
import { useNavigate } from "react-router-dom";
const AccountInput = ({ newUser }) => {
  const navigate = useNavigate()
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
  };

  const handleSubmit = async () => {
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (newUser) {
      const passRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      if (!passRegex.test(inputs.password)) {
        toast.error(
          "Please make a stronger passowrd. (like adding numbers and special characters)"
        );
        return;
      }
      if (inputs.confirm && inputs.confirm !== inputs.password) {
        toast.error("Passwords do not match.");
        return;
      }
    }
    // Fake fetching to test code
    // I should Replace it with code to fetch users and check if that user is correct
    // Code for making new User

    try {
      if (newUser) {
        await createUser(inputs.email, inputs.password,'email',navigate);
        // navigate('/biomake',{replace:true})
      } else {
        await loginUser(inputs.email, inputs.password,'email',navigate);
        // navigate('/biomake',{replace:true})
      }
    } catch (err) {
      toast.error('an error occurred');
      console.log('error')
    }
  };

  const handleGoogleAuth = () => {
    try {
      if (newUser) {
        createUser("", "", "google",navigate);
        // navigate('/biomake',{replace:true})
      } else {
        loginUser("", "", "google",navigate);
        // navigate('/biomake',{replace:true})
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={
          `flex flex-col justify-center ` +
          transparent +
          ` p-8 sm:w-[250px] h-fit md: md:mx-auto md:w-[450px] ${
            newUser ? " gap-[5px]" : "gap-[10px]"
          } `
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
                className={transparent + inputstyle + " mb-5"}
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
            onClick={handleSubmit}
          >
            {newUser ? "Sign Up" : "Log In"}
          </button>
          <button
            className={
              "flex gap-5 align-middle  w-full justify-center bg-white py-2 px-4 rounded-lg shadow-md " +
              buttonstyle
            }
            onClick={handleGoogleAuth}
          >
            <img src={googleicon} className="w-10 h-7" alt="Google Icon" />
            <span className="text-secondary mt-auto">
              {newUser ? "Sign Up with Google" : "Log In with Google"}
            </span>
          </button>
        </div>
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
    </>
  );
};

export default AccountInput;
