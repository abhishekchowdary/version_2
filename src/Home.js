import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
// import "./Home.css";
import TransferDetails from "./Components/TransferDetails/TransferDetails";
import TransferAmount from "./Components/TransferAmount/TransferAmount";
import TransferType from "./Components/TransferType/TransferType";
import About from "./Components/CustomerComponent/Customer";

function Home() {
  const [customerData, setCustomerData] = useState([]);
  // const [customerState, setCustomerState] = useState({
  //   customerid: "",
  //   username: "",
  //   clearbalance: "",
  //   customertype: "",
  //   overdraft: "",
  // });
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8085/getcustomers");
      setCustomerData(data.map((item) => item.customerid));
    };
    getData();
  }, []);

  // const handleKeyPress = (event) => {
  //   const getCustomerById = async (id) => {
  //     const { data } = await axios.get(
  //       "http://localhost:8085/getcustomerbyid/" + id
  //     );
  //     setCustomerState({
  //       ...customerState,
  //       username: data.username,
  //       customertype: data.customertype,
  //       clearbalance: data.clearbalance,
  //       overdraft: data.overdraft,
  //     });
  //   };
  //   if (event.key === "Enter") {
  //     getCustomerById(customerState.customerid);
  //   }
  // };

  // const getData = async (url) => {
  //   const { data } = await axios.get(url);
  //   // console.log(data);
  //   return data;
  // };
  // const handleCustomerChange = ({ target }) => {
  //   console.log(target.value, target.name);
  //   setCustomerState({ ...customerState, [target.name]: target.value });
  // };

  return (
    <div className="home">
      <Header />
      <div className="home_CID">
        {/* <label>Customer ID : </label> */}
        {/* <input placeholder="Enter Customer ID" type="number" value = {customerData}></input> */}
        {/* <SelectDrop
          DataList={customerData}
          handleKeyPress={handleKeyPress}
          handleChange={handleCustomerChange}
          name="customerid"
          type="text"
          placeholder="Enter CustomerId"
        /> */}
      </div>
      <div className="containers">
        {/* implement container 2 */}
        {/* <Customer
          customertype={customerState.customertype}
          username={customerState.username}
          overdraft={customerState.overdraft}
          clearbalance={customerState.clearbalance}
          handleChange={handleCustomerChange}
        /> */}
        <About customerData={customerData} />
        {/* implement container 3 for Transfer type  */}
        <TransferDetails />
        {/* need to implement container 4  */}
        <TransferAmount />
        <div>
          {/* implement container -4 */}
          <TransferType />
        </div>
      </div>
    </div>
  );
}

export default Home;
