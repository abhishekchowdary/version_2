import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
const TransferAmount = ({currency , finalAmount , amount , handleCurrencyChange ,setAmount , currencyList}) => {
  
  

  return (
    <div className="home_container_4">
      <form className="form3">
        <h2 className="dataLine"> Amount Details</h2>
        <label> Select Currecy Type</label>
        <DropDown DataList = {currencyList} handleChange = {handleCurrencyChange} />
        
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
