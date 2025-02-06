// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Contenedor from './Componentes/contenedor'
import { BrowserRouter, Routes, Route/*, Navigate */ } from 'react-router-dom'
import MisRutas from './enrutamiento/Index'
import Lay_out_et from './Lay_out_et'
import Grupo from './Componentes/Grupo'
import Daw2 from './Componentes/Daw2'
import CrearUsuarios from './Componentes/CrearUsuarios'

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	//   <Contenedor />
	// </StrictMode>,
	// <BrowserRouter>
	// 	<Routes>
	// 		<Route path='/' element={
	// 			<div>
	// 				<h1>Bienvenido a mi sitio web</h1>
	// 				<p>Esta es la página principal</p>
	// 			</div>
	// 			}>
	// 		</Route>
	// 		<Route path='/centro' element={
	// 			<div>
	// 				<h1>Bienvenido al CENTRO</h1>
	// 				<p>Mi centro es CIFP César Manrique</p>
	// 			</div>
	// 			}>
	// 		</Route>
	// 		<Route path='/ciclo' element={
	// 			<div>
	// 				<h1>Bienvenido a mi CICLO</h1>
	// 				<p>Mi ciclo es 2º DAW B</p>
	// 			</div>
	// 			}>
	// 		</Route>
	// 		{
	// 		/* <Route path='*' element={
	// 			<div>
	// 				<h1>ERROR 404</h1>
	// 				<p>You are staring a 404 page... for how long?</p>
	// 			</div>
	// 			}>
	// 		</Route> */
	// 		}
	// 		<Route path='*' element={
	// 			<Navigate to="/" replace="true"/>
	// 		}>
	// 		</Route>
	// 	</Routes>
	// </BrowserRouter>
	<BrowserRouter>
	<Routes>
	<Route path='/' element={
		// <MisRutas.Inicio />
		<Lay_out_et />
	}>
	<Route index element={<MisRutas.Inicio />} />
	<Route path='/Centro' element={
		<MisRutas.Centro />
	} />
	<Route path='/Ciclo' element={
		<MisRutas.Ciclo />
	}/>
	<Route path='/Curso' element={
		<MisRutas.Curso />
	}/>
	
	<Route path='/Daw2' element={
		<Daw2 />
	}/>
	<Route path='/grupo/:letra' element={<Grupo  />}/>
	
	<Route path='*' element={
		<div>
		<h3>Error 404...</h3>
		<p>Página No Encontrada...</p>
		</div>
	}/>
	</Route>
	
	<Route path='/grupo/CrearUsuario' element={<CrearUsuarios />}/>
	</Routes>
	</BrowserRouter>
)
