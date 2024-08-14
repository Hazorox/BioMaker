import React from "react";

const Header = ({ message }) => {
  return (
    <>
      <header className="top-5 md:top-10  sticky">
        <p className="text-2xl md:text-4xl  ">{message}</p>
      </header>
    </>
  );
};

export default Header;
