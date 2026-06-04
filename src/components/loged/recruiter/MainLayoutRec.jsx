import React from 'react';
import RecentApplications from './RecentApplications';
import TopCompanies from './TopCompanies';
import StatsCards from './StatsCards';

const MainLayoutRec = () => {
    return (
        <div>
            <StatsCards />
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                <RecentApplications />
                <TopCompanies />
            </div>
        </div>
    );
};

export default MainLayoutRec;