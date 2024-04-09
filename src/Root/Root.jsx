import { Outlet } from 'react-router-dom';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div>
            <Navber />
            <div className='max-w-[80%] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;