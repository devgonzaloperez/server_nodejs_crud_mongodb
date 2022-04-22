const {mongoose} = require("mongoose");

//1. Definir el schema de cada producto.
const CartSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
});

//2. Crear el modelo.
const CartsModel = mongoose.model("carts", CartSchema);

module.exports = {CartsModel};