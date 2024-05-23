import React, { useState } from "react";
import { transparent } from "../variables";
import Person from "./../assets/Person.svg";
const Profile = () => {
  const [info, setInfo] = useState({
    name: "Hamza Mohammed Awad",
    email: "",
    age: 0,
    picture: "" || Person,
    bio: "",
    skills: [],
    networks: [],
  });
  return (
    <>
      <div className="h-screen flex flex-row items-center justify-center">
        <div className={transparent + " w-[700px] h-[450px] p-[5px] gap-[5px]"}>
          <div className="flex flex-row">
          <span className="flex gap-[20px] items-center">
            <img src={info.picture} className="w-10 h-10 rounded-full" />
          
          <span className="text-2xl">{info.name}</span></span>
          <span>{info.email}</span>
          <span>{info.age}</span>
          <span>{info.bio}</span></div>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
