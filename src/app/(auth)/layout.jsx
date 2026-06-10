
import Footer from '@/components/shered/Footer';
import Navbar from '@/components/shered/Navbar';

import React from 'react';

const MainAuthLayout = ({ children }) => {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainAuthLayout;