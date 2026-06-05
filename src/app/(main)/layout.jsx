import Footer from '@/components/shered/Footer';
import Navbar from '@/components/shered/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;