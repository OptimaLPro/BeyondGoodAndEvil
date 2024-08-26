import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('scrolling to top!');
    }, [pathname]);

    return null;
};

export default ScrollToTop;
