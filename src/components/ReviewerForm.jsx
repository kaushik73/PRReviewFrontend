import data from "../utils/data.json";
import useReviewerForm from "../hooks/useReviewerForm";
import { GreenButton } from "./buttons";
import Modal from "./Modal";
import { useState } from "react";
import DevelopersSelectDropdown from "./DevelopersSelectDropdown";

const ReviewerForm = ({
  isReviewerFormOpen,
  setIsReviewerFormOpen,
  reviewerName = "User",
}) => {
  const formik = useReviewerForm();
  const toggleModal = () => setIsReviewerFormOpen(!isReviewerFormOpen);
  const handleSubmit = () => {
    console.log(formik.values);
  };

  return (
    <Modal
      isOpen={isReviewerFormOpen}
      toggleModal={toggleModal}
      onSubmit={handleSubmit}
      title={`${reviewerName}'s Reviewer Form`}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md1 rounded px-6  max-h-full overflow-auto "
      >
        {/* <h2 className="text-lg text-center font-medium text-gray-700 mb-4">
          Reviewer : {"Test"}
        </h2> */}

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

        <div className="flex ">
          {/* Person Working On */}
          <div className="mb-4  mx-4">
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

          {/* Reviewer */}
          <div className="mb-4 w-1/2 mx-4">
            <DevelopersSelectDropdown
              label="Reviewer"
              name="reviewer"
              onChange={formik.handleChange}
              value={formik.values.reviewer}
            />
            {formik.errors.reviewer && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.reviewer}
              </p>
            )}
          </div>
        </div>
        <div className="flex ">
          {/* Overall Grading */}
          <div className="mb-4 w-1/2 mx-4">
            <label className="block text-sm font-medium text-gray-700">
              Overall Grading
            </label>
            <select
              name="overallGrading"
              onChange={formik.handleChange}
              value={formik.values.overallGrading}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="">Select</option>
              {data.gradingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {formik.errors.overallGrading && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.overallGrading}
              </p>
            )}
          </div>

          {/* Coding Guideline Comments */}
          <div className="mb-4 w-1/2 mx-4">
            <label className="block text-sm font-medium text-gray-700">
              Number of Comments on Coding Guidelines Missed
              {/* orange */}
            </label>
            <input
              type="number"
              name="codingGuidelineComments"
              onChange={formik.handleChange}
              value={formik.values.codingGuidelineComments}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-orange-500"
            />
            {formik.errors.codingGuidelineComments && (
              <p className="text-orange-500 text-xs mt-1">
                {formik.errors.codingGuidelineComments}
              </p>
            )}
          </div>
        </div>

        {/* Comment */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows="4"
          />
          {formik.errors.comment && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.comment}</p>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ReviewerForm;
