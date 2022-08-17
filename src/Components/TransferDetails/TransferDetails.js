import React , { useState,useEffect} from "react";
import axios from 'axios'
const TransferDetails = ({ bic, transferType , receiver , receiverBank , handleReceiver, handleReceiverBank , handleReceiverKeyPress , setTransferStatus }) => {
  const [receiverStatus , setReceiverStatus] = useState("");
  useEffect(() => {
    if (receiver.receivername.length > 2) {
      console.log("inside the receiver function");
      receiverNameTest();
      setReceiverStatus("");
  
  
  
     async function receiverNameTest() {
        var response = 1;
        console.log("receiver hhh");
        await axios
          .get(`http://localhost:8085/checksaction/${receiver.receivername}`)
          .then((res) => {
            console.log(res.data);
            if (res.data === "success") {
              setTransferStatus(true)
              setReceiverStatus("! Receiver name is in sanctioned blocklist");
              console.log("blocklist");
            } else {
              setTransferStatus(false)
              setReceiverStatus("");
              setReceiverStatus("Receiver name is not in sanctioned blocklist");
              console.log("not in a blocklist");
            }
          })
          .catch((err) => {
            console.log(err);
          });
        return response;
      }
    }
    return () => {};
  }, [receiver.receivername]);
  
  
  return (
    <div className="home_container_3">
      <form className="form2">
        <h2 className="dataLine">Transfer Details</h2>
        <label>Reciever BIC</label>
        <input
          type="text"
          value={receiverBank.bic}
          name="bic"
          className="v1"
          list="bicList"
          onKeyPress={handleReceiverKeyPress}
          onChange={handleReceiverBank}
        />
        <datalist id="bicList">
          {Object.values(bic).map((bic) => (
            <option key={bic} value={bic}>
              {bic}
            </option>
          ))}
        </datalist>
        <label>Institute Name</label>
        <input
          type="Text"
          value={receiverBank.bankname}
          onChange={handleReceiverBank}
          name="bankname"
          disabled
        />
        {transferType && (
          <>
            {" "}
            <label>Reciever Account Number</label>{" "}
            <input
              type="number"
              value={receiver.receiverid}
              onChange={handleReceiver}
              name="receiverid"
              required
            />{" "}
            <label> Account Holder Name</label>{" "}
            <input
              type="text"
              value={receiver.receivername}
              onChange={handleReceiver}
              name="receivername"
              required
            />{receiverStatus}
          </>
        )}
      </form>
    </div>
  );
};

export default TransferDetails;
