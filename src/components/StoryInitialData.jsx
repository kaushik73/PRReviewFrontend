import { useFormik } from "formik";
import * as Yup from "yup";
import data from "../utils/data.json";
import axios from "axios";
import { STORY_REVIEWERS_FORM_URL } from "../utils/constants";
import DevelopersSelectDropdown from "./DevelopersSelectDropdown";
import Modal from "./Modal";

const StoryInitialData = ({
  isStoryInitialDataFormOpen,
  setIsStoryInitialDataFormOpen,
}) => {
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
  const toggleModal = () =>
    setIsStoryInitialDataFormOpen(!isStoryInitialDataFormOpen);

  console.log("StoryInitialData");

  return (
    <Modal
      isOpen={isStoryInitialDataFormOpen}
      toggleModal={toggleModal}
      onSubmit={formik.handleSubmit}
      title={"Add Your Story"}
    >
      {" "}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md1 rounded px-6  max-h-full overflow-auto "
      >
        <h2 className="text-lg font-medium text-gray-700 mb-4">
          Story Reviewers
        </h2>

        <div className="flex">
          {/* Story Number */}
          <div className="mb-4 w-1/2 mx-4">
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
          <div className="mb-4 w-1/2 mx-4">
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
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.storyName}
              </p>
            )}
          </div>
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
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.storyLink}
            </p>
          )}
        </div>

        {/* Person Working On */}
        <div className="mb-4 mx-0">
          <DevelopersSelectDropdown
            label="Person Working On"
            name="personWorkingOn"
            onChange={formik.handleChange}
            value={formik.values.personWorkingOn}
          />
          {formik.errors.personWorkingOn && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.personWorkingOn}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          {/* Reviewer 1 */}
          <div className="mb-4 w-1/2 mx-0">
            <DevelopersSelectDropdown
              label="Reviewer 1"
              name="reviewer1"
              onChange={formik.handleChange}
              value={formik.values.reviewer1}
            />
            {formik.errors.reviewer1 && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.reviewer1}
              </p>
            )}
          </div>

          {/* Reviewer 2 */}
          <div className="mb-4 w-1/2 mx-0">
            <DevelopersSelectDropdown
              label="Reviewer 2"
              name="reviewer2"
              onChange={formik.handleChange}
              value={formik.values.reviewer2}
            />
            {formik.errors.reviewer2 && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.reviewer2}
              </p>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default StoryInitialData;
