//Use for local state 

import { useState } from "react";

export default function UseState() {
    const [count, setCount]=useState(0); 
  return (
    <div>
        <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> <br/>
      
      <button onCanPlay={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
