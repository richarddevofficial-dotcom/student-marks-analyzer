const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] },
];

for (let i = 0; i < students.length; i++) {
  let total = 0;

  for (let j = 0; j < students[i].marks.length; j++) {
    total += students[i].marks[j];
  }

  let average = total / students[i].marks.length;

  let grade = "";
  if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "E";

  let status = average >= 60 ? "PASS" : "FAIL";

  console.log(
    students[i].name +
      ": Avg " +
      average.toFixed(2) +
      " | Grade " +
      grade +
      " | " +
      status,
  );
}
