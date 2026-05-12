import { useEffect, useState } from "react"


function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    async function getData() {
        setLoading(true);

        const res = await fetch(url);
        const result = await res.json();

        setData(result);
        setLoading(false);
    }
    getData();
  },[url]);
  return{data, loading};
}


export default function CustomHook() {
    const [data, loading] = useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <h2>Loading......</h2>
  return (
    <div>
      {data.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}

    </div>
  )
}
