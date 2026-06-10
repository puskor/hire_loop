import Footer from '@/components/shered/Footer';
import Navbar from '@/components/shered/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='pt-20 bg-black'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;