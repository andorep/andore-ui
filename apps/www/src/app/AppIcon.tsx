import React from 'react';

const AppIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 36 34"  xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="8" y="28" width="28" height="6" />
            <rect x="8" width="28" height="6" />
            <rect y="14" width="28" height="6" />
        </svg>


    );
};

export default AppIcon;
