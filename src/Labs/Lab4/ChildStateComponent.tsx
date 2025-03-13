export default function ChildStateComponent({
    counter,
    setCounter
   } : {
    counter: number;
    setCounter: (counter: number) => void;
   }) {
     return (
       <div id="wd-child-state">
         <h3>Counter {counter}</h3>
         <button className="bg-success text-white me-2 border-0 rounded px-2 py-1"
            onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
           Increment</button>
         <button className="bg-danger text-white me-2 border-0 rounded px-2 py-1"
            onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
           Decrement</button>
         <hr/>
       </div>
   );}
   