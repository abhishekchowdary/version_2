import React from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect ,useState} from "react";




function Logger() {



 const [logger, setLogger] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8085/getLogger").then(
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
      <Table striped bordered hover size="sm" style={{"padding":"1rem"}}>
        <thead>
          <tr>
            <th>Logger Id</th>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Reciever BIC</th>
            <th>Reciever name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
            {
              logger.map(log=>
                 <tr key={log.loggerId}>
                   <td>{log.loggerId}</td>
                   <td>{log.customer.customerid}</td>
                   <td>{log.customer.username}</td>
                   <td>{log.receiverBIC.bic}</td>
                   <td>{log.receiverName}</td>
                   <td>{log.amount}</td>
                   <td>{log.transactionStatus}</td>
                   <td>{log.date.slice(0,10)+" , "+log.date.slice(12,19)}</td>
                   
                 </tr>
                )
            }
        </tbody>
      </Table>
    </div>
  );
}



export default Logger;