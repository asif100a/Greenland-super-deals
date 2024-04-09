import PropTypes from 'prop-types';

const Card = ({ card }) => {
    console.log(card)
    const {
        id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image_url
    } = card;

    return (
        <div className='flex gap-2 border border-[#88ee88dd] p-3 rounded-xl'>
            <div>
                <img src={image_url} alt="image" className='w-48 h-32 border rounded-md' />
                <button className="btn h-[2rem] min-h-[2rem] border border-orange-400 font-bold text-purple-600 mt-3">View Property</button>
            </div>
            <div>
                <h1 className='text-2xl font-medium mb-4'>{estate_title}</h1>
                <div className='flex justify-between gap-3 mb-3'>
                    <p className='bg-[#88ee88dd] text-gray-800 font-semibold px-6 py-1 rounded-full'>Price : {price}</p>
                    <p className='bg-[#ec96ec] text-gray-800 font-semibold px-6 py-1 rounded-full'>Status : {status}</p>
                </div>
                <div className='space-y-2'>
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