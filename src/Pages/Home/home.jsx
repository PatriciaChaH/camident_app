import Slider from "react-slick"; //creates the carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../../Components/Layout";

function Home() {
  const settings ={

    dots: true, 
    infinite : true,
    speed: 3000,
    slideToShow: 5, 
    slideToScroll: 1,
    autoplaySpeed: 20,
    autoplay: true

  };

  return (
    <>
      <Layout>
        Home
      </Layout>
      <div className='mt-30'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <>
            <div key={index} className=''>
            <div className='bg-white-400 h-[300px] text-black-rounded-x1'>
              <img src={d.img} alt='' className='h-80 w-90 my-auto mx-auto' />
            </div>
            <div className='flex flex-col item-center justify-center gap-5 p-5'>
              <p className='text-center'>{d.review}</p>
              <button className='bg-indigo-400 text-white text-xl px-4 py-2'>{d.name}</button>
              </div>
              </div>
              </>
          ))}</Slider>
      </div>
    </>
  )

}

const data = [
    {
      name: `Instrumental`,
      img: `src/assets/Photos/instrumental.png`,
      review: ``,
    },
  
    {
      name: `Materiales odontológicos`,
      img: `src/assets/Photos/material.png`,
      review: ``,
    },
  
    {
      name: `Unidades odontológicas`,
      img: `src/assets/Photos/equipo1.png`,
      review: ``,
    },
  
    {
      name: `Equipos odontológicos`,
      img: `src/assets/Photos/equipo2.png`,
      review: ``,
    },
  ];

export default Home