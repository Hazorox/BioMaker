import { auth } from "../firebase/fb";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
export const loginUser = async (
  email,
  password,
  method = "email",
  navigate
) => {
  if (method == "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      try{
        const id = JSON.parse(localStorage.getItem('id'))
        if(id){
          navigate(`/${id}`)
        }else{
          
          navigate("/biomake/create", { replace: true }); // Correctly navigate here
        }
      }catch(err){
        console.log(err)
      }
      toast.success(`User Logged In Successfully`);
      // return <Navigate to="/biomake" replace={true} />;
    } catch {
      toast.error("An Error Occured");
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      try{
        const id = JSON.parse(localStorage.getItem('id'))
        if(id){
          navigate(`/${id}`)
        }else{
          
          navigate("/biomake/create", { replace: true }); // Correctly navigate here
        }
      }catch(err){
        console.log(err)
      }
      toast.success(`User Logged In Successfully`);
    } catch {
      toast.error("Invalid Credentials");
    }
  }
};
