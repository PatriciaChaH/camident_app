import { useRoutes , BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home/home';
import Productos from '../Productos';
import Acerca from '../Acerca';
import Contacto from '../Contacto';
import Carrito from '../Carrito/carrito';
import Navbar from '../../Components/Navbar';
import './App.css'




const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home/>},
    { path: '/productos', element: <Productos /> },
    { path: '/acerca-de', element: <Acerca /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/carrito', element: <Carrito /> },
  ])
  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes /> 
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}
export default App
