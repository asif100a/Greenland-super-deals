import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css';
import { useRef } from 'react';

const Card = ({ card }) => {
    const {
        id,
        estate_title,
        description,
        price,
        status,
        area,
        location,
        image_url
    } = card;

    const textRef = useRef();

    const handleAnimatedCard = () => {
        textRef.current.classList.add('animate__animated');
        textRef.current.classList.add('animate__fadeInUp');

        setTimeout(() => {
            textRef.current.classList.remove('animate__animated');
            textRef.current.classList.remove('animate__fadeInUp'); 
        }, 1000);
    };

    return (
        <div
            onWheelCapture={handleAnimatedCard}
            ref={textRef}
            className='flex flex-col lg:flex-row gap-4 border border-[#88ee88dd] bg-gray-50 p-3 rounded-xl w-[80%] mx-auto'
        >
            <div className='w-full lg:w-[40%]'>
                <img src={image_url} alt="image" className='w-full lg:w-[312px] h-[176px] md:h-[228px] border rounded-md' />
                <Link to={`/view_details/${id}`} state={estate_title} className="btn h-[2rem] min-h-[2rem] border border-orange-400 font-bold text-purple-600 mt-3 font-pt_serif">View Property</Link>
            </div>
            <div>
                <h1 className='text-2xl font-medium mb-1 font-noto_serif'>{estate_title}</h1>
                <p className='mb-4 font-pt_serif'>{description?.slice(0, 120)}</p>
                <div className='flex justify-between gap-3 mb-2 font-pt_serif'>
                    <p className='bg-[#88ee88dd] text-gray-800 font-semibold px-3 md:px-6 py-1 rounded-full'>Price : {price}</p>
                    <p className='bg-[#ec96ec] text-gray-800 font-semibold px-3 md:px-6 py-1 rounded-full'>Status : {status}</p>
                </div>
                <div className='space-y-2 font-pt_serif'>
                    <p className='border-2 pl-3 py-1 rounded-full border-orange-400 border-dotted'><span className='font-semibold'>Total area</span> : {area}</p>
                    <p className='border-2 pl-3 py-1 rounded-full border-purple-500 border-dotted'><span className='font-semibold'>Location</span> : {location}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;