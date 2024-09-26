import React from 'react';

const CopyAllIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="currentColor" {...props}>
            <path
                d="M120-220v-80h80v80h-80Zm0-140v-80h80v80h-80Zm0-140v-80h80v80h-80ZM260-80v-80h80v80h-80Zm100-160q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm40 160v-80h80v80h-80Zm-200 0q-33 0-56.5-23.5T120-160h80v80Zm340 0v-80h80q0 33-23.5 56.5T540-80ZM120-640q0-33 23.5-56.5T200-720v80h-80Z"/>
        </svg>
    );
};

export default CopyAllIcon;
