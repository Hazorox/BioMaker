// import { getDocs,addDoc,collection } from "firebase/firestore"
// import { db } from "../firebase/fb"
// import { toast } from "react-toastify"
// const createProfile = async (data,navigate) => {
//     try{
        
//         const profiles = collection(db, "profiles")
//         const users = await getDocs(profiles)
//         users.forEach((user) => {
//             if (user.id === data.id) {
//                 toast.error("User Already Exists")
//                 return
//             }
//         })

//         await addDoc(profiles,data)
//         toast.success("Profile Created Successfully")
//         navigate(`/profile:${data.id}`, { replace: true })
//     }catch(err){
//         console.log(err)
//         toast.error("An Error Occurred")
//     }
// }

// export default createProfile
import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/fb";
import { toast } from "react-toastify";

const createProfile = async (data, navigate) => {
  try {
    const profiles = collection(db, "profiles");
    const profileQuery = await getDocs(profiles);

    let userExists = profileQuery.docs.some((doc) => doc.data().id === data.id);

    if (userExists) {
      toast.error("User Name Already Exists");
      return;
    }

    await addDoc(profiles, data);
    localStorage.setItem("id", JSON.stringify(data.id));
    toast.success("Profile Created Successfully");
    navigate(`/${data.id}`, { replace: true });
  } catch (err) {
    console.log(err);
    toast.error("An Error Occurred");
  }
};

export default createProfile;
