import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar =() => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offdet-4'
    

    return(
        <nav className='flex-column items-center bg-stone-50 p-2 '>
            <ul className='flex justify-between max-w-3xl mx-auto px-2 font-medium text-lg'>
                <li>
                    <NavLink 
                        to ='/'>
                            <img src='src/assets/Photos/logoCamident.png' alt='logo' className='h-10 w-27 '></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to ='/'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Inicio
                    </NavLink>
                </li>
                <li>
                   <NavLink
                        to ='/productos'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Productos
                    </NavLink>
                </li>
                <li>
                   <NavLink
                        to ='/acerca-de'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li>
                   <NavLink
                        to ='/contacto'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Contáctanos
                    </NavLink>
                </li>
                <li>
                   <NavLink
                        to ='/carrito'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        🛒{context.count}
                    </NavLink>
                </li>

            </ul>

        </nav>
    )

}

export default Navbar


 