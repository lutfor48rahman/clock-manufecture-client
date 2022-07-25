

import React from 'react';
import { Outlet } from 'react-router-dom';
import DashDewer from './DashDewer';

const Dashboard = () => {
    return (
        <DashDewer>
            <Outlet />
        </DashDewer>

    );
};

export default Dashboard;