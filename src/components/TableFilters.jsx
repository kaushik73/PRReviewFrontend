import React, { useState } from "react";
import DevelopersSelectDropdown from "./DevelopersSelectDropdown";
import { GreenButton, RedButton } from "./buttons";

const TableFilters = () => {
  const [filterForm, setFilterForm] = useState({
    personWorkingOn: "",
    sprint: "",
  });

  const handleFilterForm = (e) => {
    setFilterForm({ ...filterForm, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilterForm({ personWorkingOn: "", sprint: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filterForm);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4">
      <form className="flex flex-wrap items-end gap-4">
        {/* Name Filter */}
        <div className="flex-1">
          <DevelopersSelectDropdown
            name="personWorkingOn"
            onChange={handleFilterForm}
            value={filterForm.personWorkingOn}
            label={"Name"}
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

        {/* Submit Button */}
        <GreenButton text="Submit" onClick={handleSubmit} type="submit" />
        {/* Reset Button */}
        <RedButton text="Reset" onClick={handleReset} type="reset" />
      </form>
    </div>
  );
};

export default TableFilters;
