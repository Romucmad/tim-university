function Student(id, firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = [...grades];

    this.info = () => {
        console.log(`Full name :${this.firstName} ${this.lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `)
    }
}

const student = new Student('10', 'Roman', 'Hrybinchuk', [5, 5, 5, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5,])

student.info();