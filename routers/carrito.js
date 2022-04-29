const express = require('express')
const {carritoDaos: Carrito} = require('../daos/mainDaos')
const routerCarrito = express.Router()

const Carro = new Carrito()

routerCarrito.post('/', async function(req, res){
    try {
        const carrito = await Carro.newCarrito()
        res.status(200).send({
            status: 200,
            data: {
                carrito,
            },
            message:'carrito agregado'
            })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}
);

routerCarrito.delete('/:id', async function(req, res){
    const num = req.params.id
    try {
        const borrado = await Carro.deleteCarritoById(num)
        res.status(200).send({
            status: 200,
            data: {
                borrado,
            },
            message:'carrito borrado'
            })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}
);




routerCarrito.post('/productos', async function(req, res){
        
    try {
            let idCarrito = req.body.idCart
            let idProducto = req.body.idP
            const agregado = await Carro.agregarProducto(idCarrito, idProducto)
            res.status(200).send({
                status: 200,
                data: {
                    agregado,
                },
                message:'producto agregado a carrito'
                })
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: error.message
            })
        }
            
            
});


routerCarrito.delete('/productoEliminar', async function(req, res){

    try {
        let idCarrito = req.body.idCart
        let idProducto = req.body.idP
        const agregado = await Carro.deleteProductoDeCarrito(idCarrito, idProducto)
        res.status(200).send({
            status: 200,
            data: {
                agregado,
            },
            message:'producto agregado a carrito'
            })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
    
}
);

module.exports = routerCarrito



// routerCarrito.get('/:id/productos', function(req, res){
//     const num = req.params.id
//             if (isNaN(num))
//             {
//                 res.json({ error : 'El parametro no es un numero entero' })
//             }else{
//                 id = parseInt(num)
//             const test = new ContenedorCarrito()
        
//             test.getById(id).then(function(result) {
//                 if (result === null)
//                 {
//                     res.json({ error : 'carrito no encontrado' })
//                 }else
//                 {
//                     res.end(`<h1 style = 'color:blue;'> PRODUCTOS EN EL CARRITO</h1>${JSON.stringify(result)}`)
//                 }
//             });
//             } 
// }
// );