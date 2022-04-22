require('dotenv').config();

const isUserOrAdmin = (req, res, next) =>{
    const isUser = process.env.ISUSER === "true"; //Hago esto porque el .env es string.
    const isAdmin = process.env.ISADMIN === "true"; //Hago esto porque el .env es string.
    if(!isUser || !isAdmin){
            return res.status(500).json({error: "No puede ingresar a la ruta si no es usuario o administrador."})
    }
    next()
}

const isAdmin = (req, res, next) =>{
    const isAdmin = process.env.ISADMIN === "true"; //Hago esto porque el .env es string.
    if(!isAdmin){
        return res.status(500).json({error: "No puede ingresar a la ruta si no es administrador."})
    }
    next()
}

module.exports = {isUserOrAdmin, isAdmin};