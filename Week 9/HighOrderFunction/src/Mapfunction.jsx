// Map = Used to render list data.

const users = ["Amit", "Rahul", "Priya"];

export default function Mapfunction() {
  return (
    <div>
      <h1>User List</h1>

      {users.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </div>
  )
}
