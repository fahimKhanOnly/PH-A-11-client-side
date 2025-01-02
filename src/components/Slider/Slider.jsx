import { NavLink } from 'react-router-dom';
import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slider3.jpg';


const Slider = () => {
  return (
    <div className='container mx-auto'>
      <div className={`carousel w-full h-[235px] md:h-[450px] xl:h-[550px]`}>
        <div id="slide1" className="carousel-item relative w-full flex flex-col sm:flex-row items-center justify-end">
          <img src={slide1} className="w-full h-full bg-black -z-20" />
          <div className="absolute left-0.5 right-0.5 sm:left-2.5 sm:right-2.5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-sm btn-circle">❮</a>
            <a href="#slide2" className="btn btn-sm btn-circle z-10">❯</a>
          </div>

          <div className='w-full absolute bg-[#00000077] h-full sm:justify-center -z-10  flex flex-col items-center justify-center p-3'>

            <p className=' text-white border-t md:mb-8'>Find aesthetic pleasure</p>
            <h2 className='text-[1.7rem] font-bold text-white sm:text-4xl lg:font-extrabold lg:text-5xl'>Bestselling Artists</h2>

            <p className='sm:mt-3.5 text-white text-center w-[90%] lg:w-[90%] xl:w-[86%]'>Our aim is to serve the needs of all art lovers; from those looking for a one-off painting to serious collectors looking for investments. We believe that in investment terms the artist.</p>
          </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full flex flex-col sm:flex-row items-center justify-end">
          <img src={slide2} className="w-full h-full bg-black -z-20" />
          <div className="absolute left-0.5 right-0.5 sm:left-2.5 sm:right-2.5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-sm btn-circle">❮</a>
            <a href="#slide3" className="btn btn-sm btn-circle z-10">❯</a>
          </div>

          <div className='w-full absolute bg-[#00000077] h-full sm:justify-center -z-10  flex flex-col items-center justify-center p-3'>

            <p className=' text-white border-t md:mb-8'>Feel the art mentality</p>
            <h2 className='text-[1.7rem] font-bold text-white sm:text-4xl lg:font-extrabold lg:text-5xl'>Diversity of Thoughts</h2>

            <p className='sm:mt-3.5 text-white text-center w-[90%] lg:w-[90%] xl:w-[86%]'>Welcome to our range of Original Paintings, Limited and Open Edition Framed Prints and Edge Sculpture. Our gallery presents an extensive selection of wall art, images and frames.</p>
          </div>
        </div>


        <div id="slide3" className="carousel-item relative w-full flex flex-col sm:flex-row items-center justify-end">
          <img src={slide3} className="w-full h-full bg-black -z-20" />
          <div className="absolute left-0.5 right-0.5 sm:left-2.5 sm:right-2.5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-sm btn-circle">❮</a>
            <a href="#slide1" className="btn btn-sm btn-circle z-10">❯</a>
          </div>

          <div className='w-full absolute bg-[#00000077] h-full sm:justify-center -z-10  flex flex-col items-center justify-center p-3'>

            <p className=' text-white border-t md:mb-8'>Feel the art mentality</p>
            <h2 className='text-[1.7rem] font-bold text-white sm:text-4xl lg:font-extrabold lg:text-5xl'>Diversity of Thoughts</h2>

            <p className='sm:mt-3.5 text-white text-center w-[90%] lg:w-[90%] xl:w-[86%]'>Welcome to our range of Original Paintings, Limited and Open Edition Framed Prints and Edge Sculpture. Our gallery presents an extensive selection of wall art, images and frames.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 pb-2">
        <a href="#slide1" className="btn rounded-full btn-xs">1</a>
        <a href="#slide2" className="btn rounded-full btn-xs">2</a>
        <a href="#slide3" className="btn rounded-full btn-xs">3</a>
      </div>
    </div>
  );
};

export default Slider;
