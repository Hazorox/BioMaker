import googleicon from "../assets/googleicon.svg";
import passlogo from "../assets/passlogo.svg";
import maillogo from "../assets/maillogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { transparent,anchorstyle,inputstyle ,buttonstyle} from "../variables";
const Inputs = ({ newUser }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  
    const handleChange=(e)=>{
      const {name, value} = e.target;
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }))
      console.log(inputs)
    }
  
 

  return (
    <div
      className={
        "flex flex-col justify-center " +
        transparent +
        " p-8 h-[250px] md:h-[400px] w-[450px] gap-5"
      }
    >
      <div className="flex flex-col gap-5">
        <div>
          <span className="mb-5 flex items-center gap-4">
            <img src={maillogo} className="w-6 h-6" alt="Mail Logo" />
            <span>Email</span>
          </span>
          <input
            onChange={handleChange}
            className={transparent + inputstyle}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <span className="mb-5 flex items-center gap-4">
            <img src={passlogo} className="w-6 h-6" alt="Password Logo" />
            <span>Password</span>
          </span>
          <input
            onChange={handleChange}
            className={transparent + inputstyle}
            name="password"
            type="password"
            placeholder="Your Unique Password!"
          />
        </div>
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
        <button className={"bg-[#2c9956] py-2.5 px-4 rounded-lg text-white "+buttonstyle}>
          {newUser ? "Sign Up" : "Log In"}
        </button>
        <button className={"flex gap-5 align-middle  w-full justify-center bg-white py-2 px-4 rounded-lg shadow-md "+buttonstyle}>
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

export default Inputs;
