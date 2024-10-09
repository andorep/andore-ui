"use client";

import React from "react";
import { Tab, TabPanel, TabsContext, TabsList } from "@andore-ui/tabs";


const FlightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M280-80v-100l120-84v-144L80-280v-120l320-224v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120L560-408v144l120 84v100l-200-60-200 60Z"/>
    </svg>
);

const TripIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M720-120v-600h80q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120h-80ZM400-720h160v-80H400v80Zm-80 600v-680q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v680H320Zm-160 0q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80v600h-80Z"/>
    </svg>
);

const ExploreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </svg>
);

const Preview = () => {
  return (
      <div className={"w-96"}>
          <TabsContext defaultValue="1">
              <TabsList>
                  <Tab value={'1'} icon={<FlightIcon/>}>Flights</Tab>
                  <Tab value={'2'} icon={<TripIcon/>}>Trips</Tab>
                  <Tab value={'3'} icon={<ExploreIcon/>}>Explore</Tab>
              </TabsList>
              <TabPanel value={'1'}>Tab 1 content</TabPanel>
              <TabPanel value={'2'}>Tab 2 content</TabPanel>
              <TabPanel value={'3'}>Tab 3 content</TabPanel>
          </TabsContext>
      </div>
  );
};

export default Preview;
