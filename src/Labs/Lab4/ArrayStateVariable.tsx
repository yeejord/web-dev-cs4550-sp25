import { useState } from "react";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((_item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <button className="bg-success text-white border-0 rounded mb-2 px-2 py-1 d-block"
    onClick={addElement}>Add Element</button>
   <ul className="list-unstyled d-inline-block">
    {array.map((item, index) => (
     <li key={index} className="border rounded p-2 d-block"> {item}
        <button className="bg-danger text-white border-0 rounded ms-5 mb-2 px-2 py-1"
        onClick={() => deleteElement(index)}>
        Delete</button>
     </li>))}
   </ul><hr/></div>);}