import { brainwave } from '../assets'
import { navigation } from '../constants';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const pathname = useLocation();
    return (
        <div className="fixed top-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6">
            <div className="flex items-center px-5 lg:px-7-5 xl:px-10 max-lg:py-4">
                <a href="#hero" className='block w-48 xl:mr-8'>
                    <img src={brainwave} alt="BrainWave Logo" />
                </a>

                <nav className='hidden fixed top-20 left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navigation.map((item) => (
                            <a href={item.url} key={item.id} 
                            className={`block relative font-code text-2xl  uppercase  transition-colors hover:text-color-1 ${pathname.hash === item.url ? 'lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 xl:px-12 lg:hover:text-n-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm `}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <a href="#signup" className='button hidden mr-8 text-n-1/50 hover:text-n-1 transition-colors lg:block'>
                        New account
                </a>
                <Button href={"#login"} className={"hidden lg:flex"}>
                    Sign in
                </Button>


                
            </div>
        </div>
    )
}

export default Header