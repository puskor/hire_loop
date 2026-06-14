import PremiumJobCard from '@/components/shered/PremiumJobCard';
import { GetJob } from '@/lib/actions/job';
import React from 'react';

const JobApply = async() => {
    const jobs = await GetJob("")

    return (
        <div className='text-white mt-10'>

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '>
                {
                    jobs.map((job) => <PremiumJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default JobApply;