class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


class Student extends Person {
    constructor(id, firstName, lastName, grades) {
        super(firstName, lastName);
        this._id = id;
        this._grades = [...grades];
        this.info = () => console.log(`Full name :${this._firstName} ${this._lastName}, grade is :  ${this.avg} `);
    }
    get avg() {
        return this._grades.reduce((a, b) => a + b, 0) / this.grades._length
    }
}

const student = new Student('10', 'Roman', 'Hrybinchuk', [5, 3, 3, 3, 1]);

console.log(student);