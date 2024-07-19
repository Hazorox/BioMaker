import { auth } from "../firebase/fb";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
export const loginUser = async (email, password, method = "email") => {
  if (method == "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success(`User Logged In Successfully`);
    } catch {
      toast.error("An Error Occured");
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`User Logged In Successfully`);
    } catch {
      toast.error("Invalid Credentials");
    }
  }
};
