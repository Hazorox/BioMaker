// import React, { useState, useEffect } from "react";
// import { transparent } from "../variables";
// import maillogo from "../assets/maillogo.svg";
// import facebook from "./../assets/facebook.svg";
// import ig from "./../assets/ig.svg";
// import x from "./../assets/x.svg";
// import { FaXmark } from "react-icons/fa6";
// import { useNavigate, useParams } from "react-router-dom";
// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db, storage } from "../firebase/fb";
// import { ref, getDownloadURL } from "firebase/storage";
// import Avatar from "avatar-initials";
// import { toast } from "react-toastify";

// import "../idk.css";
// // const Profile = async () => {
// //   const { id } = useParams();
// //   const logoStyle = "w-[50px] h-[50px] cursor-pointer";
// //   const [info,setInfo] = useState({})
// //   // const [info, setInfo] = useState({
// //   //   Name: "John Doe",
// //   //   PicURL: "https://placebear.com/200/200",
// //   //   Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

// const Profile = () => {
//   const logoStyle = "w-[50px] h-[50px] cursor-pointer";
//   const { id } = useParams();
//   const [info, setInfo] = useState(null); // Initialize as null
//   const [showFullBio, setShowFullBio] = useState(false);
//   const [showEmail, setShowEmail] = useState(false);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const fetchProfile = async () => {
//   //     const q = query(collection(db, "profiles"), where("id", "==", id));
//   //     const profiles = await getDocs(q);
//   //     let userDoc = null; // Initialize userDoc

//   //     profiles.forEach((doc) => {
//   //       userDoc = doc.data();
//   //     });
//   //     const imgRef = ref(storage, `images/${id}.png`);
//   //     const url = await getDownloadURL(imgRef);
//   //     userDoc.picURL = url;

//   //     if (userDoc) {
//   //       console.log(`userDoc:`, userDoc)
//   //       setInfo(userDoc);
//   //       console.log(`info:`, info)

//   //     } else {
//   //       navigate("/notFound");
//   //     }
//   //   };

//   //   fetchProfile();
//   //   if(info.picURL==''){
//   //     info.picURL = Avatar.initialAvatar({
//   //       initials: info.Name,
//   //       initial_fg: '#ffffff', // Foreground color for initials
//   //       initial_bg: '#007bff', // Background color
//   //       initial_size: 100, // Size of the avatar
//   //     })
//   //   }
//   // }, [id]);
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const q = query(collection(db, "profiles"), where("id", "==", id));
//       const profiles = await getDocs(q);
//       let userDoc = null;

//       profiles.forEach((doc) => {
//         userDoc = doc.data();
//       });

//       try {
//         const imgRef = ref(storage, `images/${id}.png`);
//         const url = await getDownloadURL(imgRef);
//         userDoc.picURL = url;
//       } catch (error) {
//         userDoc.picURL = ''
//       }

//       console.log(`userDoc:`, userDoc);

//       if (userDoc) {
//         setInfo(userDoc);
//       } else {
//         navigate("/notFound");
//       }
//     };

//     fetchProfile();
//   }, [id, navigate]); // Ensure this effect runs when 'id' or 'navigate' changes

//   useEffect(() => {
//     if (info) {
//       if (info.picURL == "") {
//         info.picURL = Avatar.initialAvatar({
//           initials: info.Name,
//           initial_fg: "#ffffff",
//           initial_bg: "#007bff",
//           initial_size: 100,
//         });
//       }
//       console.log("Updated info:", info); // Log updated state
//     }
//   }, [info]); // This will log whenever 'info' changes

//   const toggleBioVisibility = () => {
//     setShowFullBio((prev) => !prev);
//   };

//   const toggleEmail = () => {
//     setShowEmail((prev) => !prev);
//   };

//   // Conditional rendering to avoid accessing properties of null
//   if (!info) {
//     return (
//       <>
//         <div className="flex items-center justify-center h-screen">
//           <div className="loader"></div>
//         </div>
//       </>
//     );
//   }
import React, { useState, useEffect } from "react";
import { transparent } from "../variables";
import maillogo from "../assets/maillogo.svg";
import facebook from "./../assets/facebook.svg";
import ig from "./../assets/ig.svg";
import x from "./../assets/x.svg";
import { FaXmark } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db, storage } from "../firebase/fb";
import { ref, getDownloadURL } from "firebase/storage";
import Avatar from "avatar-initials";
import { toast } from "react-toastify";


import "../idk.css";

const Profile = () => {
  const logoStyle = "w-[50px] h-[50px] cursor-pointer";
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [showFullBio, setShowFullBio] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const q = query(collection(db, "profiles"), where("id", "==", id));
      const profiles = await getDocs(q);
      let userDoc = null;

      profiles.forEach((doc) => {
        userDoc = doc.data();
      });

      try {
        const imgRef = ref(storage, `images/${id}.png`);
        const url = await getDownloadURL(imgRef);
        userDoc.picURL = url;
      } catch (error) {
        userDoc.picURL = ""; // No image found, will generate avatar later
      }

      if (userDoc) {
        setInfo(userDoc);
      } else {
        navigate("/notFound");
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
            " w-[500px] h-[300px] p-[15px] gap-[10px] flex flex-col"
          }
        >
          <p className="text-2xl font-bold">{info.Name}'s Email Address</p>
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
            " w-[700px] h-[700px] p-[15px] gap-[10px] flex flex-col"
          }
        >
          <p className="text-3xl font-bold">{info.Name}'s Bio</p>
          <p className="overflow-auto">{info.Bio}</p>
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
            " w-[700px] h-[500px] p-[15px] gap-[10px] flex flex-col"
          }
        >
          <div className="h-2/6  flex space-between">
            <span className="w-1/6 flex flex-col justify-center">
              <img
                src={info.picURL}
                alt="profile picture"
                className="w-[100px] h-[100px] rounded-full"
              />
            </span>
            <div className="w-5/6 flex flex-col items-center mt-5 mb-10  ">
              <p className="text-3xl font-bold">{info.Name}</p>
              <p className="">
                {/* {showFullBio ? info.bio : `${info.bio.slice(0, 100)}...`} */}
                {info.Bio.slice(0, 140)}
              </p>
              {info.Bio.length > 140 && (
                <button
                  id="showMoreButton"
                  className="text-blue-500 hover:underline"
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
      </div>
    </>
  );
};

export default Profile;
