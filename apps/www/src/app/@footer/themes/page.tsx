import { Typography } from '@andore-ui/typography';
import React from 'react';

const Footer = () => {
    return (
        <footer className="container mx-auto p-4 flex flex-row flex-wrap justify-between gap-4 md:gap-0">
            <Typography variant={'body'} size={'sm'}>
                Built by <a href="https://github.com/andorep/andore-ui" className="underline" target="_blank" rel="noreferrer">andore</a>
            </Typography>
            <Typography variant={'body'} size={'sm'}>
                This page uses <a href="https://github.com/material-foundation/material-color-utilities" className="underline">material-color-utilities</a>,
                licensed under the <a href={'https://github.com/material-foundation/material-color-utilities/blob/main/LICENSE'} className="underline">Apache License 2.0</a>
            </Typography>
        </footer>
    );
};

export default Footer;
