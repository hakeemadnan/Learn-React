import { useState } from "react";

function init() {
  return Math.random();
}
export default function Counter() {
  let [count, setCount] = useState(init); //initialization
  console.log("component is rendered !");
  // console.log(`count = ${count}`)
  let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    // setCount((currCount) =>{
    //     return currCount+1;
    // });
    // setCount(25)
  };
  return (
    <div>
      <h3>
        Count = {count} <br />
        <button onClick={incCount}>Increase Count</button>
      </h3>
    </div>
  );
}
