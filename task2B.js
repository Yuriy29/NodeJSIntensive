var express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function (req, res) {
  var result = "Invalid fullname";
  var inputString = req.query.fullname;
  if(((inputString) !== undefined && (0 < inputString.length))){
    var s = (inputString).toString();
    var outPutArray = new Array();
     var inputArray = s.split(' ');
     for(var i = 0; i < inputArray.length; i++){
       var j = inputArray.length;
       if(inputArray.length > 3){
         break;
       }
       if(i == 1){
         console.log(inputArray[0]);
          outPutArray[i] = inputArray[0].charAt(0)+".";
       }else {
         console.log(inputArray[j - 1]);
         if(i == 2){
          outPutArray[i] = inputArray[1].charAt(0)+".";
        }else{
          outPutArray[i] = inputArray[j - 1];
        }
     }
       j--;
     }
     if(inputArray.length <= 3){
        result = outPutArray.join(" ");
     }
  }

  res.send(result.toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
