import AddJobs from '@/components/loged/recruiter/jobs/AddJobs';
import React from 'react';

const Jobs = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/company`)
    const resData = await res.json()

    const resJob = await fetch(`${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/api/jobs`)
    const jobsData = await resJob.json()

    // console.log(resData);
    return (
        <div>
            <AddJobs resData={resData} jobsData={jobsData}/>
        </div>
    );
};

export default Jobs;