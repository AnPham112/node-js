const express = require('express');

const app = express();


const hostname = 'localhost'
const port = 8017

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.listen(port, hostname, () => {
    console.log(`Server is running on port http://${hostname}:${port}`)
})