const students = [
{ name: "Aarav", score: 88, grade: "A" },
{ name: "Bella", score: 72, grade: "B" },
{ name: "Carlos", score: 55, grade: "F" },
{ name: "Diana", score: 91, grade: "A" },
{ name: "Ethan", score: 63, grade: "D" },
{ name: "Fatima", score: 78, grade: "C" },
{ name: "George", score: 84, grade: "B" },
{ name: "Hana", score: 49, grade: "F" },
{ name: "Ivan", score: 95, grade: "A" },
{ name: "Julia", score: 70, grade: "C" },
{ name: "Kiran", score: 66, grade: "D" },
{ name: "Layla", score: 82, grade: "B" },
{ name: "Marco", score: 57, grade: "F" },
{ name: "Nadia", score: 74, grade: "C" },
{ name: "Omar", score: 89, grade: "A" },
{ name: "Priya", score: 93, grade: "A" },
{ name: "Quinn", score: 61, grade: "D" },
{ name: "Rosa", score: 77, grade: "C" },
{ name: "Samuel", score: 85, grade: "B" },
{ name: "Tina", score: 68, grade: "D" },
];

//Using Filter, Map 

// const highAchievers = students
// .filter((student) => student.score > 70)
// .map((student) => `${student.name} - ${student.grade}`);

// console.log("High achievers:", highAchievers);



//Class Average and using reduce()

const {total, avg } = students.reduce(
    (acc, student, inex, array) => {
        acc.total += student.score;
        acc.total = acc.total / array.length;

        return acc;
    },
    { total: 0, avg: 0 }
);
console.log(`Total : ${total}, Average: ${avg.toFixed(1)}`);



//Sorting

// const byName = [...students].sort((a,b) => a .name.localeCompare(b.name));

// const byScoreAsc = [...students]. sort((a,b) => a.score - b.score )
// const byScoreDesc = [...students]. sort((a,b) => a.score - b.score )

// console.log("By Name", byName);
// console.log("Score Ascending", byScoreAsc);
// console.log("Score Descending", byScoreDesc);


//Querying with find / some / every
//Find = First matching student
const topStudent = students.find((student ) => student.score >= 90);


//some = At least one match? give (true, false)
const anyFalling = students.some((student) => student.score < 50 );


//every = All match? give (true,false)
const allPassed = students.every((student) => student.score >= 50 );
console.log(topStudent, anyFalling,  allPassed);




//Method Chain 

const bStudents = students
.filter((student) => student.grade === "B")
.map((student) => student.name)
.sort();
console.log("B students:", bStudents);
