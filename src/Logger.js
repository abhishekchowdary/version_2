import React from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect ,useState} from "react";




function Logger() {



 const [logger, setLogger] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8085/getTransactiondetails").then(
      res =>{
        setLogger(res.data)
      }
    ).catch(
      console.log("error")
    )
    
  }, [])



 return (
    <div>
      <Header />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Reciever BIC</th>
            <th>Reciever acc no</th>
            <th>Reciever name</th>
            <th>Amount</th>
            <th>Message</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
            {
              logger.map(log=>
                 <tr>
                   <td>{log.transactionid}</td>
                   <td>{log.customer.customerid}</td>
                   <td>{log.customer.username}</td>
                   <td>{log.receiverBIC.bic}</td>
                   <td>{log.receiveraccountholdernumber}</td>
                   <td>{log.receiveraccountholdername}</td>
                   <td>{log.inramount}</td>
                   <td>{log.messagecode}</td>
                   <td>{log.transferdate}</td>
                   
                 </tr>
                )
            }
        </tbody>
      </Table>
    </div>
  );
}



export default Logger;