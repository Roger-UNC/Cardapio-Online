const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);

console.log(`OK porta ${process.env.PORT}`)