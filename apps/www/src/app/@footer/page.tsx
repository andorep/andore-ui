import { Typography } from '@andore-ui/typography';
import React from 'react';

const Footer = () => {
    return (
        <footer className="container mx-auto p-4">
            <Typography variant={'body'} size={'sm'}>
                Built by <a href="https://github.com/andorep/andore-ui" className="underline">andore</a>
            </Typography>
        </footer>
    );
};

export default Footer;
