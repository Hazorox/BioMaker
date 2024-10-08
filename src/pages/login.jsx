import React from "react";
import AccountInput from "../components/AccountInput";
import Header from "../components/header";
import Footer from "../components/footer";
const Login = () => {
  return (
    <div className="flex flex-col gap-20 h-screen overflow-y-hidden items-center justify-center">
      <Header message="Login to start BioMaking" />
      <AccountInput newUser={false} />
      <Footer />
    </div>
  );
};

export default Login;
