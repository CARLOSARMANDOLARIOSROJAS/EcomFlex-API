
const express = require('express');

const app = express();

const morgan = require('morgan');

const productsRoutes = require('./routes/products.routes');

app.use(morgan('dev'));

app.use(productsRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000, welcome to the EcommFlex API!');
});
