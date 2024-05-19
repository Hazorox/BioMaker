import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../components/Inputs";
import Header from "../components/header";
import Footer from "../components/footer";
const Login = () => {
  return (
    <div className="flex flex-col gap-20 h-screen items-center justify-center">
      <Header condition="login" />
      <Inputs newUser={false} />
      <Footer />
    </div>
  );
};

export default Login;
