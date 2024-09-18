import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase/fb";

export const createUser = async (
  email,
  password,
  method = "email",
  navigate
) => {
  const randomID = JSON.parse(localStorage.getItem("randomID"));
  let id = null;
  if (randomID) {
    const q = query(
      collection(db, "profiles"),
      where("randomID", "==", randomID)
    );
    const profiles = await getDocs(q);
    let userDoc = null;

    profiles.forEach((doc) => {
      userDoc = doc.data();
    });
    id = userDoc.id;
    console.log(id);
  }
  if (method === "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success(`User Created Successfully`);
      if(id){
        navigate(`/${id}`,{replace:true})
      }else{
      navigate("/biomake/create", { replace: true });
    }} catch (err) {
      toast.error("An Error Occurred");
      console.log(err);
    }
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`User Created Successfully`);
      if(id){
        navigate(`/${id}`,{replace:true})
      }else{
      navigate("/biomake/create", { replace: true }); // Use navigate here
    }} catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email Already In Use");
      } else {
        toast.error("An Error Occurred");
        console.log(err);
      }
    }
  }
};
