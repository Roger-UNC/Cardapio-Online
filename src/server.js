const index = require('./index');
const dotenv = require('dotenv');

dotenv.config();

require('./database');

index.listen(`${process.env.PORT}`);

console.log(`API iniciada porta: ${process.env.PORT}`);