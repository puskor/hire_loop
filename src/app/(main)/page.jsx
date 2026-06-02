import DreamPosition from '@/components/home/DreamPosition';
import Hero from '@/components/home/Hero';
import Needed from '@/components/home/Needed';
import NextRole from '@/components/home/NextRole';
import Package from '@/components/home/Package';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <DreamPosition />

            <Needed />
            <Package />
            <NextRole />
        </div>
    );
};

export default HomePage;