import React  from "react";
import Options from "../Options/Options";

const TransferType = ({messageCode , transferType , handleMessageCode , handleSubmit , transferStatus}) => {
  const MessagesList = {
    CHQD: "benificiary customer must be paid by cheque only",
    CORT: "payment is made in settlement for a trade",
    HOLD: "Benificiary customer or claimant will call upon identification",
    INTC: "Payment between two companies that belongs to the same group",
    PHOB: "Please advise the intermediary institute by phone",
    PHOI: "Please advise the intermediary by phone",
    PHON: "Please advise the account with institution by phone",
    REPA: "Payments has a related e-Payments interface",
    SDVA: "Payment must be executed with same day value to the",
  };
  const date  = new Date();
  return (
    <form className="form4">
      <label>Transfer Type</label>
      <select required>
        <option value={transferType ?"Customer to Cutomer" : "Bank to Bank" }>{transferType ?"Customer to Cutomer" : "Bank to Bank" }</option>

      {/* {
          ["Customer to Cutomer" , "Bank to Bank" , "Bank to Customer"].map(item=><option key = {item} value={item}>{item}</option>)
      } */}
      </select>
      <label>Message Code</label>
      <select onClick={handleMessageCode}>
      <option default>Select an option</option>
        <Options DataList={MessagesList} />
      </select>
      {(date.getDay()!==0 && date.getDay()!==6)&&
      <button className="Transfer_Button" onClick={handleSubmit} disabled = {transferStatus}>
        <label>Transfer</label>
      </button>}
    </form>
  );
};

export default TransferType;
