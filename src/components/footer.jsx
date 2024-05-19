import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center fixed bottom-10">
        Made by{" "}
        <Link to={"https://github.com/Hazorox"} target="_blank">
          <span className="text-[purple] underline">Hamza Awad</span> <br />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
