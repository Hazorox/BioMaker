import React, { useState, useEffect } from "react";
import { transparent } from "../variables";
import maillogo from "../assets/maillogo.svg";
import facebook from "./../assets/facebook.svg";
import ig from "./../assets/ig.svg";
import x from "./../assets/x.svg";
import { FaXmark } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import Avatar, { AvatarComponent } from "avatar-initials";
import { buttonstyle } from "../variables";
import "../idk.css";
import getProfile from "../hooks/getProfile";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const logoStyle = "w-[50px] h-[50px] cursor-pointer";
  const { id } = useParams();
  const localId = JSON.parse(localStorage.getItem("id"));
  const [info, setInfo] = useState(null);
  const [showFullBio, setShowFullBio] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/biomake/edit/`);
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile(id);
        setInfo(profileData);
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/notFound"); // Navigate to not found page if there's an error
      }
    };

    fetchProfile();
  }, [id, navigate]);

  useEffect(() => {
    if (info && info.picURL === "") {
      const avatarUrl = Avatar.initialAvatar({
        initials: info.Name,
        initial_fg: "#ffffff",
        initial_bg: "#007bff",
        initial_size: 100,
      });
      setInfo({ ...info, picURL: avatarUrl }); // Create a new object to avoid direct mutation
    }
  }, [info]);

  const toggleBioVisibility = () => {
    setShowFullBio((prev) => !prev);
  };

  const toggleEmail = () => {
    setShowEmail((prev) => !prev);
  };

  if (!info) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {/* main page */}
      <div
        className={" h-screen flex   items-center justify-center overflow-auto"}
      >
        {/* Hidden Email Card */}
        <div
          className={
            (showEmail ? "visible " : "hidden ") +
            transparent +
            " w-[500px] h-[300px] p-[15px] gap-[10px] flex flex-col justify-center items-center"
          }
        >
          <p className="text-2xl font-bold absolute top-2 left-2">
            {info.Name.split(" ")[0]}'s Email Address
          </p>
          <p className="overflow-auto">{info.Email}</p>
          {/* <img src={} alt="close button" className="w-[20px] h-[20px] cursor-pointer" /> */}
          <FaXmark
            color="black"
            cursor={"pointer"}
            size={35}
            onClick={toggleEmail}
            className="absolute top-[10px] right-[10px]"
          />
        </div>
        {/* Hidden Bio Card */}
        <div
          className={
            (showFullBio ? "visible " : "hidden ") +
            transparent +
            " w-[700px] h-[700px] p-[15px] gap-[10px] flex flex-col leading-2 text-lg"
          }
        >
          <p className="text-3xl font-bold">{info.Name}'s Bio</p>
          {/* <p className="overflow-auto">{info.Bio}</p> */}
          <div className="overflow-auto">{info.Bio}</div>
          {/* <img src={} alt="close button" className="w-[20px] h-[20px] cursor-pointer" /> */}
          <FaXmark
            color="black"
            cursor={"pointer"}
            size={35}
            onClick={toggleBioVisibility}
            className="absolute top-[10px] right-[10px]"
          />
        </div>
        {/*transparent card*/}
        <div
          className={
            (showFullBio || showEmail ? "hidden " : "visible ") +
            transparent +
            " w-[350px] md:w-[700px]  h-[500px] p-[15px] gap-[10px] flex flex-col"
          }
        >
          <div className="h-2/6  flex space-between">
            <span className="w-[120px] md:w-1/6  flex flex-col justify-center">
              <img
                src={info.picURL}
                alt="profile picture"
                className="h-[100px] md:w-[100px] md:h-[100px] rounded-full"
              />
            </span>
            <div className="w-5/6 flex flex-col items-center mt-5 mb-10  ">
              <p className="text-3xl font-bold relative sm:top-[10px] md:top-[15px]">
                {info.Name}
              </p>
              <p className="text-xs md:text-xl md:leading-normal sm:leading-snug md:mt-[16px] sm:text-[0.5rem]">
                {showFullBio ? info.bio : info.Bio.includes('\n')? `${info.Bio.slice(0,140)}`:info.Bio.slice(0,50)}
                {/* {info && info.Bio ? info.Bio.slice(0, 140) : ""} */}
              </p>
              {info.Bio.length > 140 && (
                <button
                  id="showMoreButton"
                  className="text-blue-500 hover:underline relative bottom-2 md:bottom-0 "
                  onClick={toggleBioVisibility}
                >
                  {showFullBio ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
          <div className="flex h-4/6">
            {info.Skills && (
              <div className="w-1/2 flex flex-col">
                <span className="text-2xl flex items-center ml-[-5px]">
                  Skills
                </span>
                <span>
                  <ul className="absolute left-[2rem] list-disc">
                    {info.Skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </span>
              </div>
            )}
            {!info.FunFacts.length == 0 && (
              <div className="w-1/2 flex flex-col">
                <span className="text-2xl flex items-center ml-[-5px]">
                  Fun Facts
                </span>

                <ul className="list-disc ml-[2rem]">
                  {info.FunFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex h-1/6  justify-around">
            {info.Email && (
              <img
                className={logoStyle}
                onClick={toggleEmail}
                src={maillogo}
                alt="Mail Logo"
              />
            )}
            {info.Facebook && (
              <img
                className={logoStyle}
                onClick={() => {
                  window.open(info.Facebook, "_blank");
                }}
                src={facebook}
                alt="Facebook Logo"
              />
            )}
            {info.X && (
              <img
                className={logoStyle}
                onClick={() => {
                  window.open(info.X, "_blank");
                }}
                src={x}
                alt="X (Twitter) Logo"
              />
            )}
            {info.Instagram && (
              <img
                className={logoStyle}
                onClick={() => {
                  window.open(info.Instagram, "_blank");
                }}
                src={ig}
                alt="Instagram Logo"
              />
            )}
          </div>
        </div>
        {/* Edit Button */}
        {localId == id ? (
          <button
            className={
              "flex gap-5 align-middle h-[40px]  w-[250px] justify-center bg-gray-500 py-2 px-4 rounded-md shadow-md absolute bottom-10  " +
              buttonstyle
            }
            onClick={goEdit}
          >
            {/* Edit Icon */}
            <FaEdit className="text-2xl" /> Edit
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
