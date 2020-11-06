class Student {
    constructor(id, firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = [...grades];
        this.info = () => console.log(`Full name :${this.firstName} ${this.lastName}, grade is :  ${this.grades.reduce((a, b) => a + b, 0) / this.grades.length} `);
    }
    get avg() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
    }

    get fullName() {
        return `${this.firstName} ${this.lastNameА}`
    }
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const student = new Student('10', 'Roman', 'Hrybinchuk', [5, 5, 5, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5,])



console.log(student.avg);
student.fullName = 'Tomas Edison';

console.log(student);