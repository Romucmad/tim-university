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

    if (!checkEmail(email.value) || (!isNumber(number.value) || !number.value)) {
        return;
    }
    alert('You are done, well done !, form should be sent')

} 