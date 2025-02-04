const StoryReviewersTable = ({ data, onFillReviewerForm }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Story Number</th>
            <th className="px-4 py-2">Story Name</th>
            <th className="px-4 py-2">Story Link</th>
            <th className="px-4 py-2">Person Working</th>
            <th className="px-4 py-2">Reviewer 1</th>
            <th className="px-4 py-2">Reviewer 2</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{row.storyNumber}</td>
              <td className="px-4 py-2">{row.storyName}</td>
              <td className="px-4 py-2">
                <a
                  href={row.storyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Link
                </a>
              </td>
              <td className="px-4 py-2">{row.personWorkingOn}</td>
              <td className="px-4 py-2">
                {row.reviewer1}{" "}
                <button
                  className="ml-2 text-sm text-blue-600 underline"
                  onClick={() => onFillReviewerForm(row.reviewer1)}
                >
                  Fill
                </button>
              </td>
              <td className="px-4 py-2">
                {row.reviewer2}{" "}
                <button
                  className="ml-2 text-sm text-blue-600 underline"
                  onClick={() => onFillReviewerForm(row.reviewer2)}
                >
                  Fill
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoryReviewersTable;
