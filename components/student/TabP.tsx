import { TabPanel } from '../materialTailwind/MaterialComponents'
import React, { FC } from 'react'
import Dashboard from './Dashboard';
import Profile from './Profile';
import Courses from './Courses';
import TimeLine from './TimeLine';

interface TabPTypes {
    value: string;
}

const TabP: FC<TabPTypes> = ({ value }) => {
    return (
        <TabPanel value={value}>
            {
                value === "My Dashboard" &&
                <Dashboard />
            }

            {
                value === "Profile" &&
                <Profile />
            }

            {
                value === "Courses" &&
                <Courses />
            }

            {
                value === "Exams" &&
                <Profile />
            }

            {
                value === "Time Line" &&
                <TimeLine />
            }

            {
                value === "Entry" &&
                <Profile />
            }

            {
                value === "Notifications" &&
                <Profile />
            }
        </TabPanel>
    )
}

export default TabP