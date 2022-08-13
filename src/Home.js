import React from "react";

import Header from "./Header";
import "./Home.css";
import Customer from './Components/CustomerComponent/Customer'
import TransferDetails from "./Components/TransferDetails/TransferDetails";
import TransferAmount from "./Components/TransferAmount/TransferAmount";
import TransferType from "./Components/TransferType/TransferType";

function Home() {
  
  
  

  

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
          <TransferType/>
        </div>
      </div>
    </div>
  );
}

export default Home;
