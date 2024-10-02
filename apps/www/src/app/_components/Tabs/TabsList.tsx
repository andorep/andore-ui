'use client';

import React from 'react';
import { TabsList as AndoreTabsList, TabsListProps } from "@andore-ui/tabs";


const TabsList = (props: TabsListProps) => {
    return (
        <AndoreTabsList {...props} />
    );
};

export default TabsList;
