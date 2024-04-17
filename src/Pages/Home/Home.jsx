import Banner from "../../Components/Banner";
import Cards from "../../Components/Cards";
import blurImg from '../../assets/corn-garden-blur-background-free-photo.jpg';

const Home = () => {
    return (
        <div className="mt-0">
            <div className="bg-repeat-y w-full md:w-[80%] h-[6176px] md:h-[6000px] lg:h-[3924.5px] absolute -z-50 blur" style={{backgroundImage: `url(${blurImg})`}}>
            </div>
            <Banner />
            <Cards />
        </div>
    );
};

export default Home;