// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  const greenland = '"Greenland Super Firms"'
  return (
    <div className=''>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-center mb-6 pt-6'>Greenland Super Deals</h1>
        <p className="mt-6 w-[90%] lg:w-[48rem] text-center mx-auto">In recent years, Greenland super firms has been quietly undergoing a transformation, positioning itself as a new frontier for economic expansion. Among the most notable developments is the emergence of what experts are terming {greenland} — companies </p>
      </div>
      <div className='w-full lg:w-[70%] lg:h-auto mx-auto'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/zQJrfpC/Slide-img-1.jpg" alt="" className='w-full h-[200px] lg:h-[400px] rounded-xl lg:rounded-3xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Bq1N13r/Slide-img-3.png" alt="" className='w-full h-[200px] lg:h-[400px] rounded-xl lg:rounded-3xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/TPLMSwy/Slide-img-5.jpg" alt="" className='w-full h-[200px] lg:h-[400px] rounded-xl lg:rounded-3xl' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/sRXRXFP/Slide-img-4.webp" alt="" className='w-full h-[200px] lg:h-[400px] rounded-xl lg:rounded-3xl' />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='text-center mt-16 space-y-6'>
        <h1 className='text-4xl font-bold text-[#111010]'>Best Aggricultural Deals</h1>
        <p className='text-base font-normal text-[#000000b3] w-[90%] lg:w-[48rem] mx-auto'>Hayden Outdoors represents hundreds of farms for sale from coast to coast. From fully operational farms to sections and smaller tracts, our team of land brokers offer exceptional farm ground for sale.</p>
      </div>
    </div>
  );
};

export default Banner;