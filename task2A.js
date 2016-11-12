var express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function (req, res) {
   var paramA = 0;
   var paramB = 0;
  if(((req.query.a) !== undefined )){
    paramA = (req.query.a);
  }
  if(((req.query.b) !== undefined) ){
    paramB = (req.query.b);
  }
  const sum = +paramA + +paramB;
  res.send(sum.toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
