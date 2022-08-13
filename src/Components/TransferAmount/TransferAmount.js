import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
const TransferAmount = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('');
  const [finalAmount, setFinalAmount] = useState({ tax: 0, totalAmount: 0 });
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
    const temp = amount * ((typeof(currencyList[currency]) === 'undefined')?0:currencyList[currency])
    setFinalAmount({ tax: temp * 0.0025, totalAmount: temp + temp * 0.0025 });
  }, [amount, currency]);
  return (
    <div className="home_container_4">
      <form className="form3">
        <h2 className="dataLine"> Amount Details</h2>
        <label> Select Currecy Type</label>
        {/* <Currency handleChange={handleChange} currencyList={currencyList} /> */}
        <DropDown DataList = {currencyList} handleChange = {handleChange}/>
        
        <label>Transfering Amount </label>
        <input
          type="Double"
          name="Transfering_Amount"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <label>Transaction Fees in INR</label>
        <input
          type="double"
          className="Fees"
          value={finalAmount.tax}
          placeholder="0"
          disabled
        ></input>
        <label>Total Amount In INR</label>
        <input
          type="double"
          name="Amount"
          value={finalAmount.totalAmount}
          placeholder="0"
          disabled
        ></input>
      </form>
    </div>
  );
};

export default TransferAmount;
