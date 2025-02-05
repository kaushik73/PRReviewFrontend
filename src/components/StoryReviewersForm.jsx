import { useFormik } from "formik";
import * as Yup from "yup";
import data from "../utils/data.json";
import axios from "axios";
import { STORY_REVIEWERS_FORM_URL } from "../utils/constants";

const StoryReviewersForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      storyNumber: "",
      storyName: "",
      storyLink: "",
      personWorkingOn: "",
      reviewer1: "",
      reviewer2: "",
    },
    validationSchema: Yup.object({
      storyNumber: Yup.number().required("Story Number is required"),
      storyName: Yup.string().required("Story Name is required"),
      storyLink: Yup.string()
        .url("Must be a valid URL")
        .required("Story Link is required"),
      personWorkingOn: Yup.string().required(
        "Please select who is working on this"
      ),
      reviewer1: Yup.string().required("Reviewer 1 is required"),
      reviewer2: Yup.string().required("Reviewer 2 is required"),
    }),
    onSubmit: (values) => {
      axios
        .post(STORY_REVIEWERS_FORM_URL, {
          data: values,
        })
        .then((response) => alert(response.data.message))
        .catch((error) => {
          alert("Error Saving Story Inital Data data!");
          console.log(error);
        });
      formik.resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-md rounded p-6 w-full max-w-md"
    >
      <h2 className="text-lg font-medium text-gray-700 mb-4">
        Story Reviewers
      </h2>

      {/* Story Number */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Story Number
        </label>
        <input
          type="number"
          name="storyNumber"
          onChange={formik.handleChange}
          value={formik.values.storyNumber}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        {formik.errors.storyNumber && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.storyNumber}
          </p>
        )}
      </div>

      {/* Story Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Story Name
        </label>
        <input
          type="text"
          name="storyName"
          onChange={formik.handleChange}
          value={formik.values.storyName}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        {formik.errors.storyName && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.storyName}</p>
        )}
      </div>

      {/* Story Link */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Story Link
        </label>
        <input
          type="url"
          name="storyLink"
          onChange={formik.handleChange}
          value={formik.values.storyLink}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        {formik.errors.storyLink && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.storyLink}</p>
        )}
      </div>

      {/* Person Working On */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Person Working On
        </label>
        <select
          name="personWorkingOn"
          onChange={formik.handleChange}
          value={formik.values.personWorkingOn}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="">Select</option>
          {data.whoIsWorking.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </select>
        {formik.errors.personWorkingOn && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.personWorkingOn}
          </p>
        )}
      </div>

      {/* Reviewer 1 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Reviewer 1
        </label>
        <select
          name="reviewer1"
          onChange={formik.handleChange}
          value={formik.values.reviewer1}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="">Select</option>
          {data.whoIsWorking.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </select>
        {formik.errors.reviewer1 && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.reviewer1}</p>
        )}
      </div>

      {/* Reviewer 2 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Reviewer 2
        </label>
        <select
          name="reviewer2"
          onChange={formik.handleChange}
          value={formik.values.reviewer2}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="">Select</option>
          {data.whoIsWorking.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </select>
        {formik.errors.reviewer2 && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.reviewer2}</p>
        )}
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Submit
      </button>
    </form>
  );
};

export default StoryReviewersForm;
