const { ProductsModel } = require("../db/product.model");

class ContenedorProducts{

    constructor(){
        this.model = ProductsModel;
    }

    async save(object){
        try{
            if(typeof object == "object"){
                const response = await this.model.create(object);
                return {msg: `Se ha agregado correctamente el producto ${response.name}.`}
            }
            else{
                return {error: "No se ha podido crear el producto. Vuelta a intentarlo."}
            }
        }
        catch(error){
            console.log(error)
        }
    }

    async getById(id){
        try{
            const product = await this.model.findOne({_id: id});
            console.log(product);
            if(product._id == id){
                return product
            }
            else{
                return {error: `No se ha encontrado un producto con el ID ${id}.`}
            }
        }
        catch(error){
            console.log(error)
        }
    }

    async getAll(){
        try{
            const products = await this.model.find();
            console.log(products);
            if(products.length > 0){
                return products
            }
            else{
                return {error: `No hay productos en la BBDD.`}
            }
        }
        catch(error){
            console.log(error)
        }
    }

    async deleteById(id){
        try{
            const response = await this.model.deleteOne({_id: id});
            if(response.deletedCount === 1){
                return {msg: `Se ha borrado el producto con el ID ${id}.`}
            }
            else{
                return {error: `No se ha encontrado un producto con el ID ${id}, por ende, no se ha podido borrar.`}
            }
        }
        catch(error){
            console.log(error)
        }
    }

    async updateById(id, newData){
        try{

            const response = await this.model.updateOne({_id: id}, newData);
            if(response.matchedCount === 1){
                return {msg: `Se ha actualizado el item con el ID ${id}.`}
            }
            else{
                return {error: `No se ha encontrado un item con el ID ${id}, por ende, no se ha podido actualizar.`}
            }
        }
        catch(error){
            console.log(error)
        }
    }

}

module.exports = ContenedorProducts;




