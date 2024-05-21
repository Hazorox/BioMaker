import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AccountInput from "../components/AccountInput";

const Signup = () => {
  return (
    <div className="flex flex-col gap-20 h-screen items-center justify-center">
      <Header message="Signup to start BioMaking" />
      <AccountInput newUser={true} />
      <Footer />
    </div>
  );
};

export default Signup;
