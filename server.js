var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('./client/src'));

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.post('/bucket', function(req, res){
 var url = 'mongodb://localhost:27017/bucket';
   MongoClient.connect(url, function(err, db) {
    var collection = db.collection('bucket');
    collection.insert(req.body);
    res.status(200).end()
    db.close();
  });
})

 var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

