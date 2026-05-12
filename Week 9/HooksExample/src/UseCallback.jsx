//Used to memoize function reference.
//React stores same function reference
//instead of creating new function every render
//Problem Without useCallback
//Every render creates new function.
// React.memo = memoized child, dependency array.
//Without memoized child: useCallback often useless

import React, { useCallback, useState } from "react"

const Child = React.memo(({ handleClick }) => {
    console.log("Child Rendering...")

    return(
        <button onClick={handleClick}> Child Button </button>
    );
});


export default function UseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    },[]);


  return (
    <div>
        <h2>Count:{count}</h2>
        <Child onClick={handleClick}/>

        <button onClick={() => setCount(count + 1)}>Increase</button>

    </div>
  )
}
