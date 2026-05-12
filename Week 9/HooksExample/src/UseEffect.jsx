//Used for side effects: API call, timer, subscription, DOM work.

import { useEffect, useState } from "react"


export default function UseEffect() {
    const[products, setProducts] = useState([]);


useEffect(() => {
    async function fetchProducts(){
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        setProducts(data);
    }
    fetchProducts();
}, []);


//Dependency
// no depenedency pass
// useEffect(() => {
//     console.log("Runs after every render")
// })
//Empty dependency pass
// useEffect(()=>{
//     console.log("Runs only once ");
// })
//some dependency has pass
// useEffect(()=>{
//     console.log("Runs when dependency change");
// })

//CleanUp Function 
// useEffect(()=>{
//     const timer = setInterval(()=>{
//        console.log("Running.....");
//     },1000);
//     return () => clearInterval(timer);
// },[])



  return (
    <div>
        {products.map((item) =>(
            <h3 key={item.id}>{item.title}</h3>
        ))}
    </div>
  )
}
