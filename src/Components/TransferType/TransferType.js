import React , {useState} from "react";
import Options from "../Options/Options";
// import SelectDrop from '../SelectDrop/SelectDrop';

const TransferType = ({messageCode , transferType , handleMessageCode , handleTransferType}) => {
 
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
  
  return (
    <form className="form4">
      <label>Transfer Type</label>
      <select onClick={handleTransferType}>
        <option default>Select an option</option>
      {
          ["Customer to Cutomer" , "Bank to Bank" , "Bank to Customer"].map(item=><option key = {item} value={item}>{item}</option>)
      }
      </select>
      <label>Message Code</label>
      <select onClick={handleMessageCode}>
      <option default>Select an option</option>
        <Options DataList={MessagesList} />
      </select>
      <button className="Transfer_Button" type="submit">
        <label>Transfer</label>
      </button>
    </form>
  );
};

export default TransferType;
