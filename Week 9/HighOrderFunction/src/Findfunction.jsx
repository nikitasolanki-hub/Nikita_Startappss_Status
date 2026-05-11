//find = Used to get first matching item.

const users = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rahul" }
]

export default function Findfunction() {
    const user = users.find((user) => user.id === 2 );
  return (
    <h1>{user.name}</h1>
  )
}
