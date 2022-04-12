const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(cors({
    origin: 'http://localhost:3000'
}))

// post public 
var path = require('path');
var public = path.join(__dirname, '');
app.get('/', express.static(public));

//paser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//paser applicaton/json
app.use(bodyParser.json());

// Connect mongodb
require('./configs/db')();


const routes = require('./routes');
app.use(routes);

app.listen(3001, () => {
    console.log('Your app is available at http://localhost:3001');
});