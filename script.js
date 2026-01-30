const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] },
];

function generateReport(students) {
  let passCount = 0;
  let failCount = 0;
  let topStudent = "";
  let topAverage = 0;
  let lowStudent = "";
  let lowAverage = 100;

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let total = 0;

    for (let j = 0; j < student.marks.length; j++) {
      total += student.marks[j];
    }

    let average = total / student.marks.length;

    let grade;
    if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "E";

    let status = average >= 60 ? "PASS" : "FAIL";

    if (status === "PASS") passCount++;
    else failCount++;

    if (average > topAverage) {
      topAverage = average;
      topStudent = student.name;
    }

    if (average < lowAverage) {
      lowAverage = average;
      lowStudent = student.name;
    }

    console.log(
      `${student.name} | Avg: ${average.toFixed(2)} | Grade: ${grade} | ${status}`
    );
  }

  console.log("\n--- Class Summary ---");
  console.log(`Students: ${students.length}`);
  console.log(`Pass: ${passCount}`);
  console.log(`Fail: ${failCount}`);
  console.log(`Top Student: ${topStudent} (${topAverage.toFixed(2)})`);
  console.log(`Lowest Student: ${lowStudent} (${lowAverage.toFixed(2)})`);
}

generateReport(students);
