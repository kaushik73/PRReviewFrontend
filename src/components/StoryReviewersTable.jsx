import { useState } from "react";
import CloseButton from "./closeButton";
import EditTableDataForm from "./EditTableDataForm";
import { CopyCheckIcon, CopyIcon } from "../icons";
import TableFilters from "./TableFilters";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "../toasters";
import ReviewerForm from "./ReviewerForm";
import { data } from "../utils/tempStoryData";
import StoryInitialData from "./StoryInitialData";
import { GrayButton } from "./buttons";
const StoryReviewersTable = ({ data1, onFillReviewerForm }) => {
  const [isLinkCopied, setisLinkCopied] = useState({
    PRLink: false,
    StoryLink: false,
  });
  console.log(data, "data");

  const [isReviewerFormOpen, setIsReviewerFormOpen] = useState(false);
  const [isStoryInitailDataFormOpen, setIsStoryInitailDataFormOpen] =
    useState(false);

  const copyIconClicked = (link, message, type) => {
    navigator.clipboard.writeText(link).then(() => {
      setisLinkCopied((prev) => {
        const newState = {
          PRLink: false,
          StoryLink: false,
        };
        if (!prev[type]) {
          newState[type] = true;
          showSuccessToast(message);
        }
        return newState;
      });
    });
  };

  const openReviewerForm = (reviewer) => {
    console.log("reviewer", reviewer);
    setIsReviewerFormOpen(!isReviewerFormOpen);
  };
  const openStoryInitailDataForm = () => {
    setIsStoryInitailDataFormOpen(!isStoryInitailDataFormOpen);
  };

  return (
    <div className="overflow-x-auto">
      <ToastContainer />
      <div className="flex gap-4 justify-between items-center">
        <div className="flex-6">
          <TableFilters />
        </div>
        <div className="flex-1">
          <GrayButton
            onClick={openStoryInitailDataForm}
            text="Add Story"
            className={" "}
          ></GrayButton>
        </div>
        {isStoryInitailDataFormOpen && (
          <StoryInitialData
            isStoryInitailDataFormOpen={isStoryInitailDataFormOpen}
            setIsStoryInitailDataFormOpen={setIsStoryInitailDataFormOpen}
          />
        )}
      </div>
      {isReviewerFormOpen && (
        <ReviewerForm
          isReviewerFormOpen={isReviewerFormOpen}
          setIsReviewerFormOpen={setIsReviewerFormOpen}
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
                {!row.storyLink && "N/A"}
                {row.storyLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 "
                  >
                    <span className="text-blue-600 underline">
                      <a
                        href={row.storyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      ></a>
                      Link
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        copyIconClicked(
                          row.storyLink,
                          "Story Link Copied !",
                          "StoryLink"
                        );
                      }}
                    >
                      {isLinkCopied.StoryLink ? (
                        <CopyCheckIcon />
                      ) : (
                        <CopyIcon />
                      )}
                    </span>
                  </a>
                )}
              </td>
              <td className="px-4 py-2">
                {!row.prLink && "N/A"}
                {row.prLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 "
                  >
                    <span className="text-blue-600 underline">
                      <a
                        href={row.prLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      ></a>
                      Link
                    </span>{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        copyIconClicked(
                          row.prLink,
                          "PR Link Copied !",
                          "PRLink"
                        );
                      }}
                    >
                      {isLinkCopied.PRLink ? <CopyCheckIcon /> : <CopyIcon />}
                    </span>
                  </a>
                )}
              </td>
              <td className="px-4 py-2">{row.personWorkingOn}</td>
              <td className="px-4 py-2">
                {row.reviewer1}{" "}
                <a
                  className="ml-2 text-sm text-blue-600 underline"
                  onClick={() => openReviewerForm("test")}
                >
                  Fill
                </a>
              </td>
              <td className="px-4 py-2">
                {row.reviewer2}{" "}
                <a
                  className="ml-2 text-sm text-blue-600 underline"
                  onClick={() => openReviewerForm("test")}
                >
                  Fill
                </a>
              </td>
              <td className="flex  flex-col px-4 py-2">
                <EditTableDataForm />
                <CloseButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoryReviewersTable;
