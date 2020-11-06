const fireParse = (e) => {
    e.preventDefault();
    const value = document.getElementById('in').value;
    const result = (value * 9 / 5) + 32;
    document.getElementById('out').innerText = result;
}