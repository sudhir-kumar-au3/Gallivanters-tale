const express  =require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require("dotenv").config();

const creatorRoute = require('./routes/creatorRoute');
const appRoute = require('./routes/app');

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'))
}
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Routes
app.use('/', appRoute);
app.use('/creator', creatorRoute);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});