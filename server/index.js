
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/sellyourhome', express.static(__dirname + '/../client/dist'));
app.use('/featured', express.static(__dirname + '/../client/dist'));
app.use('/search', express.static(__dirname + '/../client/dist'));




// app.get('/blogs/:title', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'});
// });
// app.use(forceSsl);
app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});