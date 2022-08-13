import React from "react";
import Options from "../Options/Options";

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
        <Options DataList={DataList} />
        {/* {Object.keys(DataList).map((type) => (
          <option key = {type} value={type}>{type}</option>
        ))} */}
      </datalist>
    </>
  );
};

export default DropDown;
