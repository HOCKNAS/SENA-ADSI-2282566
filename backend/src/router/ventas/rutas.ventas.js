import Express from 'express';
import {
	consultarTodosVentas,
	editarVenta,
	eliminarVenta,
	agregarVenta,
} from '../../controller/ventas/controller.ventas.js';

//Definimos la variable para usar las rutas de Express
const rutasVentas = Express.Router();

//Creamos una función estandarizada para las respuestas hacia el FrontEnd
const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(result);
	}
};

//Definimos la ruta a usar para el metodo GET en ventas, esto para obtener todas las ventas de MongoDB
rutasVentas.route('/ventas').get((req, res) => {
	consultarTodosVentas(AllCallback(res));
});


rutasVentas.route('/ventas/:id').patch((req, res) => {
	editarVenta(req.params.id, req.body, (AllCallback(res)));
});


rutasVentas.route('/ventas/:id').delete((req, res) => {
	eliminarVenta(req.params.id, AllCallback(res));
});


rutasVentas.route('/ventas').post((req, res) => {
	agregarVenta(req.body, AllCallback(res));
});

//Se exporta la ruta para usarla posteriormente
export default rutasVentas;