
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


const morgan = require('morgan');

app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(bodyParser.json());

const productsRoutes = require('./routes/products.routes.js');
const categoriesRoutes = require('./routes/categories.routes.js');
const usersRoutes = require('./routes/users.routes.js');

app.use('/api', productsRoutes);
app.use('/api', categoriesRoutes);
app.use('/api/auth', usersRoutes);


app.use(express.json());

app.use((req, res, next) => {
    res.status(404).send('Error 404: Página no encontrada');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000, welcome to the EcommFlex API!');
}); 
