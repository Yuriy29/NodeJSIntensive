var express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function (req, res) {
  var result = "Invalid fullname";
  var inputString = req.query.fullname;
  var s = (inputString).toString();
  var outPutArray = new Array();
  var inputArray = s.split(' ');
  if(((inputString) !== undefined && (0 < inputString.length && inputArray.length <=3))){
     for(var i = 0; i < inputArray.length; i++){
       if(i == 1){
          outPutArray[i] = inputArray[0].charAt(0)+".";
       }else if(i == 2){
          outPutArray[i] = inputArray[1].charAt(0)+".";
        }else{
          outPutArray[i] = inputArray[inputArray.length - 1];
        }
     }
     result = outPutArray.join(" ");
  }

  res.send(result.toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
