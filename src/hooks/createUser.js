import { toast } from "react-toastify";
import { auth } from "../firebase/fb";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
export const createUser = async (email, password, method = "email") => {
  if (method == "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success(`User Created Successfully`);
    } catch (err) {
      toast.error("An Error Occurred");
    }
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`User Created Successfully`);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email Already In Use");
      } else {
        toast.error("An Error Occured");
      }
    }
  }
};
