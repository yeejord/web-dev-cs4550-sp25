import { useState } from "react";
export default function Counter() {
  //let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button className="bg-success text-white border-0 rounded px-2 py-1 me-2"
        onClick={() => { setCount(count + 1)}}
        id="wd-counter-up-click">Up</button>
      <button className="bg-danger text-white border-0 rounded px-2 py-1"
        onClick={() => { setCount(count - 1)}}
        id="wd-counter-down-click">Down</button>
<hr/></div>);}