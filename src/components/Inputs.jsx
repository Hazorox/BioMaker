import googleicon from "../assets/googleicon.svg";
import passlogo from "../assets/passlogo.svg";
import maillogo from "../assets/maillogo.svg";

const Inputs = ({ newUser }) => {
  const transparent =
    "bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg backdrop-filter backdrop-blur-[3.9px] border border-[rgba(255,255,255,0.24)]";

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
            className={transparent + " placeholder:text-secondary"}
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
            className={transparent + " placeholder:text-secondary"}
            name="password"
            type="password"
            placeholder="Your Unique Password!"
          />
        </div>
        {newUser && (
          <input
            className={transparent + " placeholder:text-secondary"}
            name="confirm"
            type="password"
            placeholder="Confirm Your Password"
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-[#2c9956] py-2 px-4 rounded-lg text-white">
          {newUser ? "Sign Up" : "Log In"}
        </button>
        <div className="flex items-center gap-2">
          <img src={googleicon} className="w-10 h-10" alt="Google Icon" />
          <button className="bg-white py-2 px-4 rounded-lg shadow-md">
            {newUser ? "Sign Up with Google" : "Log In with Google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;

