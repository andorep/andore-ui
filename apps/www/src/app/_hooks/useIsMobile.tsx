import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust this breakpoint if needed
        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup listener on unmount
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isMobile;
};

export default useIsMobile;
