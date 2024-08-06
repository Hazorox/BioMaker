import { toast } from "react-toastify";
import { auth } from "../firebase/fb";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const createUser = async (email, password, method = "email", navigate) => {
  
  if (method === "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success(`User Created Successfully`);
      navigate('/biomake', { replace: true });
    } catch (err) {
      toast.error("An Error Occurred");
      console.log(err)
    }
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`User Created Successfully`);
      navigate('/biomake', { replace: true }); // Use navigate here
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email Already In Use");
      } else {
        toast.error("An Error Occurred");
        console.log(err)
      }
    }
  }
};