import { toast } from "react-toastify";

const showErrorToast = (toastMessage) => {
	toast.warn(toastMessage, {
		theme: "dark",
		autoClose: false,
		position: "top-center",
		className: "error-toast",
	});
};

const showSuccessToast = (toastMessage) => {
	toast.success(toastMessage, {
		theme: "dark",
		autoClose: false,
		position: "top-center",
		className: "success-toast",
		hideProgressBar: true,
	});
};
export { showErrorToast, showSuccessToast };
