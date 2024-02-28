import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home/home';
import Productos from '../Productos';
import Acerca from '../Acerca';
import Contacto from '../Contacto';
import Navbar from '../../Components/Navbar';
import './App.css'



const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home/>},
    { path: '/Productos', element: <Productos /> },
    { path: '/Acerca', element: <Acerca /> },
    { path: '/Contacto', element: <Contacto /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes /> 
    </BrowserRouter>
  )
}
export default App
