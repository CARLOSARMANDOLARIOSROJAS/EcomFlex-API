// const pool = require('../db');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('../../cloudinary.js');


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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
    const { name, price, categoryId } = req.body;
    let image_url;

    if (req.file && req.file.path) {
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'products' });
      image_url = result.secure_url;
      
    }
      // Subir imagen a Cloudinary

    // Crear el nuevo producto en la base de datos
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        image_url,
        category: {
          connect: {
            id: parseInt(categoryId)
          }
        }
      }
    });

    // Enviar la respuesta con el nuevo producto creado
    res.json(newProduct);
  } catch (error) {
    // Manejar errores
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Error creating product', detailedError: error});
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Algo esta mal...' });
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image_url, price, category } = req.body;
    const updatedProduct = await prisma.product.update({
      where: {
        id: parseInt(id)
      },
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
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Algo esta mal...' });
  }

}

const countProductsByCategory = async (req, res) => {
  try {
    const productsByCategory = await prisma.product.groupBy({
      by: ['categoryId'],
      _count: {
        name: true
      }
    });

    res.json(productsByCategory);
  } catch (error) {
    res.status(500).json({ error: 'Algo salió mal al contar los productos por categoría.' });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  countProductsByCategory
}