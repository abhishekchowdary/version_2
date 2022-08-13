import React from "react";

const Options = ({ DataList }) => {
  return (
    <>
      {Object.keys(DataList).map((type) => (
        <option key  = {type} value={type}>{type}</option>
      ))}
    </>
  );
};

export default Options;
