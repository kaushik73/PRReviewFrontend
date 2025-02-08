import React from "react";
import data from "../utils/data.json";

const DevelopersSelectDropdown = ({ label, name, onChange, value }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select</option>
        {data.personWorkingOn.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>
    </>
  );
};

export default DevelopersSelectDropdown;
