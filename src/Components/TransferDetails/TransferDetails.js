import React, { useState } from "react";

const TransferDetails = () => {
  const [receiverBank, setReceiverBank] = useState({ bic: "", bankname: "" });
  const [receiver, setReceiver] = useState({
    receiverid: "",
    receivername: "",
  });
  const handleReceiver = (event) => {
    console.log(event.target);
    setReceiver({ ...receiver, [event.target.name]: event.target.value });
  };
  return (
    <div className="home_container_3">
      <form className="form2">
        <h2 className="dataLine">Transfer Details</h2>
        <label>Reciever BIC</label>
        <input type="text" name="bic" className="v1" />
        <label>Institute Name</label>
        <input type="Text" name="bankname" disabled />
        <label>Reciever Account Number</label>
        <input
          type="number"
          value={receiver.receiverid}
          onChange={handleReceiver}
          name="receiverid"
        />
        <label> Account Holder Name</label>
        <input
          type="text"
          value={receiver.receivername}
          onChange={handleReceiver}
          name="receivername"
        />
      </form>
    </div>
  );
};

export default TransferDetails;
