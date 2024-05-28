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
      {/* main page */}
      <div className="h-screen flex  items-center justify-center">
        {/*transparent card*/}

        <div
          className={
            transparent +
            " w-[700px] h-[500px] p-[15px] gap-[10px] flex flex-col"
          }
        >
          <div className="h-2/4">
            <img
              src={info.picture}
              alt="profile picture"
              className="w-[100px] h-[100px] rounded-full"
            />
            <div></div>
          </div>
          <div className="flex h-2/5">
            <div className="w-1/2">a1</div>
            <div className="w-1/2">a2</div>
          </div>
          <div className="flex h-1/6 justify-around">sociAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaal</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
