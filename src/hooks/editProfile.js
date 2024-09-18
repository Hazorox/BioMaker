import {
  query,
  where,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/fb";
import { toast } from "react-toastify";
import { deleteObject, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/fb";
const editProfile = async (data, picURL, navigate, userNameChanged,picChanged) => {
  console.log(picURL)
  const inValidId = ["notFound", "signup", "login", "biomake"];
  for (var i in inValidId) {
    if (data.id === i) {
      toast.error("This User Name can't be used");
      return;
    }
  }
  try {
    const randomID = JSON.parse(localStorage.getItem("randomID"));
    const q = query(collection(db, "profiles"), where("randomID", "==", randomID));
    const profiles = await getDocs(q);
    let userRef = null;

    profiles.forEach((doc) => {
      userRef = doc.ref;
    });
    console.log(`user name changed state : ${userNameChanged}`)
    console.log(`pic  changed state : ${picChanged}`)
    if(userNameChanged||picChanged){
    if (userNameChanged) {
      const profileQuery = await getDocs(collection(db, "profiles"));
      let userExists = profileQuery.docs.some(
        (doc) => doc.data().id === data.id
      );

      if (userExists) {
        toast.error("User Name Already Exists");
        return;
      }
    }
    if(picChanged){
      try{  await deleteObject(ref(storage,`images/${randomID}.png`));
    }catch(err){
      console.log('error deleting old pic')
    }
      await uploadBytes(ref(storage, `images/${randomID}.png`), picURL);
      console.log('uploaded pic')
      }

        // Step 6: Delete the old file
      

    } // const imgRef = ref(storage, `images/${data.id}.png`);
    // if(picURL){

    // }else{

    // }
    console.log("all goin good");
    await updateDoc(userRef, data);
    toast.success("Profile Edited Successfully");
    navigate(`/${data.id}`, { replace: true });
  } catch (err) {
    console.log(err);
    toast.error("An Error Occurred");
  }
};

export default editProfile;
