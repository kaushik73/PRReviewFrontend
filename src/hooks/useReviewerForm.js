import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { REVIEWERS_FORM_URL } from "../utils/constants";

const useReviewerForm = () => {
  const formik = useFormik({
    initialValues: {
      storyNumber: "",
      whoIsWorking: "",
      overallGrading: "",
      criticalComments: "",
      codingGuidelineComments: "",
      comment: "",
    },
    validationSchema: Yup.object({
      storyNumber: Yup.number().required("Story Number is required"),
      whoIsWorking: Yup.string().required(
        "Please select who is working on this"
      ),
      overallGrading: Yup.string().required("Overall Grading is required"),
      criticalComments: Yup.number().required("Critical Comments is required"),
      codingGuidelineComments: Yup.number().required(
        "Coding Guideline Comments is required"
      ),
      comment: Yup.string().max(500, "Comment cannot exceed 500 characters"),
    }),
    onSubmit: (values) => {
      axios
        .post(REVIEWERS_FORM_URL, {
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

export default useReviewerForm;
