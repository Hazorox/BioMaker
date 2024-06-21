import React, { useState } from "react";
import { transparent } from "../variables";
import Person from "./../assets/Person.svg";
import Star from "./../assets/star.svg";
const Profile = () => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "hamzaawad8899@gmail.com",
    // age: `15 Years old`,
    picture: "https://placebear.com/100/100" || Person,
    bio: "dkopjwaldjwaldjalwjd",
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
            <div className="w-5/6 flex flex-col justify-center ">
              <p className="text-3xl font-bold">{info.name}</p>
              <p>{info.bio}</p>
            </div>
            
          </div>
          <div className="flex h-4/6">
            <div className="w-1/2 flex flex-col">
              <span className="text-2xl flex items-center ml-[-5px]">
                 <img src={Star} className="w-8 h-8 mb-[5px]" /> Skills</span>
              <span>
              <ul className="absolute left-2">
                <li>Skill one</li>
                <li>Skill Two</li>
                <li>Skill Three</li>
                <li>Skill Four</li>
                <li>Skill Five</li>
                <li>Skill Six</li>
              </ul>
              </span>
            </div>
            <div className="w-1/2">a2</div>
          </div>
          <div className="flex h-1/6 justify-around">
            sociAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaal
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
