const pool = require('../db');

const getAllProducts = async (req, res) => {
  res.send('Retrieving all products');
}

const getSingleProduct = async (req, res) => {
  res.send('Retrieving a single product');
}

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const response = await pool.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
  console.log(response);
  res.send('Creating a product');
}

const deleteProduct = async (req, res) => {
  res.send('Deleting a product');
}

const updateProduct = async (req, res) => {
  res.send('Updating a product');
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct
}