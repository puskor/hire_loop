import MainLayoutSeeker from '@/components/loged/jobSeeker/MainLayoutSeeker';
import MainLayoutRec from '@/components/loged/recruiter/MainLayoutRec';
import getUserSession from '@/lib/core/getUserSession';
import React from 'react';

const Dashboard = async () => {

    const user = await getUserSession()

    return (
        <>
            {
                user.role === "recruiter" ? <MainLayoutRec /> : <MainLayoutSeeker/>
            }

        </>
    );
};

export default Dashboard;