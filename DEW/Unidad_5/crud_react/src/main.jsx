import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { UserList, UserCreate, UserDetails, UserUpdate, UserDelete } from './Componentes/UserList'
import LayoutOutlet from './LayoutOutlet'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LayoutOutlet />} />
			<Route path="/alumnos/" element={<UserList />} />
			<Route path="/alumnos/create" element={<UserCreate />} />
			<Route path="/alumnos/read:id" element={<UserDetails />} />
			<Route path="/alumnos/update:id" element={<UserUpdate />} />
			<Route path="/alumnos/delete:id" element={<UserDelete />} />
			<Route path='*' element={
					<section>
						<h1>ERROR 404</h1>
						<p>You are staring a 404 page... for how long?</p>
					</section>
				}>
			</Route>
		</Routes>
	</BrowserRouter>
)
