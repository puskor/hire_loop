import Navbar from '@/components/shered/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;