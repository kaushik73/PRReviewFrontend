import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ASSIGNE_FORM_URL } from "../utils/constants";

const useAssigneeForm = () => {
  const formik = useFormik({
    initialValues: {
      storyNumber: "",
      storyName: "",
      storyLink: "",
      prLink: "",
      requiredReviewer1: "",
      requiredReviewer2: "",
    },
    validationSchema: Yup.object({
      storyNumber: Yup.number().required("Story Number is required"),
      storyName: Yup.string().required("Story Name is required"),
      storyLink: Yup.string()
        .url("Invalid URL")
        .required("Story Link is required"),
      prLink: Yup.string().url("Invalid URL").required("PR Link is required"),
    }),
    onSubmit: (values) => {
      axios
        .post(ASSIGNE_FORM_URL, {
          data: values,
        })
        .then((response) => alert(response.data.message))
        .catch((error) => {
          alert("Error saving data!");
          console.log(error);
        });
    },
  });

  return formik;
};

export default useAssigneeForm;
