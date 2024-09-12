'use client';
import React from 'react';
import {
    Tab,
    TabPanel,
    TabsContext,
    TabsList,
} from "@material-tailwind-ui/tabs";
import FlightIcon from "@/app/@mail/_components/icons/FlightIcon";
import ExploreIcon from "@/app/@mail/_components/icons/ExploreIcon";
import TripIcon from "@/app/@mail/_components/icons/TripIcon";
import MailList from "@/app/@mail/_components/MailList/MailList";
import {Mail} from "@/app/@mail/_data/mail.data";

interface MailTabListProps {
    items: Mail[];
}

const MailTabList = ({items}: MailTabListProps) => {
    return (
        <TabsContext defaultValue="1" className={'flex-1 flex flex-col'}>
            <TabsList inline >
                <Tab value={"1"} icon={<FlightIcon />}>
                    Flights
                </Tab>
                <Tab value={"2"} icon={<TripIcon />}>
                    Trips
                </Tab>
                <Tab value={"3"} icon={<ExploreIcon />}>
                    Explore
                </Tab>
            </TabsList>
            <TabPanel value={"1"} className={'overflow-auto flex-1'}>
                <MailList items={items} />
            </TabPanel>
            <TabPanel value={"2"}  className={'overflow-auto flex-1'}>
                <MailList items={items} />
            </TabPanel>
            <TabPanel value={"3"}  className={'overflow-auto flex-1'}>
                <MailList items={items} />
            </TabPanel>
        </TabsContext>
    );
};

export default MailTabList;
