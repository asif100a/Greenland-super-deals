import greenlandPhoto from '../../assets/uw1.jpg';

const AboutUs = () => {
    const weAre = "We're"
    return (
        <div className="mt-12">
            <h1 className="text-4xl font-semibold font-pt_serif text-center md:text-start">About us</h1>
            <div className="mt-6 flex justify-between flex-col lg:flex-row w-[95%] md:w-auto mx-auto">
                <div>
                    <h1 className="text-3xl font-medium font-noto_serif">What is Greenland Super Deal?</h1>
                    <p className="mt-3 font-pt_serif">Greenland Super Deals is a combiner of agricultural lands where someone can get hire from this business. {weAre} a thriving community for workplace conversations, driven by a simple mission: helping people everywhere find jobs and companies they love.</p>
                    <p className="font-pt_serif">Filter millions of jobs and ratings, talk to professionals, and get smart on salary—then apply with ease. We amplify your voice, so you can enhance your workplace experience.</p>
                    <p className="font-pt_serif">So you can find and keep the best talent. Post jobs, respond to reviews, and gain insights to shape your messaging.</p>
                </div>
                <div>
                    <img src={greenlandPhoto} alt="Greenland Super Deals" className='mt-3 lg:mt-0' />
                </div>
            </div>
            <div className='mb-12 w-[95%] md:w-auto mx-auto'>
                <h1 className="text-3xl font-medium font-noto_serif mt-12 text-center">What we do?</h1>
                <p className="mt-3 font-pt_serif text-center w-auto md:w-[28rem] lg:w-[32rem] mx-auto">Wherever you are on your career journey, Glassdoor makes it easier for workers and companies to find the perfect match.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mx-auto mt-8 w-fit ">
                    <div className='border-4 border-double border-green-500 rounded-xl p-3 w-80 md:w-72 lg:w-80 h-56'>
                        <h1 className="text-2xl font-medium font-pt_serif text-center mb-3">For job seekers</h1>
                        <p className="font-pt_serif">We simplify your search, so you can apply for jobs with confidence. Filter millions of jobs and ratings, talk to professionals, and get smart on salary—then apply with ease.</p>
                    </div>
                    <div className='border-4 border-double border-green-500 rounded-xl p-3 w-80 md:w-72 lg:w-80 h-56'>
                        <h1 className="text-2xl font-medium font-pt_serif text-center mb-3">For employees</h1>
                        <p className="font-pt_serif">We amplify your voice, so you can enhance your workplace experience. Leave reviews, search and post salaries, and join candid conversations about life at work.</p>
                    </div>
                    <div className='border-4 border-double border-green-500 rounded-xl p-3 w-80 md:w-72 lg:w-80 h-56'>
                        <h1 className="text-2xl font-medium font-pt_serif text-center mb-3">For employers</h1>
                        <p className="font-pt_serif">We give you a place to shape and share your story, so you can find and keep the best talent. Post jobs, respond to reviews, and gain insights to shape your messaging.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;