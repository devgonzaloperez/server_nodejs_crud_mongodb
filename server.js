/*----------------------------------IMPORTS:----------------------------------*/

const express = require('express'); //Express.
const { Router } = require('express'); //Express Router.
const cors = require('cors'); //Cors.
require('dotenv').config(); //Dotenv.

const { getAllProducts, getProductById, createProduct, updateProduct, deleteProductByID } = require('./src/controllers/router1.controllers');
const { createCart, deleteCartByID, getAllCartProductsByID, addProductByIDtoCartByID, deleteProductByIDFromCartByID } = require('./src/controllers/router2.controller');
const { noRoute } = require('./src/controllers/noRoute.controller');
const { isUserOrAdmin, isAdmin } = require('./src/middlewares/roles.middleware');

/*-----------------------------CREAR SERVIDOR:-----------------------------*/

const app = express(); //Crear servidor.

/*-----------------------------MIDDLEWARES:-----------------------------*/

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

/*-------------------------RUTAS Y RESPUESTAS:-------------------------*/

/*ROUTER1*/
const router1 = Router(); //Crear router.
app.use('/api/productos', router1);
router1.get('/', [isUserOrAdmin], getAllProducts); 
router1.get('/:id', [isUserOrAdmin], getProductById);
router1.post('/', [isAdmin], createProduct);
router1.put('/:id', [isAdmin], updateProduct);
router1.delete('/:id', [isAdmin], deleteProductByID);

/*ROUTER2*/
const router2 = Router(); //Crear router.
app.use('/api/carrito', router2);
router2.post('/', [isUserOrAdmin], createCart);
router2.delete('/:id', [isUserOrAdmin], deleteCartByID);
router2.get('/:id/productos', [isUserOrAdmin], getAllCartProductsByID);
router2.post('/:id/productos/:id_prod', [isUserOrAdmin], addProductByIDtoCartByID);
router2.delete('/:id/productos/:id_prod', [isUserOrAdmin], deleteProductByIDFromCartByID);

/*RUTA INEXISTENTE*/
app.use('*', noRoute);
                                                                                
/*-----------------------------------INICIAR SERVIDOR:------------------------------------*/

const PORT = 8080 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
});

app.on('error', (error)=>{
    console.log(error)
});