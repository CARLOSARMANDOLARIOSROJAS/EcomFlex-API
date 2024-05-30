
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
}

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await prisma.category.create({
            data: {
                name
            }
        });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la categoría', message: error.message });
    }
}

module.exports = {
    createCategory,
    getAllCategories
}