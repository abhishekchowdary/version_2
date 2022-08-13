import React, { useState, useEffect } from "react";

import Header from "./Header";
import Currency from "./Currency";
import "./Home.css";

function Home() {
  const [amount, setAmount] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [finalAmount, setFinalAmount] = useState({ tax: "", totalAmount: "" });
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
  const currencyList = {
    USD: 78.24,
    JPY: 0.654,
    EUR: 84,
    GBP: 102,
  };

  const handleChange = ({ target }) => {
    setCurrency(target.value);
  };
  useEffect(() => {
    const temp = amount * currencyList[currency];
    setFinalAmount({ tax: temp * 0.0025, totalAmount: temp + temp * 0.0025 });
  }, [amount, currency]);

  return (
    <div className="home">
      <Header />
      <div className="home_CID">
        <label>Customer ID : </label>
        <input placeholder="Enter Customer ID" type="number"></input>
      </div>
      <div className="containers">
        <div className="home_container_2">
          <form className="form1">
            <h2 className="dataLine">Customer Details</h2>
            <label> Name </label>
            <input type="text" name="name" disabled></input>
            <label> Account Number </label>
            <input type="number" name="C_ID" disabled></input>
            <label> CLR Balance </label>
            <input type="number" name="Amount" disabled></input>
            <label> Currency </label>
            <input type="text" name="Currency" disabled></input>
          </form>
        </div>
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
        <div className="home_container_4">
          <form className="form3">
            <h2 className="dataLine"> Amount Details</h2>
            <label> Select Currecy Type</label>
            <Currency handleChange={handleChange} currencyList={currencyList} />
            <lable>Transfering Amount </lable>
            <input
              type="Double"
              name="Transfering_Amount"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <lable>Transaction Fees in INR</lable>
            <input
              type="double"
              className="Fees"
              value={finalAmount.tax}
              placeholder="0"
              disabled
            ></input>
            <lable>Total Amount In INR</lable>
            <input
              type="double"
              name="Amount"
              value={finalAmount.totalAmount}
              placeholder="0"
              disabled
            ></input>
          </form>
        </div>
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
