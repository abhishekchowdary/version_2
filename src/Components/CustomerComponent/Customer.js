import React, { useState } from "react";
import axios from "axios";

const Customer = ({ customerData , handleCustomerChange , handleCustomerKeyPress , customerState }) => {
  
  return (
    <div className="home_container_2">
      <div className="form1">
        <h4 className="dataLine">Customer Details</h4>
        <label>Customer Id:</label>

        <input
          type="text"
          name="customerid"
          list="CustomerIdList"
          value={customerState.customerid}
          onChange={handleCustomerChange}
          onKeyPress={handleCustomerKeyPress}
          placeholder="Enter Customer ID"
        />
        <datalist id="CustomerIdList">
          {customerData.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </datalist>

        <label>Customer Name:</label>
        <input
          type="text"
          name="username"
          value={customerState.username}
          onChange={handleCustomerChange}
        />

        <label>Clear Balance:</label>
        <input
          type="text"
          name="clearbalance"
          value={customerState.clearbalance}
          onChange={handleCustomerChange}
        />

        <label>Over Draft:</label>
        <input
          type="text"
          name="overdraft"
          value={customerState.overdraft}
          onChange={handleCustomerChange}
        />

        <label>Customer Type:</label>
        <input
          type="text"
          name="customertype"
          value={customerState.customertype}
          onChange={handleCustomerChange}
        />
      </div>
    </div>
  );
};

export default Customer;
