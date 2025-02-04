import useAssigneeForm from "../hooks/useAssigneeForm";

const AssigneeForm = () => {
  const formik = useAssigneeForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-md rounded p-6 w-full max-w-md"
    >
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

      <div className="mb-4">
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
          <p className="text-red-500 text-xs mt-1">{formik.errors.prLink}</p>
        )}
      </div>

      <button
        type="submit"
        className=" cursor-pointer w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AssigneeForm;
