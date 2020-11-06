const obj = {
    name: "Roman",
    surname: 'Hrybinchuk',
    age: 21,
    changeName: (string) => obj.name = string,
    showFullName: () => `${obj.name} ${obj.surname}`,
    incrementAge: () => obj.age++
}

const showProperties = obj => Object.keys(obj).forEach(element => console.log(`Name ${element}, type : ${typeof (obj[element])}`));




showProperties(obj);