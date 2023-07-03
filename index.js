const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const bodyParser = require('body-parser');

const port = 8080;
const app = express();
app.use(express.json());
// app.use(bodyParser.json())
app.use(cors());

// http://localhost:8080/
// http://localhost:8080/cats

app.get('/', function (req, res) {
  res.send(JSON.stringify({ 'message': 'Hello, thanks for your request' }))
})

app.post('/signup', async function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  const body = req.body
  console.log(body)

  const currentUsers = JSON.parse(fs.readFileSync('./accounts.json'))
  const newId = uuidv4();
  currentUsers[newId] = body


  fs.writeFileSync('./accounts.json', JSON.stringify(currentUsers, null, 2))

  // const { username, password } = JSON.parse(req.body)
  // console.log('username: ', username) // "myCoolUserName1"
  // console.log('password: ', password) // "my_PaSSwoRd"
  res.send(JSON.stringify({ 'message': 'Hello, thanks for your request' }))
})

app.listen(port);
