import {
  query,
  where,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/fb";
import { toast } from "react-toastify";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
    const id = JSON.parse(localStorage.getItem("id"));
    const q = query(collection(db, "profiles"), where("id", "==", id));
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
    if(!picChanged&&userNameChanged){
      //TODO: Fix when user changes their username the profile name ain't getting updated >:(
      try {
        // Step 1: Get a reference to the old file
        const oldFileRef = ref(storage, `images/${id}.png`);
        
        // Step 2: Get the download URL of the old file
        const oldFileUrl = await getDownloadURL(oldFileRef);
        const blob = await fetch(oldFileUrl).then((res) => res.blob());

        // Step 4: Create a reference for the new file
        const newFileRef = ref(storage, `images/${data.id}.png`); // Adjust the path as needed

        // Step 5: Upload the file with the new name
        await uploadBytes(newFileRef, blob);

        // Step 6: Delete the old file
        await deleteObject(oldFileRef);

        console.log("File renamed successfully.");
    }catch(err){

      console.log('here')
        console.log(err)
      
    }}else{
      try{  await deleteObject(ref(storage,`images/${id}.png`));
    }catch(err){
      console.log('error deleting old pic')
    }
      await uploadBytes(ref(storage, `images/${data.id}.png`), picURL);
      console.log('uploaded pic')
      }

        // Step 6: Delete the old file
      

    } // const imgRef = ref(storage, `images/${data.id}.png`);
    // if(picURL){

    // }else{

    // }
    console.log("all goin good");
    await updateDoc(userRef, data);
    localStorage.setItem("id", JSON.stringify(data.id));
    toast.success("Profile Edited Successfully");
    navigate(`/${data.id}`, { replace: true });
  } catch (err) {
    console.log(err);
    toast.error("An Error Occurred");
  }
};

export default editProfile;
