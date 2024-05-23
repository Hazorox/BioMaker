import React, { useState } from "react";
import { transparent } from "../variables";
import Person from "./../assets/Person.svg";
const Profile = () => {
  const [info, setInfo] = useState({
    name: "John Doe",
    email: "",
    age: "15",
    picture: "https://placebear.com/100/100" || Person,
    bio: "dwjkldjwakljdklwajdsajdlwahdlwdjwdljasjdjladklwjdklwajdklwjadkljad",
    skills: [],
    networks: [],
  });
  return (
    <>
      {/* <div className="h-screen flex  items-center justify-center">
        <div className={transparent + " w-[700px] h-[500px] p-[5px] gap-[5px] grid grid-cols-3 grid-rows-3  grid-flow-row grid-areas-pic-info-info-addInfo-addInfo-addInfo-Social-Social-Social"}>
          <div className="flex flex-col">
          <div className="flex  w-full gap-[20px] items-center">
            <img src={info.picture} className="w-[100px] h-[100px] rounded-full" />
          
          <span className="text-2xl">{info.name}</span>
          </div>
          <span className=" "> {info.bio} </span>
         
          
          </div>
          
        </div>
      </div> */}
      {/* main page */}
      <div className="h-screen flex  items-center justify-center">
        {/*transparent card*/}
        <div
          className={
            transparent +
            " w-[700px] h-[500px] p-[5px] gap-[10px] grid grid-cols-3 grid-rows-3  grid-flow-row grid-areas-pic-info-info-addInfo-addInfo-addInfo-Social-Social-Social"
          }
        >
          <div className="pic">
            <img
              src={info.picture}
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
          {/* <div className="info h-fit overflow-hidden container grid grid-cols-3 grid-rows-3 gap-0 grid-flow-row grid-areas-Name-Name-Name-Bio-Bio-Age-Bio-Bio-Mail"> */}
           <div className="grid grid-cols-3 grid-rows-3 gap-0 grid-flow-row">
            <div className="Name  text-2xl">{info.name}</div>
            <div className="Bio  ">{info.bio}</div>
            <div className="Age ">{info.age} Years Old</div>
            <div className="Mail">{info.email}</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
