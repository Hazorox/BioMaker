import { getDocs, collection, query, where } from "firebase/firestore";
import { db, storage } from "../firebase/fb";
import { ref, getDownloadURL } from "firebase/storage";
const getProfile = async (id, method = "basic") => {
  let q = null;
  if (method == "random") {
    q = query(collection(db, "profiles"), where("randomID", "==", id));
  } else {
    q = query(collection(db, "profiles"), where("id", "==", id));
  }
  const profiles = await getDocs(q);
  let userDoc = null;

  profiles.forEach((doc) => {
    userDoc = doc.data();
  });

  try {
    const imgRef = ref(storage, `images/${userDoc.randomID}.png`);
    const url = await getDownloadURL(imgRef);
    console.log(url);
    userDoc.picURL = url;
  } catch (error) {
    userDoc.picURL = ""; // No image found, will generate avatar later
  }

  if (userDoc) {
    return userDoc;
  } else {
    navigate("/notFound");
  }
};

export default getProfile;
