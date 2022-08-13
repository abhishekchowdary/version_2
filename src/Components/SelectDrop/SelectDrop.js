import React from 'react'
import Options from '../Options/Options'


// This Component is not used in the Project 
// It is used for select + Options 

const SelectDrop = ({DataList}) => {
    const handleChange = ({target})=>{
        console.log(target.value);
    }
  return (
    <select onClick = {handleChange}>
        {/* {Object.keys(DataList).map((type) => (
          <option key={type} value={type}>{type}</option>
        ))} */}
        <Options DataList = {DataList} />
    </select>
  )
}

export default SelectDrop