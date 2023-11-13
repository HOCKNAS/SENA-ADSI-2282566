import Express from 'express';
import {
	consultarTodosProductos,
	crearProducto,
	editarProducto,
	eliminarProducto
} from '../../controller/productos/controller.productos.js';

//Definimos la variable para usar las rutas de Express
const rutasProducto = Express.Router();

//Creamos una función estandarizada para las respuestas hacia el FrontEnd
const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(result);
	}
};

//Definimos la ruta a usar para el metodo GET en productos, esto para obtener todos los productos de MongoDB
rutasProducto.route('/productos').get((req, res) => {
	consultarTodosProductos(AllCallback(res));
});


rutasProducto.route('/productos/:id').patch((req, res) => {
	editarProducto(req.params.id, req.body, (AllCallback(res)));
});


rutasProducto.route('/productos/:id').delete((req, res) => {
	eliminarProducto(req.params.id, AllCallback(res));
});



rutasProducto.route('/productos').post((req, res) => {
	crearProducto(req.body, (AllCallback(res)));
});

//Se exporta la ruta para usarla posteriormente
export default rutasProducto;