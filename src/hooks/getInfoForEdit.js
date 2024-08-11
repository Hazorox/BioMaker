import getProfile from "../hooks/getProfile";
const getInfoForEdit = async () => {
  const id = localStorage.getItem("id");
  const profile = getProfile(id)
};

export default getInfoForEdit;
