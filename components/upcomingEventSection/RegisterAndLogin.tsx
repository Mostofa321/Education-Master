"use client"

import React from 'react'
import {
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    Input,
    Button,
} from '../materialTailwind/MaterialComponents'
import { tabsData } from './Data'
import Form from './Form'

const RegisterAndLogin = () => {
    const [activeTab, setActiveTab] = React.useState("register");
    return (
        <div>
            {/* Register and Login Header  */}
            <div className=" bg-[url('/ev-bg3.jpg')] h-[159px] rounded-sm w-full bg-center bg-cover">
                <div className='text-[white] p-10 h-full rounded-md bg-gradient-to-t from-[#03294ad1] to-[#0635629e]'>
                    <Typography variant='h4' className='font-normal mb-3'>
                        Register & Login
                    </Typography>
                    <Typography variant='small' className='text-[#e2e2e2] '>
                        Student area velit convallis venenatis lacus quis, efficitur lectus.
                    </Typography>
                </div>
            </div>

            {/* Register & Login Forms Tab  */}
            <div className='bg-[#ececec] px-1'>
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none bg-transparent p-0"
                        indicatorProps={{
                            className:
                                "bg-transparent mt-3 border-b-2 border-[#ee6e73b3] shadow-none rounded-none",
                        }}
                    >
                        {tabsData?.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-[#ee6e73] mt-2" : "mt-2 text-[#ee6e73b3] hover:text-[#ee6e73] transition"}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {tabsData.map(({ value }) => (
                            <TabPanel key={value} value={value}>
                                {/* Register & Login form  */}
                                <Card color="transparent" shadow={false}>
                                    <Form value={value} />
                                </Card>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default RegisterAndLogin