import AdminLayout from 'layouts/Admin';
import Publico from 'layouts/Publico';
import Login from 'pages/auth/Login';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import MVentas from 'pages/admin/MVentas';
import Productos from 'pages/admin/RegistroProductos';
import MProductos from 'pages/admin/MProductos';
import Perfil from 'pages/admin/Perfil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from './context/userContext.js';
import { useState } from 'react';
import RutaPrivada from './components/RutaPrivada';

function App() {

	const [userData, setUserData] = useState({});

	return (

		<Auth0Provider
			domain='misiontic-santiago.us.auth0.com'
			clientId='tp5sSqNoqmD2tstNkWKkP00GAuPZBRzy'
			redirectUri='https://sena.hocknas.co/admin/perfil/'
			audience='SECRET IDENTIFIER'
		>
			<div className='App'>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Router>
						<Switch>
							<Route path={['/admin', '/admin/perfil', '/admin/usuarios', '/admin/ventas', '/admin/mventas', '/admin/productos', '/admin/mproductos']}>
								<AdminLayout>
									<Switch>
										<Route path='/admin/perfil'>
											<RutaPrivada listaRoles={['Sin rol', 'Administrador', 'Vendedor']}>
												<Perfil />
											</RutaPrivada>
										</Route>
										<Route path='/admin/usuarios'>
											<RutaPrivada listaRoles={['Administrador']}>
												<Usuarios />
											</RutaPrivada>
										</Route>
										<Route path='/admin/ventas'>
											<RutaPrivada listaRoles={['Administrador', 'Vendedor']}>
												<Ventas />
											</RutaPrivada>
										</Route>
										<Route path='/admin/mventas'>
											<RutaPrivada listaRoles={['Administrador', 'Vendedor']}>
												<MVentas />
											</RutaPrivada>
										</Route>
										<Route path='/admin/productos'>
											<RutaPrivada listaRoles={['Administrador']}>
												<Productos />
											</RutaPrivada>
										</Route>
										<Route path='/admin/mproductos'>
											<RutaPrivada listaRoles={['Administrador']}>
												<MProductos />
											</RutaPrivada>
										</Route>
									</Switch>
								</AdminLayout>
							</Route>
							<Route path={['/']}>
								<Publico>
									<Switch>
										<Route path='/'>
											<Login />
										</Route>
									</Switch>
								</Publico>
							</Route>
						</Switch>
					</Router>
				</UserContext.Provider>
			</div>
		</Auth0Provider>
	);
}

export default App;
