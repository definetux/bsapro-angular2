var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function response(req, res) {
	res.sendFile(path.join(__dirname, 'src/index.html'));
 });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});