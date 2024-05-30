
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.json());

const productsRoutes = require('./routes/products.routes.js');
const categoriesRoutes = require('./routes/categories.routes.js');

app.use('/api', productsRoutes);
app.use('/api', categoriesRoutes);


app.use(express.json());

app.use((req, res, next) => {
    res.status(404).send('Error 404: Página no encontrada');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000, welcome to the EcommFlex API!');
});
