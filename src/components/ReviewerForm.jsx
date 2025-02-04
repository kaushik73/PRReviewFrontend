import data from "../utils/data.json";
import useReviewerForm from "../hooks/useReviewerForm";

const ReviewerForm = () => {
  const formik = useReviewerForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-md rounded p-6 w-full max-w-md"
    >
      <h2 className="text-lg font-medium text-gray-700 mb-4">Reviewer</h2>

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

      {/* Who Is Working */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Who is Working on This
        </label>
        <select
          name="whoIsWorking"
          onChange={formik.handleChange}
          value={formik.values.whoIsWorking}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="">Select</option>
          {data.whoIsWorking.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </select>
        {formik.errors.whoIsWorking && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.whoIsWorking}
          </p>
        )}
      </div>

      {/* Overall Grading */}
      <div className="mb-4">
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

      {/* Critical Comments */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of Critical Comments
          {/* red */}
        </label>
        <input
          type="number"
          name="criticalComments"
          onChange={formik.handleChange}
          value={formik.values.criticalComments}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-red-500"
        />
        {formik.errors.criticalComments && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.criticalComments}
          </p>
        )}
      </div>

      {/* Coding Guideline Comments */}
      <div className="mb-4">
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

      {/* Submit Button */}
      <button
        type="submit"
        className="cursor-pointer w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewerForm;
