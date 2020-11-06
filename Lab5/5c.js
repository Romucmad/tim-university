function Student(id, firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = [...grades];

    this.info = () => {
        console.log(`Full name :${this.firstName} ${this.lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
    }
}
Student.prototype.course = [];

const createStudent = (id, name, surname, grades, course) => {
    const student = new Student('10', 'Roman', "Hrybinchuk", [1, 2, 3, 4]);
    student.course = course;
    return student;
}

const student = createStudent('1', 'Roman', 'Hrybinchuk', [1, 4, 5, 6, 3, 3], ['Eng', 'Dat'])
console.log(student);
