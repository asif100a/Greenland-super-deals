import { Outlet, useLocation } from 'react-router-dom';
import Navber from '../Shared/Navber/Navber';
import Footer from '../Shared/Footer';
import { useEffect } from 'react';

const Root = () => {
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if(location.pathname === '/') {
            document.title = 'Greenland Super Deals-Home';
        }
        else if(location.state) {
            document.title = `Details about-${location.state}`;
        }
        else{
            document.title = `Greenland Super Deals${location.pathname.replace('/', '-')}`;
        }
    }, [location.pathname])

    return (
        <div>
            <Navber />
            <div className='max-w-full md:max-w-[80%] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;