import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import bio from "../assets/bio.svg";
import maillogo from "../assets/maillogo.svg";
import star from "../assets/star.svg";
import pic from "../assets/pic.svg";
import age from "../assets/age.svg";
import idCard from "../assets/idCard.svg";
import joke from "./../assets/joke.svg";
import network from "./../assets/network.svg";
import facebook from "./../assets/facebook.svg";
import ig from "./../assets/ig.svg";
import x from "./../assets/x.svg";
import { buttonstyle } from "../variables";

import { transparent } from "../variables";
import Input from "../components/input";
const biomake = () => {
  const handleProfileMake = () => {};
  const divStyle = transparent + " h-fit w-[500px] p-[15px] ";
  return (
    <div className="min-h-screen p-15 flex justify-center items-center flex-col">
      <Header message={"Welcome! Start BioMaking "} />
      <main className="mt-[50px] m-[20px] flex flex-col gap-14">
        <div className={divStyle}>
          <span className="text-2xl">Personal Info</span>
          <Input
            name="Name"
            logo={idCard}
            type="text"
            placeholder="Your Unique Name"
          />
          <Input
            name="Picture"
            logo={pic}
            type="file"
            placeholder="Your Amazing photo"
          />
          
            <span className=" my-5 flex items-center gap-4 ">
              <img src={bio} className="w-6 h-6" />
              Bio
            </span>
            <textarea
              placeholder="We're Called BioMaker for a Reason !"
              className={
                " text-secondary p-[3px]    w-full h-[50px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 " +
                transparent
              }
            />
          
          <Input
            name={"Email"}
            logo={maillogo}
            type="email"
            placeholder="Your Email"
          />
          <Input name={"Age"} logo={age} type="number" placeholder="Your Age" />
        </div>
        <div className={divStyle}>
          <span className="text-2xl my-5 flex items-center gap-4 ">
            <img src={star} className="w-8 h-8" />
            Skills
          </span>
          <textarea
            placeholder="Add Your Skills"
            className={
              " text-secondary p-[3px]   w-full h-[130px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 " +
              transparent
            }
          />
        </div>
        <div className={divStyle}>
          <span className="text-2xl my-5 flex items-center gap-4 ">
            <img src={joke} className="w-8 h-8" />
            Fun Facts{" "}
          </span>
          <textarea
            placeholder="Make Some Jokes  "
            className={
              " text-secondary p-[3px]   w-full h-[130px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 " +
              transparent
            }
          />
        </div>

        <div className={divStyle}>
          <span className="text-2xl my-5 flex items-center gap-4 ">
            <img src={network} className="w-8 h-8" /> Social{" "}
          </span>
          <Input
            logo={x}
            name="X ( Twitter )"
            placeholder="Url for your X account"
          />
          <Input
            logo={facebook}
            name="Facebook"
            placeholder="Url for your Facebook account"
          />
          <Input
            logo={ig}
            name="Instagram"
            placeholder="Url for your Instagram account"
          />
        </div>
        <button
          onClick={handleProfileMake}
          className={
            "flex gap-5 align-middle  w-full justify-center bg-green-900 py-2 mt-[-14px] px-4 rounded-lg shadow-md " +
            buttonstyle
          }
        >
          Create My Profile
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default biomake;
