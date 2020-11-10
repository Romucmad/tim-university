var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/template/index.html'));
})

app.post('/formdata', (req, res) => {
    const context = { ...req.body };
    console.log(context);
    res.render(path.join(__dirname + '/template/form.ejs'), context);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})