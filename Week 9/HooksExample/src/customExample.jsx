//Basic Structure of a Custom Example

// function useSomething(){
//     //hook logic
//     return something;
// }


import { useState } from "react";


export function useCounter(){
    const [count,setCount] = useState(0);
  
    
}
return (
    <div>
        <h1>{count}</h1>

        <button onClick={() => setCount(count+1)}>
           Increment
        </button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
)