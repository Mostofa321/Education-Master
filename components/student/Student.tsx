"use client";

import React, { useState } from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
} from '../materialTailwind/MaterialComponents'
import { tabsData } from './Data'
import Form from '../upcomingEventSection/Form'
import ProfileCard from './ProfileCard';
import TabP from './TabP';

const Student = () => {
    const [activeTab, setActiveTab] = useState("My Dashboard");
    return (
        <div>
            <div className="h-[250px] bg-[url('/pro-bg.jpg')] bg-cover bg-no-repeat bg-center"></div>
            <div className='[&>div]:overflow-visible'>
                <Tabs value={activeTab}>
                    <div className='bg-[#2f4f73] lg:pl-[200px]'>
                        <TabsHeader
                            className="overflow-visible rounded-none bg-[#2f4f73] lg:p-0 py-10 flex flex-wrap flex-col md:flex-row gap-4 lg:gap-0 items-center justify-center "
                            indicatorProps={{
                                className:
                                    " rounded-none bg-[#4b6c90]",
                            }}
                        >
                            {tabsData?.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={`text-[white] w-4/5 md:w-2/5 lg:w-auto px-[14px] py-[17px] text-[15px] border lg:border-0 border-[#405d7d] lg:border-r-[1px] lg:border-[#405d7d] hover:bg-[#4b6c90] transition duration-500`}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <div className='bg-[#f7f8f9] '>
                        <TabsBody className='container lg:flex mx-auto bg-[white] p-10 overflow-visible'>
                            <ProfileCard />
                            {tabsData.map(({ value }) => (
                                <TabP key={value} value={value} />
                                
                            ))}
                        </TabsBody>
                    </div>
                </Tabs>
            </div>

        </div>
    )
}

export default Student