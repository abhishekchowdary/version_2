import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import "./Home.css";
import TransferDetails from "./Components/TransferDetails/TransferDetails";
import TransferAmount from "./Components/TransferAmount/TransferAmount";
import TransferType from "./Components/TransferType/TransferType";
import Customer from "./Components/CustomerComponent/Customer";

function Home() {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8085/getcustomers");
      setCustomerData(data.map((item) => item.customerid));
    };
    getData();
  }, []);

// Customer Component States
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
  const handleCustomerChange = ({ target }) => {
    setCustomerState({ ...customerState, [target.name]: target.value });
  };
  const handleCustomerKeyPress = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };

// TransferType Component State
  const [messageCode, setMessageCode] = useState('')
  const [transferType, setTransferType] = useState('')
  const handleMessageCode = ({ target }) => {
    console.log(target.value);
    setMessageCode(target.value)
  };
  const handleTransferType = ({target})=>{
    console.log(target.value);
    setTransferType(target.value);
  }

  return (
    <div className="home">
      <Header />
      <div className="home_CID"></div>
      <div className="containers">
        <Customer 
        customerData={customerData} 
        customerState = {customerState}
        handleCustomerChange = {handleCustomerChange}
        handleCustomerKeyPress = {handleCustomerKeyPress}
        />

        <TransferDetails />

        <TransferAmount />
        <div>
          <TransferType handleMessageCode={ handleMessageCode} handleTransferType ={handleTransferType} messageCode = {messageCode} transferType = {transferType}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
