import { useEffect, useState } from "react";
import CloseButton from "./closeButton";
import EditTableDataForm from "./EditTableDataForm";
import { CopyCheckIcon, CopyIcon } from "../icons";
import TableFilters from "./TableFilters";
import { ToastContainer } from "react-toastify";
import { showSuccessToast } from "../toasters";
import ReviewerForm from "./ReviewerForm";
import { data } from "../utils/tempStoryData";
import StoryInitialData from "./StoryInitialData";
import { GrayButton } from "./buttons";

//  Todo : get data from backend
const StoryReviewersTable = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterFormData, setFilterFormData] = useState({});
  const [copiedLinks, setCopiedLinks] = useState({});
  const [isReviewerFormOpen, setIsReviewerFormOpen] = useState({});
  const [isStoryInitialDataFormOpen, setIsStoryInitialDataFormOpen] =
    useState(false);

  const copyIconClicked = (rowIndex, linkType, link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLinks((prev) => ({
        ...prev,
        [`${rowIndex}_${linkType}`]: true,
      }));
      showSuccessToast(`${linkType} Link Copied!`);
      // Reset the copied state after a short timeout
      setTimeout(() => {
        setCopiedLinks((prev) => ({
          ...prev,
          [`${rowIndex}_${linkType}`]: false,
        }));
      }, 2000);
    });
  };

  const openReviewerForm = (index, reviewerKey) => {
    setIsReviewerFormOpen((prev) => ({
      ...prev,
      [`${index}_${reviewerKey}`]: !prev[`${index}_${reviewerKey}`],
    }));
  };

  const tableFiltersFunx = (filterForm) => {
    console.log("filterForm from table", filterForm);

    setFilterFormData({ ...filterForm });
  };

  useEffect(() => {
    applyFilters();
  }, [data, filterFormData]);

  const applyFilters = () => {
    const filtered = data.filter((row) => {
      return (
        (!filterFormData.developerNames ||
          row.developerNames === filterFormData.developerNames) &&
        (!filterFormData.sprint || row.sprint === filterFormData.sprint) &&
        (!filterFormData.isIamReviewer ||
          row.isIamReviewer === filterFormData.isIamReviewer)
      );
    });
    setFilteredData(filtered);

    console.log("filtered data ", filtered);
    console.log("original data", data);
  };

  const handleDataChange = (index, key, value) => {
    const updatedData = [...filteredData];
    updatedData[index][key] = value;
    setFilteredData(updatedData);
    // Optionally propagate the changes back to the parent data state if needed
  };

  return (
    <>
      <div className="overflow-x-auto h-full">
        <ToastContainer newestOnTop />
        <div className="flex gap-2 justify-between items-center h-full">
          <div className="md:w-3/4">
            <TableFilters tableFiltersFunx={tableFiltersFunx} />
          </div>
          {/* Todo : Correct it's height */}
          <div className=" md:w-1/4 md:h-full text-right">
            <GrayButton
              onClick={() =>
                setIsStoryInitialDataFormOpen(!isStoryInitialDataFormOpen)
              }
              text="Add Story"
              className={"w-[70%] h-[70%]"}
            />
          </div>
        </div>

        {isStoryInitialDataFormOpen && (
          <StoryInitialData
            isStoryInitialDataFormOpen={isStoryInitialDataFormOpen}
            setIsStoryInitialDataFormOpen={setIsStoryInitialDataFormOpen}
          />
        )}

        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="pl-4 py-2">Story Number</th>
              <th className="px-4 py-2">Story Name</th>
              <th className="px-4 py-2">Story Link</th>
              <th className="px-4 py-2">PR Link</th>
              <th className="px-4 py-2">Person Working</th>
              <th className="px-4 py-2">Reviewer 1</th>
              <th className="px-4 py-2">Reviewer 2</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="pl-4 py-2 max-w-0">{row.storyNumber}</td>
                <td className="px-4 py-2 overflow-hidden truncate max-w-xs">
                  {row.storyName}
                </td>
                <td className="px-4 py-2">
                  {row.storyLink ? (
                    <span className="flex items-center gap-1">
                      <span className="text-blue-600 underline">
                        <a
                          href={row.storyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          copyIconClicked(index, "Story", row.storyLink)
                        }
                      >
                        {copiedLinks[`${index}_Story`] ? (
                          <CopyCheckIcon />
                        ) : (
                          <CopyIcon />
                        )}
                      </span>
                    </span>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-4 py-2">
                  {row.prLink ? (
                    <span className="flex items-center gap-1">
                      <span className="text-blue-600 underline">
                        <a
                          href={row.prLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => copyIconClicked(index, "PR", row.prLink)}
                      >
                        {copiedLinks[`${index}_PR`] ? (
                          <CopyCheckIcon />
                        ) : (
                          <CopyIcon />
                        )}
                      </span>
                    </span>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-4 py-2">{row.developerNames}</td>
                <td className="px-4 py-2">
                  {isReviewerFormOpen[`${index}_reviewer1`] && (
                    <ReviewerForm
                      isReviewerFormOpen={
                        isReviewerFormOpen[`${index}_reviewer1`]
                      }
                      setIsReviewerFormOpen={() =>
                        openReviewerForm(index, "reviewer1")
                      }
                      data={row}
                    />
                  )}
                  {row.reviewer1}{" "}
                  <a
                    className="ml-2 text-sm text-blue-600 underline cursor-pointer"
                    onClick={() => openReviewerForm(index, "reviewer1")}
                  >
                    Fill
                  </a>
                </td>
                <td className="px-4 py-2">
                  {isReviewerFormOpen[`${index}_reviewer2`] && (
                    <ReviewerForm
                      isReviewerFormOpen={
                        isReviewerFormOpen[`${index}_reviewer2`]
                      }
                      setIsReviewerFormOpen={() =>
                        openReviewerForm(index, "reviewer2")
                      }
                      data={row}
                    />
                  )}
                  {row.reviewer2}{" "}
                  <a
                    className="ml-2 text-sm text-blue-600 underline cursor-pointer"
                    onClick={() => openReviewerForm(index, "reviewer2")}
                  >
                    Fill
                  </a>
                </td>
                <td className="flex flex-col px-4 py-2">
                  <EditTableDataForm data={row} />
                  <CloseButton storyNumber={row.storyNumber} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StoryReviewersTable;
