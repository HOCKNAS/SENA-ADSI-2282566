import Express from 'express';
import {
	crearUsuario,
	consultarTodosUsuarios,
	editarUsuario,
	eliminarUsuario,
	consultarOcrearUsuario,
} from '../../controller/usuarios/controller.usuarios.js';

//Definimos la variable para usar las rutas de Express
const rutasUsuario = Express.Router();

//Creamos una función estandarizada para las respuestas hacia el FrontEnd
const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Usuarios');
	} else {
		res.json(result);
	}
};

//Definimos la ruta a usar para el metodo GET en usuarios, esto para obtener el usaurio que se esta logeando y saber si existe en MongoDB
rutasUsuario.route('/usuarios/iam').get((req, res) => {
	consultarOcrearUsuario(req, AllCallback(res));
});

//Definimos la ruta a usar para el metodo GET en usuarios, esto para obtener todos los usuarios de MongoDB
rutasUsuario.route('/usuarios').get((req, res) => {
	consultarTodosUsuarios(AllCallback(res));
});


rutasUsuario.route('/usuarios').post((req, res) => {
	crearUsuario(req.body, (AllCallback(res)));
});


rutasUsuario.route('/usuarios/:id').patch((req, res) => {
	editarUsuario(req.params.id, req.body, (AllCallback(res)));
});


rutasUsuario.route('/usuarios/:id').delete((req, res) => {
	eliminarUsuario(req.params.id, AllCallback(res));
});

//Se exporta la ruta para usarla posteriormente
export default rutasUsuario;