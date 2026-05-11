// every = Checks if all items match.

const tasks = [
  { id: 1, title: "HTML", completed: true },
  { id: 2, title: "CSS", completed: true }
];

export default function Everyfunction() {
    const allCompleted = tasks.every((task) => task.completed === true);
  return (
  <h1>{allCompleted ? "All Done" : "Pending....."}</h1>
  )
}
