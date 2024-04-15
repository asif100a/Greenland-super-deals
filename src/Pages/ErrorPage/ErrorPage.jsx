import errPhoto from '../../assets/404_page_cover.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errPhoto} alt="" className='w-[80%] h-screen' />
        </div>
    );
};

export default ErrorPage;