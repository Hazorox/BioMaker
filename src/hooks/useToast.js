import { toast } from "react-toastify"

const useFetchingToast = async ({ func, onSuccess }) => {
  // Loading Toast
  const fetchingToast = toast.loading("BioMaking...");

  try {
    // Call the provided function and await its result
    const data = await func();

    // Success Toast
    toast.update(fetchingToast, { render: "BioMaking done ✅", type: "success", isLoading: false, autoClose: 4000 });

    // Call the onSuccess callback with the fetched data
    onSuccess(data);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("Error fetching data:", error);

    // Update the toast with an error message
    toast.update(fetchingToast, { render: "Error fetching data", type: "error", isLoading: false, autoClose: 4000 });
  }
};

export default useFetchingToast;