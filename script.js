const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] },
];

function generateReport(students) {
  let pass = 0, fail = 0;
  let topAvg = 0, lowAvg = 100;
  let topStudent = "", lowStudent = "";

  for (let student of students) {
    let total = 0;
    for (let mark of student.marks) total += mark;

    let avg = total / student.marks.length;

    let grade =
      avg >= 80 ? "A" :
      avg >= 70 ? "B" :
      avg >= 60 ? "C" :
      avg >= 50 ? "D" : "E";

    let status = avg >= 60 ? "PASS" : "FAIL";
    status === "PASS" ? pass++ : fail++;

    if (avg > topAvg) {
      topAvg = avg;
      topStudent = student.name;
    }

    if (avg < lowAvg) {
      lowAvg = avg;
      lowStudent = student.name;
    }

    console.log(`${student.name} | Avg: ${avg.toFixed(2)} | Grade: ${grade} | ${status}`);
  }

  console.log("---- SUMMARY ----");
  console.log("Students:", students.length);
  console.log("Pass:", pass);
  console.log("Fail:", fail);
  console.log(`Top Student: ${topStudent} (${topAvg.toFixed(2)})`);
  console.log(`Lowest Student: ${lowStudent} (${lowAvg.toFixed(2)})`);
}

function run() {
  generateReport(students);
}
