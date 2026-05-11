import { useEffect, useState } from "react";

function App() {
  // Store API data
  const [users, setUsers] = useState([]);

  // Fetch API using async/await
  const fetchUsers = async () => {
    try {
      // API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Convert response to JSON
      const data = await response.json();

      // Store data in state
      setUsers(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Run when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>
    {/* Loops through array.
        Creates UI for every user. */}

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;






