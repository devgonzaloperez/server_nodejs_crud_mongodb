const ContenedorCarts = require('../models/ContenedorCarts');
const contenedorCarts = new ContenedorCarts();

const createCart = async (req, res) =>{
    const newCart = await {
        timestamp: new Date().getTime(),
        products: []
    }
    const msg = await contenedorCarts.saveCart(newCart);
    res.json(msg);
}

const deleteCartByID = async (req, res) =>{
    const {id} = req.params;
    const msg = await contenedorCarts.deleteCartById(id);
    res.json(msg);
}

const getAllCartProductsByID = async (req, res) =>{
    const {id} = req.params;
    const msg = await contenedorCarts.getAllCartProductsByID(id);
    res.json(msg);
}

const addProductByIDtoCartByID = async (req, res) =>{
    const {id, id_prod} = req.params;
    const msg = await contenedorCarts.addProductByIDtoCartByID(id, id_prod);
    res.json(msg);
}

const deleteProductByIDFromCartByID = async (req, res) =>{
    const {id, id_prod} = req.params;
    const msg = await contenedorCarts.deleteProductByIDFromCartByID(id, id_prod);
    res.json(msg);
}

module.exports = {createCart, deleteCartByID, getAllCartProductsByID, addProductByIDtoCartByID, deleteProductByIDFromCartByID};