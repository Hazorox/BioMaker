import React, { useState } from "react";
import { transparent } from "../variables";
import Person from "./../assets/Person.svg";
import maillogo from "../assets/maillogo.svg";
import facebook from "./../assets/facebook.svg";
import ig from "./../assets/ig.svg";
import x from "./../assets/x.svg";
const Profile = () => {
  const logoStyle = "w-[50px] h-[50px]";
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "hamzaawad8899@gmail.com",
    // age: `15 Years old`,
    picture: "https://placebear.com/100/100" || Person,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    skills: [],
    networks: [],
  });
  return (
    <>
      {/* main page */}
      <div className="h-screen flex  items-center justify-center">
        {/*transparent card*/}

        <div
          className={
            transparent +
            " w-[700px] h-[500px] p-[15px] gap-[10px] flex flex-col"
          }
        >
          <div className="h-2/6  flex space-between">
            <span className="w-1/6 flex flex-col justify-center">
              <img
                src={info.picture}
                alt="profile picture"
                className="w-[100px] h-[100px] rounded-full"
              />
            </span>
            <div className="w-5/6 flex flex-col items-center mt-5 overflow-auto ">
              <p className="text-3xl font-bold">{info.name}</p>
              <p>{info.bio}</p>
            </div>
          </div>
          <div className="flex h-4/6">
            <div className="w-1/2 flex flex-col">
              <span className="text-2xl flex items-center ml-[-5px]">
                Skills
              </span>
              <span>
                <ul className="absolute left-[2rem] list-disc">
                  <li>Skill one</li>
                  <li>Skill Two</li>
                  <li>Skill Three</li>
                  <li>Skill Four</li>
                  <li>Skill Five</li>
                  <li>Skill Six</li>
                </ul>
              </span>
            </div>
            <div className="w-1/2 flex flex-col">
              <span className="text-2xl flex items-center ml-[-5px]">
                Fun Facts
              </span>

              <ul className="list-disc ml-[2rem]">
                <li>Fact one</li>
                <li>Fact Two</li>
                <li>Fact Three</li>
                <li>Fact Four</li>
                <li>Fact Five</li>
                <li>Fact Six</li>
              </ul>
            </div>
          </div>
          <div className="flex h-1/6  justify-around">
            <img className={logoStyle} src={maillogo} alt="Mail Logo" />
            <img className={logoStyle} src={facebook} alt="Facebook Logo" />
            <img className={logoStyle} src={x} alt="X (Twitter) Logo" />
            <img className={logoStyle} src={ig} alt="Instagram Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
