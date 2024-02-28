const Tarjeta = ({categoria, imagen, titulo, producto, precio}) => {
    return(
        <div className="bg-sky-200 cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{categoria}</span>
                <img  className='w-full h-full object-cover' src={imagen} alt={titulo}></img>
                <div className="absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm text-start font-normal p-1">{producto}</span>
                <span className="text-base text-start font-medium m-1 p-1">{precio}</span>
            </p>
        </div>

    )
}

export default Tarjeta