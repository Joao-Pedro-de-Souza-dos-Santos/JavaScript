const students = [
    {name: "Pedin du Grau", grades:[4, 5, 1], absences: 9},
    {name: "Aluno A", grades:[4, 5, 1], absences: 9},
    {name: "Aluno B", grades:[4, 5, 1], absences: 9},
    {name: "Aluno C", grades:[4, 5, 1], absences: 9},
    {name: "Aluno E", grades:[4, 5, 1], absences: 9},
    {name: "Aluno F", grades:[4, 5, 1], absences: 9},
    {name: "Aluno G", grades:[4, 5, 1], absences: 9},
    {name: "Aluno H", grades:[4, 5, 1], absences: 9}
];

const averageStudents = students.map((students) => {
    const average = students.grades.reduce((a, b) => a + b)/students.grades.length;
    return {
        name:  students.name,
        average: average,
        absences: students.absences
    }
});

const selectStudents = averageStudents.filter(() => {
    if (students.average >= 7 && students.absences < 5) return students;
})

console.table(averageStudents);
console.table(selectStudents);
