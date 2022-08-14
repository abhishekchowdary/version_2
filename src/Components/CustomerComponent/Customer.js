import React, { useState } from "react";
import axios from "axios";

const Customer = ({ customerData }) => {
  const [customerState, setCustomerState] = useState({
    customerid: "",
    username: "",
    clearbalance: "",
    customertype: "",
    overdraft: "",
  });
  const getData = async () => {
    const { data } = await axios.get(
      "http://localhost:8085/getcustomerbyid/" + customerState.customerid
    );
    setCustomerState({
      customerid: data.customerid,
      username: data.username,
      customertype: data.customertype,
      clearbalance: data.clearbalance,
      overdraft: data.overdraft,
    });
  };
  const handleChange = ({ target }) => {
    setCustomerState({ ...customerState, [target.name]: target.value });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };
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
          onChange={handleChange}
          onKeyPress={handleKeyPress}
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
          onChange={handleChange}
        />

        <label>Clear Balance:</label>
        <input
          type="text"
          name="clearbalance"
          value={customerState.clearbalance}
          onChange={handleChange}
        />

        <label>Over Draft:</label>
        <input
          type="text"
          name="overdraft"
          value={customerState.overdraft}
          onChange={handleChange}
        />

        <label>Customer Type:</label>
        <input
          type="text"
          name="customertype"
          value={customerState.customertype}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Customer;
