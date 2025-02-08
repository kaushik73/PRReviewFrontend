import { useState } from "react";
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

  return (
    <>
      <div className="overflow-x-auto">
        <ToastContainer newestOnTop />
        <div className="flex gap-4 justify-between items-center">
          <div className="w-full md:w-3/4">
            <TableFilters />
          </div>
          <div className="w-full md:w-1/4 text-right">
            <GrayButton
              onClick={() =>
                setIsStoryInitialDataFormOpen(!isStoryInitialDataFormOpen)
              }
              text="Add Story"
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
              <th className="px-4 py-2">Story Number</th>
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
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{row.storyNumber}</td>
                <td className="px-4 py-2">{row.storyName}</td>
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
                <td className="px-4 py-2">{row.personWorkingOn}</td>
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
                      reviewerName={row.reviewer2}
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
                  <EditTableDataForm />
                  <CloseButton />
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
