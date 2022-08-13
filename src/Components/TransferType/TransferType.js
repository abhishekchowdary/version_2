import React from "react";
import Options from "../Options/Options";
// import SelectDrop from '../SelectDrop/SelectDrop';

const TransferType = () => {
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
  const handleChange = ({ target }) => {
    console.log(target.value);
  };
  return (
    <form className="form4">
      <label>Transfer Type</label>
      <select onClick={handleChange}>
        <option default>Select an option</option>
      {
          ["Customer to Cutomer" , "Bank to Bank" , "Bank to Customer"].map(item=><option key = {item} value={item}>{item}</option>)
      }
        {/* <option value="Customer_to_Bank">Customer to Customer</option>
        <option value="Bank_to_Bank">Bank to Bank</option>
        <option value="Bank_to_Bank">Bank to Customer</option> */}
      </select>
      <label>Message Code</label>
      <select onClick={handleChange}>
        <Options DataList={MessagesList} />
      </select>
      {/* <SelectDrop DataList={MessagesList} /> */}
      {/* <select>
              <option default>Select an option</option>
              <option value="benificiary customer must be paid by cheque only">
                CHQD
              </option>
              <option value="payment is made in settlement for a trade">
                CORT
              </option>
              <option value="Benificiary customer or claimant will call upon identification">
                HOLD
              </option>
              <option value="Payment between two companies that belongs to the same group">
                INTC
              </option>
              <option value="Please advise the intermediary institute by phone">
                PHOB
              </option>
              <option value="Please advise the intermediary by phone">
                PHOI
              </option>
              <option value="Please advise the account with institution by phone">
                PHON
              </option>
              <option value="Payments has a related e-Payments interface">
                REPA
              </option>
              <option value="Payment must be executed with same day value to the">
                SDVA
              </option>
            </select> */}
      <button className="Transfer_Button" type="submit">
        <label>Transfer</label>
      </button>
    </form>
  );
};

export default TransferType;
