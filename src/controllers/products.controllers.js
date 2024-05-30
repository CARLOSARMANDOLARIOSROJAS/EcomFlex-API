

const getAllProducts = async (req, res) => {
    res.send('Retrieving all products');
  }

const getSingleProduct = async (req, res) => {
    res.send('Retrieving a single product');
}

  module.exports = {
    getAllProducts,
    getSingleProduct
  }