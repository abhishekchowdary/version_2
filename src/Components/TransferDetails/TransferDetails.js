import React from "react";

const TransferDetails = () => {
  return (
    <div className="home_container_3">
      <form className="form2">
        <h2 className="dataLine">Transfer Details</h2>
        <label>Reciever BIC</label>
        <input type="text" name="name" className="v1"></input>
        <label>Institute Name</label>
        <input type="Text" name="Inst_Name" disabled></input>
        <lable>Reciever Account Number</lable>
        <input type="number" name="reciever_ID"></input>
        <lable> Account Holder Name</lable>
        <input type="text" name="Reciever_Name"></input>
      </form>
    </div>
  );
};

export default TransferDetails;
