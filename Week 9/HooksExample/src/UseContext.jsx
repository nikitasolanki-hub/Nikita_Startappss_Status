// Used to avoid prop drilling.

import { createContext, useContext } from "react"

const UserContext = createContext();

export default function UseContext() {
    const user = {name:"Nikita", role: "Full Stack Developer"}
  return (
    <UserContext.Provider value={user}>
        <Profile/>
    </UserContext.Provider>
  )

  function Profile(){
    const user = useContext(UserContext);
    return <h2>{user.name}-{user.role}</h2>
  }
}







// This code shares user data globally from App component to Profile component without props.
// Creates global container, Reads data from container (using createContext(), useContext())
//Internally React creates something like:
// ({
//   Provider: ...,
//   Consumer: ...
// })
//Create User Object
//Provider Wraps Components .
//Provider means =  "Any child component inside me can access this value"