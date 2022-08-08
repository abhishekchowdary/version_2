import React , {useState , useEffect} from 'react'
import About from './About';
import './Home.css';

function Home() {
  const  [amount, setAmount] = useState([]);
  const  [currency, setCurrency]= useState([])
  
  return (
    <div className='home'> 
     <div className='home_container'>   
     <div className='home_CID'>
        <label>Customer ID : </label>
        <input placeholder='Enter Customer ID' type="number"></input>
     </div>
     </div>
     <div className='home_container_2'>
        <form className='form1'>
          <h2 className='dataLine'>Cusomer Details</h2>
          <table>
            <tbody>
          <tr>
          <td> Name </td>
          <td><input type="text" name='name' disabled></input></td>
          </tr>
          <tr>
          <td> Account Number </td>
          <td><input type="number" name='C_ID' disabled></input></td>
          </tr>
          <tr>
          <td> CLR Balance </td>
          <td><input type="number" name='Amount' disabled></input></td>
          </tr>
          <tr>
          <td> Currency </td>
          <td><input type="text" name='Currency' disabled></input></td>
          </tr>
          </tbody>
          </table>
        </form>
     </div>
     <div className='home_container_3'>
     <form className='form2'>
          <h2 className='dataLine'>Transfer</h2>
         <table>
          <tbody>
          <tr>
          <td> Reciever BIC </td>
          <td><input type="text" name='name'></input></td>
          </tr>
          <tr>
          <td> Institution Name </td>
          <td><input type="Text" name='Inst_Name' disabled></input></td>
          </tr>
          <tr>
          <td>Reciever Account Number </td>
          <td><input type="number" name='reciever_ID'></input></td>
          </tr>
          <tr>
          <td> Account Holder Name </td>
          <td><input type="text" name='Reciever_Name'></input></td>
          </tr>
          <tr>
            <td>Transfer type</td>
          <td><select>
          <option default>Select an option</option>
            <option value="Customer_to_Bank">Customer to Customer</option>
            <option value="Bank_to_Bank">Bank to Bank</option>
            <option value="Bank_to_Bank">Bank to Customer</option>
          </select>
          </td>
          </tr>
          <tr>
            <td> Message type</td>
          <td><select>
          <option default>Select an option</option>
            <option value="Bank_to_Bank">CHQD</option>
            <option value="Customer_to_Bank">CORT</option>
            <option value="Bank_to_Bank">HOLD</option>
            <option value="Bank_to_Bank">INTC</option>
            <option value="Bank_to_Bank">PHOB</option>
            <option value="Bank_to_Bank">PHOI</option>
            <option value="Bank_to_Bank">PHON</option>
            <option value="Bank_to_Bank">REPA</option>
            <option value="Bank_to_Bank">SDVA</option>
          </select>
          </td>
          </tr>
          </tbody>
          </table>
        </form>
     </div>
     <div className='home_container_4'>
        <form className='form3'>
          <h2 className='dataLine'>Transfer Amount Details</h2>
         <table>
          <tbody>
          <tr>
            <td>Currency</td>
          <td><select>
          <option default>Select an option</option>
            <option onClick={()=>setCurrency(Number(72.84))}>USD</option>
            <option onClick={()=>setCurrency(Number(102))} value="102">GBP</option>
            <option onClick={()=>setCurrency(Number(84))} value="84">EUR</option>
            <option onClick={()=>setCurrency(Number(0.645))} value="0.645">JPY</option>
          </select>
          </td>
          </tr>
          <tr>
          <td> Transfering Amount </td>
          <td><input type="Double" name='Transfering_Amount' placeholder='0' value = {amount} onChange = {e=>setAmount(e.target.value)} ></input></td>
          </tr>
          <tr>
          <td> Transaction Fees </td>
          <td><input type='double' className='Fees' value = {amount*0.0025} placeholder="0"  disabled></input></td>
          </tr>
          <tr>
          <td> Total Amount In INR </td>
          <td><input type="double" name='Amount' value = {(Number(amount)+Number(amount*0.0025))*Number(currency)} placeholder= "0" disabled></input></td>
          </tr>
          </tbody>
         </table>
         <button className='Transfer_Button' type='submit'>Transfer</button>
        </form>
     </div>
    </div>
  )
}

export default Home