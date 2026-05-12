// Used to memoize calculated value.
// use when :  Heavy calculation
//             Filtered list
//             Sorted data
//             Derived expensive value




import { useMemo, useState } from "react"


export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState(true);

    const doubleCount = useMemo(() => {
        console.log("Calculating.....")
        return count * 2 ; 
    }, [count]);

  return (
    <div style= {{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
        padding: "20px",
        minHeight: "100vh",
      }}>

        <h2>Count:{count}</h2>
        <h2>Double: {doubleCount}</h2>

      <button onClick={() => setCount(count+1)}>Increase</button>

      <button onClick={() => setTheme(theme)}
        style={{ marginLeft: "10px" }}>Change Theme</button>


        <h3>Current Them : { theme ? "Dark Mode" : "Light mode"}</h3>
    </div>
  )
}
