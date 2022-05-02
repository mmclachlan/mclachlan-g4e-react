const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api', (req, res) => {
    const options = {
        method : 'GET',
        url : req.body.uri,
        headers : req.body.headers
      }
      request(options, (err, res2) => {
        res.send( transpose(res2.body) );
      });
});

function transpose(body) {
    console.log("the body found on the server is : ")
    console.log(body);
    return body;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
