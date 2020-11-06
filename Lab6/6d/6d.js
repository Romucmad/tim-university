const checkEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isNumber = (number) => !isNaN(number);

const onSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email');
    const number = document.getElementById('number');

    if (!checkEmail(email.value)) {
        email.classList.add('error')
        document.getElementById('emailHelp').classList.add('show');
    }

    if (!isNumber(number.value) || !number.value) {
        number.classList.add('error')
        document.getElementById('numberHelp').classList.add('show');
    }

    console.log((!isNumber(number.value) && number.value));
    if (!checkEmail(email.value) || (!isNumber(number.value) || !number.value)) {
        return;
    }

    const table = document.getElementById("myTable");
    const newRow = table.insertRow();
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    cell1.innerHTML = email.value;
    cell2.innerHTML = number.value;
    email.value = '';
    number.value = '';
    document.getElementById('numberHelp').classList.remove('show');
    document.getElementById('emailHelp').classList.remove('show');
    number.classList.remove('error')
    email.classList.remove('error')
} 