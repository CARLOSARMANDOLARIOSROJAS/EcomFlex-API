// const pool = require('../db');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true
      }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Algo esta mal...' });
  }
}

const getSingleProduct = async (req, res) => {
  res.send('Retrieving a single product');
}

const createProduct = async (req, res) => {
  try {
    const { name, image_url, price, category } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        image_url,
        category: {
          connect: {
            id: category
          }
        }
      }
    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Algo esta mal...' });
  }
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