'use client'
import React from 'react';
import { Card } from "@andore-ui/card";
import {CardProps} from "@andore-ui/card/src";


const CardMediaPlayer = (props: CardProps) => {
    const {children} = props;
    return (
        <Card variant="elevated" disabledStates={true} className={"px-6 h-full relative"}>
            {children}
        </Card>
    );
};

export default CardMediaPlayer;
