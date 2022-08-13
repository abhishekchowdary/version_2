import React from "react";

const DropDown = ({ DataList, handleChange }) => {
  return (
    <>
      <input
        type="text"
        list="list"
        onChange={handleChange}
        placeholder="Select currency"
      />
      <datalist id="list">
        {Object.keys(DataList).map((type) => (
          <option value={type}>{type}</option>
        ))}
      </datalist>
    </>
  );
};

export default DropDown;
