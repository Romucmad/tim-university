var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
const port = 3000;


app.use(express.json());
app.engine('html', require('ejs').renderFile);

//input 
// {
//     "fisrtName" : "Roman",
//     "lastName" : "Hrybinchuk",
//     "email" : "romanhrybinchuk@gmail.com"   
// }
app.post('/jsondata', (req, res) => {
    const context = { ...req.body };
    console.log(context);
    res.render(path.join(__dirname + '/template/form.ejs'), context);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})