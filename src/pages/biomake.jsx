import React, { useEffect, useState } from "react";
import Header from "../components/header";
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
import { transparent } from "../variables";
import Input from "../components/input";
import { toast } from "react-toastify";
import id from "../assets/id.svg";
import { redirect, useNavigate } from "react-router-dom";
import createProfile from "../hooks/createProfile";
import editProfile from "../hooks/editProfile";
import getProfile from "../hooks/getProfile";
import { auth } from "../firebase/fb";
import { useAuthState } from "react-firebase-hooks/auth";
const biomake = ({ mode }) => {
  const [user, loading, error] = useAuthState(auth);
  const [userNameChanged, setUserNameChanged] = useState(false);
  const [picChanged, setPicChanged] = useState(false);
  // Navigate if user is not authenticated

  const randomID = JSON.parse(localStorage.getItem("randomID"));
  const [inputs, setInputs] = useState({
    id: "",
    Name: "",
    Bio: "",
    Email: "",
    // Age: "",
    Skills: [],
    FunFacts: [],
    X: "",
    Facebook: "",
    Instagram: "",
  });
  const [picURL, setPicURL] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "Skills" || name === "FunFacts") {
      const splittedValue = value.split("\n");
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: splittedValue,
      }));
    } else if (name === "User Name") {
      setUserNameChanged(true);
      setInputs((prevInputs) => ({
        ...prevInputs,
        id: value,
      }));
    } else if (name === "Picture") {
      setPicChanged(true);
      setPicURL(files[0]);
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
    console.log(inputs);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfile(randomID,'random');
        setInputs(data);
      } catch (error) {
        if (error.code.includes("permission")) {
          navigate("/login");
        }
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [randomID]);

  const handleSubmit = async () => {
    // Validate ID
    if (inputs.id === "") {
      toast.error("Please enter an ID.");
      return;
    }
    if (inputs.id.includes(" ")){
      toast.error("A username can't contain spaces")
      return ;
    }
    // Validate Name
    const nameRegex = /^[a-zA-Z\s-']+$/;
    if (!nameRegex.test(inputs.Name)) {
      toast.error("Please enter a valid name.");
      return;
    }
    if (inputs.Name.length > 20) {
      toast.error("Name too long");
      toast.info("Your First name is just enough O_O");
      return;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputs.Email && !emailRegex.test(inputs.Email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (inputs.Bio.length === 0) {
      toast.error("Please enter a bio (We didn't make this for no reason duh)");
    }

    // Validate Skills
    if (inputs.Skills.length === 0) {
      toast.error("Please enter at least one skill.");
      return;
    }
    if (inputs.Skills.length > 8) {
      toast.error("We only support up to 8 skills");
      toast.info("Ma bro got skills ✨");
      return;
    }
    for (const skill of inputs.Skills) {
      if (skill.length > 19) {
        toast.error("Skill too long");
        toast.info("Stop Za Cap");
        return; // Exit the function if a skill is too long
      }
    }
    if (inputs.FunFacts.length > 8) {
      toast.error("We only support up to 8 fun facts");
      toast.info("People won't laugh on all of that (。_。)");
      return;
    }
    for (const fact of inputs.FunFacts) {
      if (fact.length > 19) {
        toast.error("Fun fact too long");
        toast.info("We ain't read all of that");
        return; // Exit the function if a fun fact is too long
      }
    }

    // Validate Image
    if (picURL && picURL.type !== "image/png" && picURL.type !== "image/jpeg") {
      toast.error("Please enter a valid image. (only png or jpg)");
      return;
    }

    // Validate Social Media URLs
    const urlRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (inputs.X && !urlRegex.test(inputs.X)) {
      toast.error("Please enter a valid X account URL.");
      return;
    }

    if (inputs.Facebook && !urlRegex.test(inputs.Facebook)) {
      toast.error("Please enter a valid Facebook account URL.");
      return;
    }

    if (inputs.Instagram && !urlRegex.test(inputs.Instagram)) {
      toast.error("Please enter a valid Instagram account URL.");
      return;
    }
    if (mode == "create") {
      await createProfile(inputs, picURL, navigate);
    } else if (mode == "edit") {
      editProfile(inputs, picURL, navigate, userNameChanged, picChanged);
    }
  };

  const divStyle = transparent + " h-fit sm:w-[90%] md:w-[500px] p-[15px] ";
  if (!user) {
    redirect("/login");
    return null; // Return null to avoid rendering anything
  }
  return (
    <div className="min-h-screen md:p-15 flex justify-center items-center flex-col md:w-full sm:w-[70%]">
      <Header
        message={
          mode == "create"
            ? "Welcome! Start BioMaking"
            : "Welcome! Remake your Bio! "
        }
      />
      <main className="mt-[50px] m-[20px] flex flex-col gap-14">
        <div className={divStyle}>
          <span className="text-2xl">Personal Info</span>
          <Input
            name="User Name"
            logo={id}
            type="text"
            placeholder="This won't be shown to others 👀"
            handleChange={handleChange}
            value={inputs.id}
          />
          <Input
            name="Name"
            logo={idCard}
            type="text"
            placeholder="Your Unique Name"
            handleChange={handleChange}
            value={inputs.Name}
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
              " text-secondary p-[3px] text-sm md:text-base    w-full h-[50px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 " +
              transparent
            }
            name="Bio"
            onChange={handleChange}
            value={inputs.Bio}
          />

          <Input
            name={"Email"}
            logo={maillogo}
            type="email"
            placeholder="Your Email"
            handleChange={handleChange}
            value={inputs.Email}
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
            value={inputs.Skills.join("\n")}
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
            value={inputs.FunFacts.join("\n")}
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
            value={inputs.X}
          />
          <Input
            logo={facebook}
            name="Facebook"
            placeholder="Url for your Facebook account"
            handleChange={handleChange}
            value={inputs.Facebook}
          />
          <Input
            logo={ig}
            name="Instagram"
            placeholder="Url for your Instagram account"
            handleChange={handleChange}
            value={inputs.Instagram}
          />
        </div>
        <button
          onClick={handleSubmit}
          className={
            "flex gap-5 align-middle  w-full justify-center bg-green-900 py-2 mt-[-14px] px-4 rounded-lg shadow-md " +
            buttonstyle
          }
        >
          {mode == "create" ? "Create Profile" : "Remake Profile"}
        </button>
      </main>
    </div>
  );
};

export default biomake;
