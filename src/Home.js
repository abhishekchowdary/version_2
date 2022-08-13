import React from "react";

import Header from "./Header";
import "./Home.css";
import Customer from './Components/CustomerComponent/Customer'
import TransferType from "./Components/TransferDetails/TransferType";
import TransferAmount from "./Components/TransferAmount/TransferAmount";

function Home() {
  
  // const MessagesList = {
  //   CHQD: "benificiary customer must be paid by cheque only",
  //   CORT: "payment is made in settlement for a trade",
  //   HOLD: "Benificiary customer or claimant will call upon identification",
  //   INTC: "Payment between two companies that belongs to the same group",
  //   PHOB: "Please advise the intermediary institute by phone",
  //   PHOI: "Please advise the intermediary by phone",
  //   PHON: "Please advise the account with institution by phone",
  //   REPA: "Payments has a related e-Payments interface",
  //   SDVA: "Payment must be executed with same day value to the",
  // };
  

  

  return (
    <div className="home">
      <Header />
      <div className="home_CID">
        <label>Customer ID : </label>
        <input placeholder="Enter Customer ID" type="number"></input>
      </div>
      <div className="containers">
        {/* implement container 2 */}
        <Customer/>
        {/* implement container 3 for Transfer type  */}
        <TransferType/>
        {/* need to implement container 4  */}
        <TransferAmount/>
        <div>
          <form className="form4">
            <lable>Transfer Type</lable>
            <select>
              <option default>Select an option</option>
              <option value="Customer_to_Bank">Customer to Customer</option>
              <option value="Bank_to_Bank">Bank to Bank</option>
              <option value="Bank_to_Bank">Bank to Customer</option>
            </select>
            <lable>Message Code</lable>
            <select>
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
            </select>
            <button className="Transfer_Button" type="submit">
              <lable>Transfer</lable>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
