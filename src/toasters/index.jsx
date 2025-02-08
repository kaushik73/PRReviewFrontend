import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = (message = "Success!") => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
  });
};

export const showErrorToast = (message = "An error occurred!") => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
  });
};

export const showInfoToast = (message = "Here's some information!") => {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
  });
};

export const showWarningToast = (message = "Warning!") => {
  toast.warn(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
  });
};
