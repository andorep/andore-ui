'use client';

import React from 'react';
import { TabPanel as AndoreTabPanel, TabPanelProps } from "@andore-ui/tabs";


const TabPanel = (props: TabPanelProps) => {
    return (
        <AndoreTabPanel {...props} />
    );
};

export default TabPanel;
