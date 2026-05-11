
import { useState } from 'react'
// count → current value
// setCount → updates value
// 0 → initial value
export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrease =() =>{
    setCount(count + 1);
  };
   const handleDecrease =() =>{
    setCount(count - 1 );
  };
   const handleReset =() =>{
    setCount(0);
  };

  return (
    <div style={{textAlign: "center", marginTop:"100px"}}>
      <h1>Counter App </h1>

{/*  React automatically re-renders UI when state changes. */}

      <h3>{count}</h3>
      <button onClick={handleIncrease}> Increase</button>
      <button onClick={handleDecrease}  style={{ marginLeft: "10px" }}>
        Decrease</button>
      <button onClick={handleReset}  style={{ marginLeft: "10px" }}>
        Reset</button>
    </div>
  )
}
