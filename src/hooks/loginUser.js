import { auth } from "../firebase/fb";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
export const loginUser = async (email, password, method = "email",navigate) => {
  if (method == "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success(`User Logged In Successfully`);
      // return <Navigate to="/biomake" replace={true} />;
      navigate('/biomake', { replace: true }); // Correctly navigate here

    } catch {
      toast.error("An Error Occured");
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`User Logged In Successfully`);
      navigate('/biomake', { replace: true }); // Correctly navigate here

    } catch {
      toast.error("Invalid Credentials");
    }
  }
};
