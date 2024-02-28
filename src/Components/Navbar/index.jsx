import {NavLink} from 'react-router-dom'

const Navbar =() => {
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
                        to ='/Productos'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Productos
                    </NavLink>
                </li>
                <li>
                   <NavLink
                        to ='/Acerca'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li>
                   <NavLink
                        to ='/Contacto'
                        className={({isActive}) =>
                            isActive ? activeStyle:undefined                        
                        }>
                        Contáctanos
                    </NavLink>
                </li>

            </ul>

        </nav>
    )

}

export default Navbar


 