import { GetJob } from '@/lib/actions/job';
import React from 'react';

const AllJobs = async () => {
    const jobs = await GetJob()
    console.log(jobs,"jobs")
    return (
        <div className='text-white'>
            dfvsdfv
        </div>
    );
};

export default AllJobs;