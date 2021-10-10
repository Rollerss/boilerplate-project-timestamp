// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// return unix time stamp
app.get("/api/:date", function(req, res){
  let timestamp = req.params.date
  let intValue
  if(timestamp !== null && timestamp.length > 0) {
    intValue = parseInt(str);
  }
  if (intValue === 0){
    res.json({ error : "Invalid Date" })
  }

  if (timestamp.length > 0){
    intValue = new Date.now()
  } 
  let utcTime = new date(intValue * 1000)

  res.json({unix: intValue, utc: utcTime})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
