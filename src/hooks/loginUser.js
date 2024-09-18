import { auth, db } from "../firebase/fb";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
export const loginUser = async (
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

  if (method == "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      try {
        if (id) {
          navigate(`/${id}`);
        } else {
          navigate("/biomake/create", { replace: true }); // Correctly navigate here
        }
      } catch (err) {
        console.log(err);
      }
      toast.success(`User Logged In Successfully`);
      // return <Navigate to="/biomake" replace={true} />;
    } catch {
      toast.error("An Error Occured");
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      try {
        if (id) {
          navigate(`/${id}`);
        } else {
          navigate("/biomake/create", { replace: true }); // Correctly navigate here
        }
      } catch (err) {
        console.log(err);
      }
      toast.success(`User Logged In Successfully`);
    } catch {
      toast.error("Invalid Credentials");
    }
  }
};
