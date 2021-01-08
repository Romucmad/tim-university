const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(express.json());
app.use(cors())


app.post('/calculate', (req, res) => {
  const body = req.body;
  const expression = body.first.toString() +' ' + body.code +" " +body.second.toString();
  const  data = eval(expression);  
  res.end(JSON.stringify({answer : data}))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})