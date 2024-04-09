import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Cards = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div className="mt-16 space-y-6 pt-3 border-t-4 border-[#88ee88dd] rounded-t-[2rem] bg-[#f4ecf4a1]">
            <h1 className="text-4xl font-bold text-[#111010] text-center">Our available firms</h1>
            <p className="text-[#000000b3] w-[48rem] mx-auto text-center">We are tracking
                about our best agricultural firms. Our firms are the 4th most popular industry and market group. If you are interested in the Agriculture market, also check out our available firms here. You can choose your best choise from here.❤️😁😍🤣😒👌</p>

            <div className='grid grid-cols-2 gap-6'>
                {
                    cards.map(card => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Cards;