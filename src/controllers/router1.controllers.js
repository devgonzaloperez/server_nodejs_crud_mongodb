const { MongooseConnection } = require('../db/config.js');
const { ProductsModel } = require('../db/product.model.js');
const Contenedor = require('../models/ContenedorProducts');

const contenedorProducts = new Contenedor();

const getAllProducts = (req, res) =>{ 
    const products = contenedorProducts.getAll();
    products.then((data) => res.send(data))
};

const getProductById = (req, res) =>{
    const {id} = req.params;
    const product = contenedorProducts.getById(id);
    product.then((data) => res.send(data));
}

const createProduct = async (req, res) =>{
    const {name, description, price, stock, imageURL} = await req.body; //!!!
    const newProduct = await {
        timestamp: new Date().getTime(),
        name: name,
        description: description, 
        price: price,
        stock: stock, 
        imageURL: imageURL
    };
    const newProductAddedMSG = await contenedorProducts.save(newProduct);
    res.json(newProductAddedMSG);
}

const updateProduct = async (req, res) =>{
    const {id} = req.params;
    const newData = req.body;
    const updatedProduct = contenedorProducts.updateById(id, newData);
    updatedProduct.then((data) => res.send(data));
}

const deleteProductByID = (req, res) =>{
    const {id} = req.params;
    const deletedProduct = contenedorProducts.deleteById(id);
    deletedProduct.then(data => res.send(data));
}

module.exports = {getAllProducts, getProductById, createProduct, updateProduct, deleteProductByID};