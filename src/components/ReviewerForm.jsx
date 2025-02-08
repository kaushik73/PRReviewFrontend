import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Modal from "./Modal";
import DevelopersSelectDropdown from "./DevelopersSelectDropdown";
import { GreenButton } from "./buttons";

const ReviewerForm = ({
  isReviewerFormOpen,
  setIsReviewerFormOpen,
  data: data1,
}) => {
  const [selectedReviewer, setSelectedReviewer] = useState(
    data1?.reviewer1 || data1?.reviewer2 || "N/A"
  );

  const formik = useFormik({
    initialValues: {
      storyNumber: data1.storyNumber || "",
      storyName: data1.storyName || "",
      storyLink: data1.storyLink || "",
      prLink: data1.prLink || "",
      personWorkingOn: data1.personWorkingOn || "",
      reviewer: selectedReviewer,
      overallGrading: "",
      codingGuidelineComments: "",
      comment: "",
    },
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const toggleModal = () => setIsReviewerFormOpen(!isReviewerFormOpen);

  // Handle dynamic reviewer changes when data updates
  useEffect(() => {
    if (data1.reviewer1) {
      formik.setFieldValue("reviewer", data1.reviewer1);
      setSelectedReviewer(data1?.reviewer1);
    } else if (data1.reviewer2) {
      formik.setFieldValue("reviewer", data1.reviewer2);
      setSelectedReviewer(data1?.reviewer2);
    }
  }, [data1]);

  return (
    <Modal
      isOpen={isReviewerFormOpen}
      toggleModal={toggleModal}
      onSubmit={formik.handleSubmit}
      title={`${selectedReviewer}'s Reviewer Form`}
    >
      <form className="bg-white shadow-md rounded px-6 max-h-full overflow-auto">
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
          </div>
        </div>

        <div className="flex">
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
          </div>

          {/* PR Link */}
          <div className="mb-4 w-1/2 mx-4">
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
          </div>
        </div>

        <div className="flex">
          {/* Person Working On */}
          <div className="mb-4 mx-4">
            <DevelopersSelectDropdown
              label="Person Working On"
              name="personWorkingOn"
              onChange={formik.handleChange}
              value={formik.values.personWorkingOn}
            />
          </div>

          {/* Reviewer */}
          <div className="mb-4 w-1/2 mx-4">
            <DevelopersSelectDropdown
              label="Reviewer"
              name="reviewer"
              onChange={formik.handleChange}
              value={formik.values.reviewer}
            />
          </div>
        </div>

        <div className="flex">
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
              {data1.gradingOptions?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Coding Guideline Comments */}
          <div className="mb-4 w-1/2 mx-4">
            <label className="block text-sm font-medium text-gray-700">
              Number of Comments on Coding Guidelines Missed
            </label>
            <input
              type="number"
              name="codingGuidelineComments"
              onChange={formik.handleChange}
              value={formik.values.codingGuidelineComments}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-orange-500"
            />
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
        </div>

        <div className="flex justify-end">
          <GreenButton type="submit">Submit</GreenButton>
        </div>
      </form>
    </Modal>
  );
};

export default ReviewerForm;
