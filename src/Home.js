import React from "react";

import Header from "./Header";
import "./Home.css";
import Customer from './Components/CustomerComponent/Customer'
import TransferDetails from "./Components/TransferDetails/TransferDetails";
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
        <TransferDetails/>
        {/* need to implement container 4  */}
        <TransferAmount/>
        <div>
          {/* implement container -4 */}
        </div>
      </div>
    </div>
  );
}

export default Home;
