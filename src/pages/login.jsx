import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../components/Inputs";
const Login = () => {
  return (
    <div className="flex flex-col gap-20 h-screen items-center justify-center">
      <header className="top-10 fixed">
        <p className="text-2xl md:text-4xl  ">Login to start making Profiles</p>
      </header>
      <Inputs newUser={true} />
      <footer className="text-center fixed bottom-10">
        Made by{" "}
        <Link to={"https://github.com/Hazorox"} target="_blank">
          <span className="text-[purple] underline">Hamza Awad</span> <br />
        </Link>
      </footer>
    </div>
  );
};

export default Login;
