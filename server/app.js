var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');

var app = connect();
app.use(bodyParser.json());

app.use('/memes', function memeController(req, res, next) {
  var payload = {
    data: [
      'http://img.hb.aicdn.com/fbacb44ae84bf7c52e1745abbb71df31abd4213b313e0-8XMu1d_fw658',
      'http://img.hb.aicdn.com/0601d515e9c0bde875cf65ac42ede247f2e805a54befd-HyGMTK_fw658',
      'http://img.hb.aicdn.com/cf0339bca15fab68eba9f2cfe6f824c7c77f529e2f0c0-UGrwPh_fw658'
    ]
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type,accept");
  res.end(JSON.stringify(payload))
});

http.createServer(app).listen(3000);
console.log('started on port 3000');