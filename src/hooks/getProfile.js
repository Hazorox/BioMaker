import { getDocs, collection, query, where } from "firebase/firestore";
import { db, storage } from "../firebase/fb";
import { ref, getDownloadURL } from "firebase/storage";
const getProfile = async (id) => {
  const q = query(collection(db, "profiles"), where("id", "==", id));
  const profiles = await getDocs(q);
  let userDoc = null;

  profiles.forEach((doc) => {
    userDoc = doc.data();
  });

  try {
    const imgRef = ref(storage, `images/${id}.png`);
    const url = await getDownloadURL(imgRef);
    userDoc.picURL = url;
    console.log(userDoc.picURL)
  } catch (error) {
    userDoc.picURL = ""; // No image found, will generate avatar later
  }
  

  if (userDoc) {
    return userDoc
  } else {
    navigate("/notFound");
  }
};

export default getProfile;
