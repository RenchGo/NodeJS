const express = require('express')
const app = express()
const port = 3001

const connect_stunent = require('./connect')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  connect_stunent.getStudent()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/students', (req, res) => {
    connect_stunent.createStudent(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put('/students/:id', (req, res) => {
  i=req.params.id
  connect_stunent.updateStudent(req.body, req.i)
.then(response => {
  res.status(200).send(response);
})
.catch(error => {
  res.status(500).send(error);
})
})

app.delete('/students/:id', (req, res) => {
  i=req.params.id
    connect_stunent.deleteStudent(req.params.i)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})