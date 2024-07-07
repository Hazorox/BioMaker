import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import bio from "../assets/bio.svg";
import maillogo from "../assets/maillogo.svg";
import star from "../assets/star.svg";
import pic from "../assets/pic.svg";
// import age from "../assets/age.svg";
import idCard from "../assets/idCard.svg";
import joke from "./../assets/joke.svg";
import network from "./../assets/network.svg";
import facebook from "./../assets/facebook.svg";
import ig from "./../assets/ig.svg";
import x from "./../assets/x.svg";
import { buttonstyle } from "../variables";
import { useState } from "react";
import { transparent } from "../variables";
import Input from "../components/input";
import { toast } from "react-toastify";
import useFetchingToast from "../hooks/useToast";

const biomake = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    PicURL: "",
    Bio: "",
    Email: "",
    // Age: "",
    Skills: [],
    FunFacts: [],
    X: "",
    Facebook: "",
    Instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Skills" || name === "FunFacts") {
      const splittedValue = value.split("\n");
      console.log(splittedValue);
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: splittedValue,
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
    console.log(inputs);
  };
  // validationsss
  const handleSubmit = async () => {
    // Validate Name
    const nameRegex = /^[a-zA-Z\s-']+$/;
    if (!nameRegex.test(inputs.Name)) {
      toast.error("Please enter a valid name.", { autoClose: 4000 });
      return;
    }

    // Validate Picture

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputs.Email && !emailRegex.test(inputs.Email)) {
      toast.error("Please enter a valid email address.", { autoClose: 4000 });
      return;
    }

    // Validate Skills
    if (inputs.Skills.length === 0) {
      toast.error("Please enter at least one skill.", { autoClose: 4000 });
      return;
    }

    // // Validate Fun Facts
    // if (inputs.FunFacts.length === 0) {
    //   toast.error('Please enter at least one fun fact.', { autoClose: 4000 });
    //   return;
    // }

    // Validate Social Media URLs
    const urlRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (inputs.X && !urlRegex.test(inputs.X)) {
      toast.error("Please enter a valid X account URL.", { autoClose: 4000 });
      return;
    }

    if (inputs.Facebook && !urlRegex.test(inputs.Facebook)) {
      toast.error("Please enter a valid Facebook account URL.", {
        autoClose: 4000,
      });
      return;
    }

    if (inputs.Instagram && !urlRegex.test(inputs.Instagram)) {
      toast.error("Please enter a valid Instagram account URL.", {
        autoClose: 4000,
      });
      return;
    }
    // Fake data Fetching
    const fetchingFunc = async () => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
          const data = await response.json();
          resolve(data);
        }, 4000);
      });
    };
    const success = (fetchedData) => {
      console.log(`fetching data doneeeeee`);
    };
    useFetchingToast({ func: fetchingFunc, onSuccess: success });
  };
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
            handleChange={handleChange}
          />
          <Input
            name="Picture"
            logo={pic}
            type="file"
            placeholder="Your Amazing photo"
            handleChange={handleChange}
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
            name="Bio"
            onChange={handleChange}
          />

          <Input
            name={"Email"}
            logo={maillogo}
            type="email"
            placeholder="Your Email"
            handleChange={handleChange}
          />
          {/* <Input
            name={"Age"}
            logo={age}
            type="number"
            placeholder="Your Age"
            handleChange={handleChange}
          /> */}
        </div>
        <div className={divStyle}>
          <span className="text-2xl my-5 flex items-center gap-4 ">
            <img src={star} className="w-8 h-8" />
            Skills
          </span>
          <textarea
            placeholder="Add Your Skills (New Line to Add More)"
            className={
              " text-secondary p-[3px]   w-full h-[130px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 " +
              transparent
            }
            name="Skills"
            onChange={handleChange}
          />
        </div>
        <div className={divStyle}>
          <span className="text-2xl my-5 flex items-center gap-4 ">
            <img src={joke} className="w-8 h-8" />
            Fun Facts{" "}
          </span>
          <textarea
            placeholder="Make Some Jokes (New Line to Add More)  "
            className={
              " text-secondary p-[3px]   w-full h-[130px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 " +
              transparent
            }
            name="FunFacts"
            onChange={handleChange}
          />
        </div>

        <div className={divStyle}>
          <span className="text-2xl my-5 flex items-center gap-4 ">
            <img src={network} className="w-8 h-8" /> Social{" "}
          </span>
          <Input
            logo={x}
            name="X"
            placeholder="Url for your X account"
            handleChange={handleChange}
          />
          <Input
            logo={facebook}
            name="Facebook"
            placeholder="Url for your Facebook account"
            handleChange={handleChange}
          />
          <Input
            logo={ig}
            name="Instagram"
            placeholder="Url for your Instagram account"
            handleChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
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
