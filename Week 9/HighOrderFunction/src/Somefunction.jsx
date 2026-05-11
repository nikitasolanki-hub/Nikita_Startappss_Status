// some = Checks if at least one item matches.

const users = [
  { id: 1, name: "Amit", isAdmin: false },
  { id: 2, name: "Rahul", isAdmin: true }
];


export default function Somefunction() {
    const hasAdmin = users.some((user) => user.isAdmin === true);
  return (
    <h1>{hasAdmin ? "Admin exists" : "No Admin"}</h1>
  )
}
