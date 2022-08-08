import React , {useState } from 'react'
import axios from 'axios'

const About = () => {
  const [userState, setUserState] = useState({
    "id" : "" , 
    "name" : "",
    "email" : "",
    "phone" : ""
  });
  const getData = async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+userState.id);
    setUserState({
      "id" : data.id ,
      "name" : data.name , 
      "email" : data.email , 
      "phone" : data.phone
    });
  }

  // useEffect(() => {
  //   getData();

  // }, [userState.id])

  const handleChange = (event) => {
    console.log(event.target.name , event.target.value , userState);
    setUserState({...userState ,[event.target.name] : event.target.value})
  }
  const handleKeyPress = (event) =>{
    if(event.key === "Enter"){
      getData();
    }
  }
  return (
<div className="form">
  <div className="items">Id:<input type="number" name= "id" value = {userState.id} onChange = {handleChange} onKeyPress = {handleKeyPress} /></div>
  <div className="items">Name:<input type="text"  name= "name" value = {userState.name} onChange = {handleChange} /></div>
  <div className="items">Email:<input type="text"  name= "email" value = {userState.email} onChange = {handleChange} /></div>
  <div className="items">Phone:<input type="tel"  name= "phone" value = {userState.phone} onChange = {handleChange} /></div>
</div>
  )
}

export default About