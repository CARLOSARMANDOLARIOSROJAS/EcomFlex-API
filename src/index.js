
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file ,cb) => {
        cb(null , Date.now() + path.extname (file.originalname));
    }
})

const upload = multer({ storage });


app.use(bodyParser.json());

const productsRoutes = require('./routes/products.routes.js');
const categoriesRoutes = require('./routes/categories.routes.js');
const usersRoutes = require('./routes/users.routes.js');

app.use('/uploads', express.static('uploads'));

app.use('/api', categoriesRoutes);
app.use('/api/auth', usersRoutes);
app.use('/api/', upload.single('image_url'), (req, res, next) => {
    console.log('File uploaded successfully');
    next();
}, productsRoutes);


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the EcommFlex API!');
});

app.use((req, res, next) => {
    res.status(404).send('Error 404: Página no encontrada');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000, welcome to the EcommFlex API!');
}); 
