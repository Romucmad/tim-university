var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/template/index.html'));
})

app.post('/formdata', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.body));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})