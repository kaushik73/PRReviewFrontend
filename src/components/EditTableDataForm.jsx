import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { STORY_REVIEWERS_FORM_URL } from "../utils/constants";
import Modal from "./Modal";
import DevelopersSelectDropdown from "./DevelopersSelectDropdown";
import { GreenButton } from "./buttons";

const EditTableDataForm = ({ data: data1 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const formik = useFormik({
    initialValues: {
      storyNumber: data1.storyNumber || "",
      storyName: data1.storyName || "",
      storyLink: data1.storyLink || "",
      prLink: data1.prLink || "",
      developerNames: data1.developerNames || "",
      reviewer1: data1.reviewer1 || "",
      reviewer2: data1.reviewer2 || "",
    },
    validationSchema: Yup.object({
      storyNumber: Yup.number().required("Story Number is required"),
      storyName: Yup.string().required("Story Name is required"),
      storyLink: Yup.string()
        .url("Must be a valid URL")
        .required("Story Link is required"),
      prLink: Yup.string()
        .url("Must be a valid URL")
        .required("Story Link is required"),
      developerNames: Yup.string().required(
        "Please select who is working on this"
      ),
      reviewer1: Yup.string().required("Reviewer 1 is required"),
      reviewer2: Yup.string().required("Reviewer 2 is required"),
    }),
    validateOnChange: false, // Disable validation on change
    validateOnBlur: false, // Disable validation on blur
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
    <div className="m-1">
      <GreenButton text="Edit Data" onClick={toggleModal} />
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={formik.handleSubmit}
        title="Edit Form "
      >
        <form
          // onSubmit={formik.handleSubmit}
          className="bg-white shadow-md1 rounded px-6  max-h-full overflow-auto "
        >
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

          <div className="flex ">
            {/* Story Link */}
            <div className="mb-4 w-1/2 mx-4">
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
            {/* PR Link */}
            <div className="mb-4 w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                PR Link
              </label>
              <input
                type="url"
                name="prLink"
                onChange={formik.handleChange}
                value={formik.values.prLink}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {formik.errors.prLink && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.prLink}
                </p>
              )}
            </div>
          </div>

          <div className="flex">
            {/* Reviewer 1 */}
            <div className="mb-4 w-1/2 mx-4">
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
            <div className="mb-4 w-1/2 mx-4">
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

          {/* Person Working On */}

          <div className="mb-4 w-1/2 mx-4">
            <DevelopersSelectDropdown
              label="Person Working On"
              name="developerNames"
              onChange={formik.handleChange}
              value={formik.values.developerNames}
            />
            {formik.errors.developerNames && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.developerNames}
              </p>
            )}
          </div>

          {/* <button
            type="submit"
            className="cursor-pointer w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button> */}
        </form>
      </Modal>
    </div>
  );
};

export default EditTableDataForm;
