
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';

const Root = () => {
    return (
        <div>
            <div className='md:w-[1280px] mx-auto'>
            <Navber> </Navber>
            <Outlet> </Outlet>
            </div>
            <Footer> </Footer>
        </div>
    );
};

export default Root;