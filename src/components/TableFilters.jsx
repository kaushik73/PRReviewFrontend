import React, { useEffect, useState } from "react";
import DevelopersSelectDropdown from "./DevelopersSelectDropdown";
import { GreenButton, RedButton } from "./buttons";
import { FaCheckCircle } from "react-icons/fa";

const TableFilters = ({ tableFiltersFunx }) => {
  const [filterForm, setFilterForm] = useState({
    developerNames: "",
    sprint: "",
    isIamReviewer: false,
  });

  const handleFilterForm = (e) => {
    const { name, value, type, checked } = e.target;
    setFilterForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setFilterForm({ developerNames: "", sprint: "", isIamReviewer: false });
    // tableFiltersFunx(filterForm);
  };

  useEffect(() => {
    console.log(filterForm, "from filter component");
    tableFiltersFunx(filterForm);
  }, [filterForm]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // tableFiltersFunx(filterForm);
  // };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4">
      <form className="flex flex-wrap items-end gap-4">
        {/* Name Filter */}
        <div className="flex-1">
          <DevelopersSelectDropdown
            name="developerNames"
            onChange={handleFilterForm}
            value={filterForm.developerNames}
            label={"Assigned To "}
          />
        </div>
        {/* Sprint Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Sprint
          </label>
          <input
            type="text"
            name="sprint"
            placeholder="Enter sprint"
            value={filterForm.sprint}
            onChange={handleFilterForm}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Is I am Reviewer */}
        <div className="flex items-center">
          <input
            id="isIamReviewer"
            name="isIamReviewer"
            type="checkbox"
            checked={filterForm.isIamReviewer}
            onChange={handleFilterForm}
            className="hidden"
          />
          <label
            htmlFor="isIamReviewer"
            className={`flex items-center p-2 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-700 ${
              filterForm.isIamReviewer ? "bg-gray-700 text-white" : "bg-white"
            }`}
          >
            <span className="text-sm mr-2">Need My Review</span>
            <FaCheckCircle
              className={`w-6 h-6 transition-opacity ${
                filterForm.isIamReviewer ? "opacity-100" : "opacity-0"
              }`}
            />
          </label>
        </div>
        {/* Submit Button */}
        {/* <GreenButton text="Submit" type="submit" /> */}

        {/* Reset Button */}
        <RedButton text="Reset" onClick={handleReset} type="reset" />
      </form>
    </div>
  );
};

export default TableFilters;
