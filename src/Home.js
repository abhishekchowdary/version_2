import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import "./Home.css";
// import {Logger} from './Logger'
import TransferDetails from "./Components/TransferDetails/TransferDetails";
import TransferAmount from "./Components/TransferAmount/TransferAmount";
import TransferType from "./Components/TransferType/TransferType";
import Customer from "./Components/CustomerComponent/Customer";

function Home() {
  const [transferStatus , setTransferStatus] = useState(false)
  const [customerData, setCustomerData] = useState({ customer: [], bic: [] });
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8085/getcustomers");
      const { data: Bic } = await axios.get(
        "http://localhost:8085/getBankdetails"
      );
      setCustomerData({
        customer: data.map((item) => item.customerid),
        bic: Bic.map((item) => item.bic),
      });
    };
    getData();
  }, []);
  // {console.log(customerData);}

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
  const [messageCode, setMessageCode] = useState("");
  // const [transferType, setTransferType] = useState('')
  const handleMessageCode = ({ target }) => {
    console.log(target.value);
    setMessageCode(target.value);
  };
  // const handleTransferType = ({target})=>{
  //   console.log(target.value);
  //   setTransferType(target.value);
  // }
  // TransferAmount Component State
  const currencyList = {
    USD: 78.24,
    JPY: 0.654,
    EUR: 84,
    GBP: 102,
    INR: 1,
  };
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [finalAmount, setFinalAmount] = useState({ tax: 0, totalAmount: 0 });
  const handleCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };
  useEffect(() => {
    const temp =
      amount *
      (typeof currencyList[currency] === "undefined"
        ? 0
        : currencyList[currency]);
    setFinalAmount({ tax: temp * 0.0025, totalAmount: temp + temp * 0.0025 });
  }, [amount, currency]);

  // TransferDetails Component State
  const [receiverBank, setReceiverBank] = useState({ bic: "", bankname: "" });
  const [receiver, setReceiver] = useState({
    receiverid: "",
    receivername: "",
  });
  const handleReceiver = (event) => {
    console.log(event.target.name, event.target.value);
    setReceiver({ ...receiver, [event.target.name]: event.target.value });
  };
  const handleReceiverBank = (event) => {
    setReceiverBank({
      ...receiverBank,
      [event.target.name]: event.target.value,
    });
  };
  const handleReceiverKeyPress = (event) => {
    const getByBic = async () => {
      const { data: byBic } = await axios.get(
        "http://localhost:8085/getbankbyid/" + receiverBank.bic
      );
      console.log(byBic);
      setReceiverBank({
        ...receiverBank,
        bic: byBic.bic,
        bankname: byBic.bankname,
      });
    };
    if (event.key === "Enter") {
      console.log("Enter");
      getByBic();
    }
  };

  const body = {
    customer: customerState,
    currencycode: currency,
    receiverBIC: receiverBank,
    receiveraccountholdernumber: receiver.receiverid,
    receiveraccountholdername: receiver.receivername,
    transfertypecode: null,
    messagecode: messageCode,
    currencyamount: amount,
    transferfees: finalAmount.tax,
    inramount: finalAmount.totalAmount,
    transferdate: new Date(),
  };
  const handleSubmit = ()=>{
    axios.post("http://localhost:8085/addTransactiondetails" ,body).then(res=>{
      if(res.status === 200 && (customerState.clearbalance >= finalAmount.totalAmount || customerState.overdraft)){
        alert("Success")
        // <Logger/>
      }else{
        alert("failed")
      }
      window.location.reload()
    })
  }
  return (
    // {(d.getDay()==0 || d.getDay()==6)?setTransferStatus(false && transferStatus):setTransferStatus(true && transferStatus)}
    <div className="home">
      <Header />
      <div className="home_CID"></div>
      <div className="containers">
        <Customer
          customerData={customerData.customer}
          customerState={customerState}
          handleCustomerChange={handleCustomerChange}
          handleCustomerKeyPress={handleCustomerKeyPress}
        />

        <TransferDetails
          bic={customerData.bic}
          transferType={customerState.customertype}
          receiver={receiver}
          receiverBank={receiverBank}
          handleReceiver={handleReceiver}
          handleReceiverBank={handleReceiverBank}
          handleReceiverKeyPress={handleReceiverKeyPress}
          setReceiver = {setReceiver}
          setTransferStatus = {setTransferStatus}
        />

        <TransferAmount
          amount={amount}
          currency={currency}
          finalAmount={finalAmount}
          handleCurrencyChange={handleCurrencyChange}
          setAmount={setAmount}
          currencyList={currencyList}
        />
        <div>
          <TransferType
            handleMessageCode={handleMessageCode}
            messageCode={messageCode}
            transferType={customerState.customertype}
            handleSubmit ={handleSubmit}
            transferStatus = {transferStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
