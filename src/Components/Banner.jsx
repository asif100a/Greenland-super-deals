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
  return (
    <div className='relative'>
      <div className='w-full'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/zQJrfpC/Slide-img-1.jpg" alt="" style={{ width: '100%', height: '600px', borderRadius: '24px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Bq1N13r/Slide-img-3.png" alt="" style={{ width: '100%', height: '600px', borderRadius: '24px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/TPLMSwy/Slide-img-5.jpg" alt="" style={{ width: '100%', height: '600px', borderRadius: '24px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/sRXRXFP/Slide-img-4.webp" alt="" style={{ width: '100%', height: '600px', borderRadius: '24px' }} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='text-center mt-16 space-y-6'>
        <h1 className='text-4xl font-bold text-[#111010]'>Best Aggricultural Firms</h1>
        <p className='text-base font-normal text-[#000000b3] w-[48rem] mx-auto'>Hayden Outdoors represents hundreds of farms for sale from coast to coast. From fully operational farms to sections and smaller tracts, our team of land brokers offer exceptional farm ground for sale.</p>
      </div>
    </div>
  );
};

export default Banner;